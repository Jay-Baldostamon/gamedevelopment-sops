# Unity Repo Checklist

Used on **Day 6 — Game repo setup**.

A Unity project needs a few settings before it is safe to put on GitHub. Skip them and the repository fills with junk, large files fail to upload, or Git cannot show what changed.

Ask your AI assistant to walk you through any line you do not understand. Remember: **AI writes, you wire.** Ask for click-by-click steps for anything inside the Unity editor.

## 1. Editor Settings (inside Unity)

- [ ] Project Settings → Editor → **Asset Serialization → Mode: Force Text**
  - Why: saves scenes and prefabs as readable text so Git can show changes.
- [ ] Project Settings → Version Control → **Mode: Visible Meta Files**
  - Why: Unity makes a `.meta` file for every asset. Git must see them.

## 2. The `.gitignore` File

- [ ] A file named `.gitignore` sits in the project root, the folder that contains `Assets`
- [ ] It is GitHub's official Unity template (GitHub Desktop offers it as "Unity" when creating the repository)
- [ ] It ignores at least these folders:

```
/Library/
/Temp/
/Obj/
/Build/
/Builds/
/Logs/
/UserSettings/
```

Why: Unity rebuilds these on every PC. `Library` alone can be several gigabytes.

## 3. Git LFS (large files)

Git handles text well and big binary files badly. Git LFS stores the big files separately.

- [ ] `git lfs install` has been run once in the project folder
- [ ] A `.gitattributes` file sits in the project root and tracks art, audio and model files:

```
*.png filter=lfs diff=lfs merge=lfs -text
*.jpg filter=lfs diff=lfs merge=lfs -text
*.psd filter=lfs diff=lfs merge=lfs -text
*.tga filter=lfs diff=lfs merge=lfs -text
*.fbx filter=lfs diff=lfs merge=lfs -text
*.glb filter=lfs diff=lfs merge=lfs -text
*.obj filter=lfs diff=lfs merge=lfs -text
*.wav filter=lfs diff=lfs merge=lfs -text
*.mp3 filter=lfs diff=lfs merge=lfs -text
*.ogg filter=lfs diff=lfs merge=lfs -text
*.mp4 filter=lfs diff=lfs merge=lfs -text
*.ttf filter=lfs diff=lfs merge=lfs -text
```

- [ ] `.gitattributes` is committed **before** any art or audio is added

## 4. What Gets Committed

- [ ] `Assets/` — yes, including every `.meta` file
- [ ] `Packages/` — yes
- [ ] `ProjectSettings/` — yes
- [ ] `Library/`, `Temp/`, `Logs/`, `UserSettings/`, build folders — never

## 5. Repo Basics

- [ ] The repository is **private**
- [ ] `README.md` exists with: game name, one-line pitch, pinned Unity version, how to open and play, controls, current status
- [ ] `ASSETS.md` exists (an empty table is fine): file, who or what made it, date
- [ ] The project folder is **not** inside Google Drive, OneDrive or Dropbox

## 6. Proof It Works

- [ ] The first commit is pushed and `Library` does not appear on GitHub
- [ ] A small change in a scene is committed and pushed
- [ ] On GitHub, that scene's change shows as readable text, which proves Force Text is on
- [ ] A second person can open the repository

## Common Mistakes

| Mistake | Fix |
| --- | --- |
| `Library` folder was committed | Add the Unity `.gitignore`, then ask AI how to remove `Library` from Git without deleting it from disk |
| Deleted or ignored `.meta` files | Never delete them by hand. Restore them from Git. Missing `.meta` files break links between objects. |
| Added art before setting up LFS | Ask AI how to migrate existing files into LFS |
| Moved or renamed files in Windows Explorer | Move and rename inside the Unity editor so the `.meta` file follows |
| `.gitignore` is in the wrong folder | It must sit next to `Assets`, not inside it and not above the project |
