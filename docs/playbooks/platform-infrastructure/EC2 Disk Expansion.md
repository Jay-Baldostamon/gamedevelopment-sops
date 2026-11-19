# 💾 EC2 Disk Expansion Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | 💾 EC2 Disk Expansion ("Grow the Drive") |
| Purpose | Safely expand an EC2 instance's EBS volume and ext4 filesystem on Ubuntu when disk usage hits the danger zone. Prevents swap disruption, temp table failures, database crashes, and unplanned downtime caused by a full disk. |
| Owner | SysAdmin — Alan Francis Baldelobar (CTO) |
| Last Updated | 2026-02-24 |
| Review Cycle | Every 90 days — Next review: 2026-05-25 |

## Prerequisites
Before starting, confirm **ALL** of the following:

- [ ] EC2 instance is already configured and running on **Ubuntu**  
- [ ] You have **SSH access** to the target server (key pair \+ correct security group rules)  
- [ ] You have **AWS Console access** with permissions to modify EBS volumes (`ec2:ModifyVolume`, `ec2:DescribeVolumes`)  
- [ ] You know the **Instance ID** of the target EC2 server  
- [ ] You have confirmed **no other volume modification is currently in progress** on this volume (AWS allows only one modification at a time per volume)  
- [ ] You have a recent **snapshot or backup** of the volume (or have confirmed one exists)

⚠️ **IF you do not have a recent backup, THEN create a snapshot of the volume before proceeding. Do NOT skip this step.**

---

## Step-by-Step Checklist
---

### Phase 1: Assess — Confirm Disk Expansion Is Needed

1. **Open** your terminal application  
2. **Connect** to the EC2 instance via SSH:

```shell
ssh -i /path/to/your-key.pem ubuntu@<INSTANCE_PUBLIC_IP_OR_DNS>
```

3. **Run** the disk usage check:

```shell
df -h
```

4. **Identify** the target volume (e.g., `/dev/xvda1` or `/dev/nvme0n1p1`) and note its **current size** and **% used**  
5. **Evaluate** the usage percentage:  
   - **IF usage is ≥ 90%, THEN proceed to Step 6**  
   - **IF usage is \< 90%, THEN STOP — expansion is not yet required. Document the current usage and set a reminder to re-check in 7 days**  
6. **Calculate** the new target size using the Sizing Policy table above  
7. **Evaluate** the sizing result:  
   - **IF the new target size would exceed 50 GB, THEN STOP this playbook. Open a ticket for architecture review (evaluate ALB, RDS, storage tiering, or data cleanup). Notify the MySQL/database team of the situation and your escalation**  
   - **IF the new target size is ≤ 50 GB, THEN proceed to Phase 2**  
- [ ] Target volume identified: `_______________` (e.g., `/dev/nvme0n1p1`)  
- [ ] Current size: `_____ GB`  
- [ ] Current usage: `_____%`  
- [ ] New target size: `_____ GB`  
- [ ] Confirmed target size ≤ 50 GB

---

### Phase 2: Expand Volume in AWS Console

8. **Open** the AWS Management Console in your browser  
9. **Navigate** to **EC2** → left sidebar → **Instances**  
10. **Click** on the target Instance ID  
11. **Click** the **Storage** tab in the instance detail panel  
12. **Click** the **Volume ID** (e.g., `vol-0abc123def456`) listed under Block devices  
13. **Verify** you are now on the **Volumes** list page with the correct volume highlighted  
14. **Click** the **Volume ID** link again to open the volume detail page  
15. **Click** the **Actions** dropdown (top right) → **Modify volume**  
16. **Change** the **Size** field from the current value to your calculated **new target size**  
17. **Leave** all other fields unchanged (Volume Type, IOPS, Throughput)  
18. **Click** the **Modify** button  
19. **Click** **Modify** again on the confirmation dialog  
- [ ] Volume modification request submitted successfully  
- [ ] No error messages displayed

---

### Phase 3: Wait for Volume State

20. **Stay** on the volume detail page in the AWS Console  
21. **Watch** the **Volume state** column. It will transition through these states:  
    - `in-use` → `modifying` → `optimizing` → `in-use (completed)`  
22. **Wait** until the state reaches **at least** `optimizing`  
    - **IF the state shows `optimizing` or `in-use (completed)`, THEN proceed to Phase 4**  
    - **IF the state shows `failed`, THEN STOP. Screenshot the error, restore from your snapshot if needed, and escalate to the team**

💡 **Tip:** The `modifying` → `optimizing` transition typically takes 1–5 minutes for volumes under 50 GB. You do NOT need to wait for `optimizing` to fully complete before proceeding — the OS can already see the new size.

- [ ] Volume state has reached `optimizing` or later

---

### Phase 4: Expand the Filesystem via SSH

23. **Open** your terminal (or return to your existing SSH session)  
24. **Connect** to the EC2 instance via SSH (if not already connected):

```shell
ssh -i /path/to/your-key.pem ubuntu@<INSTANCE_PUBLIC_IP_OR_DNS>
```

25. **Verify** the OS can see the new disk size (block device level):

```shell
lsblk
```

26. **Confirm** the block device (e.g., `nvme0n1` or `xvda`) now shows the **new target size**, but the partition still shows the **old size**  
    - **IF the block device still shows the old size, THEN wait 2 more minutes and run `lsblk` again**  
    - **IF the block device shows the new size, THEN proceed to Step 27**  
27. **Grow** the partition to use all available space. Replace the device and partition number with your actual values:

```shell
sudo growpart /dev/nvme0n1 1
```

    ℹ️ **Note:** There is a **space** between `/dev/nvme0n1` and `1`. The `1` is the partition number. Common examples:

    

    - NVMe drives: `sudo growpart /dev/nvme0n1 1`  
    - Xen drives: `sudo growpart /dev/xvda 1`  
28. **Verify** the partition now reflects the new size:

```shell
lsblk
```

    - **IF the partition size matches the new target size, THEN proceed to Step 29**  
    - **IF the partition size is unchanged, THEN re-run Step 27 and check for error messages**  
29. **Resize** the ext4 filesystem to fill the expanded partition:

```shell
sudo resize2fs /dev/nvme0n1p1
```

    ℹ️ **Note:** Use the **partition path** here (with `p1`), not the block device. Common examples:

    

    - NVMe drives: `sudo resize2fs /dev/nvme0n1p1`  
    - Xen drives: `sudo resize2fs /dev/xvda1`  
30. **Verify** the filesystem now shows the new size and reduced usage percentage:

```shell
df -h
```

- [ ] `lsblk` shows new block device size  
- [ ] `growpart` completed without errors  
- [ ] `lsblk` shows new partition size after growpart  
- [ ] `resize2fs` completed without errors  
- [ ] `df -h` shows new filesystem size  
- [ ] `df -h` shows usage percentage is now **below 90%**

---

### Phase 5: Verify & Notify Stakeholders

31. **Run** a final health check on the server:

```shell
df -h
free -h
sudo systemctl status mysql
```

32. **Confirm** all three commands return healthy output:  
      
    - `df -h` — target volume is below 90% usage  
    - `free -h` — swap space is available and not fully consumed  
    - `systemctl status mysql` — MySQL is `active (running)`  
    - **IF MySQL is not running, THEN restart it with `sudo systemctl restart mysql` and verify it starts successfully**

    

33. **Notify** the MySQL/database team and relevant stakeholders using the following template:

```
✅ EC2 Disk Expansion Complete

Server:        <INSTANCE_ID / hostname>
Volume:        <VOLUME_ID>
Previous Size: <OLD_SIZE> GB
New Size:      <NEW_SIZE> GB
Current Usage: <NEW_USAGE_PERCENT>%
Status:        All services verified healthy
Performed By:  <YOUR_NAME>
Date:          <TODAY'S_DATE>

No downtime occurred. MySQL is running normally.
Please report any issues immediately.
```

34. **Send** the notification to the MySQL/database team via your standard communication channel (Slack, email, etc.)  
      
- [ ] Server health check passed  
- [ ] MySQL confirmed running  
- [ ] Stakeholder notification sent  
- [ ] Notification acknowledged by at least one team member

---

## Common Mistakes & Fixes
| Mistake | Fix |
| :---- | :---- |
| Running `resize2fs` on the block device instead of the partition | Use the partition path: `/dev/nvme0n1p1` (with `p1`), NOT `/dev/nvme0n1` |
| Forgetting the space in `growpart` command | It's `sudo growpart /dev/nvme0n1 1` (space before `1`), NOT `sudo growpart /dev/nvme0n11` |
| Running filesystem commands before volume reaches `optimizing` | Wait in the AWS Console until state is at least `optimizing` before SSH-ing in for partition/filesystem work |
| Expanding past 50 GB without architecture review | STOP and escalate. Volumes over 50 GB need evaluation for ALB, RDS, or storage tiering — this playbook is not designed for large volumes |
| Skipping the snapshot/backup before modifying | ALWAYS create or confirm a snapshot exists before touching the volume. A failed modification with no backup can mean permanent data loss |
| Modifying a volume that already has a modification in progress | AWS allows only one modification at a time. Check the volume state — if it says `optimizing`, wait for it to complete before starting again |
| Using `xfs_growfs` instead of `resize2fs` | Our Ubuntu servers use **ext4**. The correct command is `resize2fs`. `xfs_growfs` is for XFS filesystems (Amazon Linux default) |
| Not notifying the MySQL/database team | Always send the stakeholder notification. The database team needs to know the environment changed, even if nothing broke |

---

## Success Criteria
- [ ] `df -h` shows the target volume at the new size with usage **below 90%**  
- [ ] `lsblk` shows the partition matching the full block device size (no unallocated space)  
- [ ] MySQL is running and healthy (`active (running)`)  
- [ ] Swap is functioning normally (`free -h` shows swap available)  
- [ ] AWS Console shows volume state as `in-use` (fully optimized)  
- [ ] Stakeholder notification sent and acknowledged  
- [ ] No errors in `/var/log/syslog` related to disk or filesystem

---

## Storage & Access
📂 **Always Open Policy:** When performing this disk expansion, this playbook **must be open and visible** on your screen. This is not optional — it is a professional standard to prevent human error and ensure every step is followed in order. Do not work from memory.

- **Store** this playbook in the team's central documentation system (Google Docs, Notion, Confluence, etc.)  
- **Use** this playbook for onboarding new SysAdmins and cross-training team members  
- **When a disk-related mistake happens**, ask: *"Was the playbook open and followed?"*  
  - **IF no playbook was followed, THEN this is a training/accountability conversation**  
  - **IF the playbook was followed but the outcome was wrong, THEN the playbook owner updates it**

---

## Next review date
2026-02-24

## Why 90% Is the Danger Zone
Disk expansion is triggered at **≥ 90% usage** for the following technical reasons:

- **Swap space disruption** — The OS can no longer allocate swap effectively, leading to OOM kills and frozen processes  
- **Temp table failures** — MySQL (and other services) write temporary tables to disk; insufficient space causes query failures and crashes  
- **Journal / log starvation** — System and application logs fail to write, making incident investigation impossible  
- **inode pressure** — Filesystem metadata operations degrade, causing unpredictable slowdowns even before hitting 100%  
- **Zero-room cascades** — At 100%, the server can become unrecoverable remotely (cannot write PID files, SSH keys, etc.)

🚨 **Bottom line:** By 90%, the server is already in a degraded state. This is not a "nice to have" — it is a **prevent-the-outage** action.

---

## Sizing Policy
| Current Volume Size | Recommended New Size | Notes |
| :---- | :---- | :---- |
| \< 25 GB | Double it | Default for small setups, staging, and production-testing environments |
| 25 GB – 50 GB | Double it (up to 50 GB) | 50 GB is the ceiling for this playbook's "just expand it" approach |
| \> 50 GB | **STOP — Do not expand** | Escalate to architecture review. Evaluate ALB, RDS, storage tiering, or data cleanup. See *Phase 1, Step 7* below |

---
