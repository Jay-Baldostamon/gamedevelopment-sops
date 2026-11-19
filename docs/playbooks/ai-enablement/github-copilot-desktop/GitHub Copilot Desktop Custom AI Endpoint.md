# 🤖 GitHub Copilot Desktop Custom AI Endpoint Playbook

## DEFINE

| Field         | Value                                                                                                                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playbook Name | GitHub Copilot Desktop Custom AI Endpoint Playbook                                                                                                                                                            |
| Purpose       | Standardize how team members add a company-managed custom AI endpoint in GitHub Copilot Desktop, paste their assigned API key, select the approved model, and verify the connection before using it for work. |
| Owner         | AI Enablement Team                                                                                                                                                                                            |
| Last Updated  | 2026-08-14                                                                                                                                                                                                    |
| Review Cycle  | Every 90 days                                                                                                                                                                                                 |

## Prerequisites

- [ ] GitHub Copilot Desktop is installed and you are signed in
- [ ] You have received your assigned company AI API key
- [ ] You know the approved base URL for the company AI endpoint
- [ ] The approved model name has been provided to you
- [ ] You have permission to use the company AI endpoint

## Step-by-Step Checklist

### Phase 1: Prepare the Key and Model

1. **Confirm** you have received your personal API key from the AI administrator.
2. **Confirm** the approved model name you should select in Copilot Desktop.
3. **Keep** both values available before opening the settings flow.

- [ ] API key is available
- [ ] Approved model name is known
- [ ] Endpoint URL is available

**IF you have not received the API key, THEN contact the AI administrator before continuing.**

---

### Phase 2: Open Model Provider Settings

1. **Open** GitHub Copilot Desktop.
2. **Click** the **cog icon** to open Settings.
3. **Select** **Model providers** in the left panel.
4. **Click** the custom provider entry for your company AI endpoint.

- [ ] Settings is open
- [ ] Model providers page is open
- [ ] Custom provider entry is selected

**IF the custom provider entry does not exist, THEN add the endpoint first using the approved company configuration.**

![][image1]

---

### Phase 3: Configure the Custom Endpoint

1. **Enter** the display name provided by the AI administrator.
2. **Paste** the approved base URL for the company AI endpoint.
3. **Select** the correct wire API for the endpoint, typically `completions` or the approved alternative.
4. **Paste** your assigned API key into the API key field.
5. **Enter** any required custom headers in JSON format if your administrator provided them.

- [ ] Display name is set
- [ ] Base URL is correct
- [ ] Wire API is correct
- [ ] API key is pasted
- [ ] Required custom headers are added

**IF the API key field is blank, THEN confirm the wire API selection and endpoint type are correct before saving.**

![][image2]

---

### Phase 4: Save and Select the Approved Model

1. **Save** the custom endpoint configuration.
2. **Open** the model selector in the chat or session UI.
3. **Select** the approved company model from **Your models**.
4. **Confirm** the selected model shows the custom provider label.

- [ ] Endpoint configuration is saved
- [ ] Model selector is open
- [ ] Approved model is selected
- [ ] Custom provider label is visible

**IF the approved model does not appear, THEN reopen Settings and confirm the endpoint saved successfully.**

![][image3]

---

### Phase 5: Verify the Connection

1. **Open** a new chat or prompt window.
2. **Send** a simple test prompt.
3. **Confirm** the response comes from the approved model.
4. **Confirm** there are no authentication or connection errors.

```text
Confirm that you are connected to the company AI endpoint and using the approved model.
```

- [ ] Test prompt was sent
- [ ] Response was returned successfully
- [ ] No auth or connection errors were shown

**IF the model responds with an error, THEN verify the API key, base URL, and selected model before escalating.**

---

## Common Mistakes & Fixes

| Common Mistake                     | Fix                                                              |
| ---------------------------------- | ---------------------------------------------------------------- |
| Using the wrong API key            | Paste the personal key issued by the AI administrator.           |
| Selecting the wrong model          | Reopen the model selector and choose the approved company model. |
| Entering the wrong endpoint URL    | Re-enter the exact base URL provided by the company AI team.     |
| Forgetting to save the provider    | Save the configuration before testing the model.                 |
| Testing before selecting the model | Choose the approved model first, then send a prompt.             |
| Leaving custom headers incomplete  | Add only the required headers in the approved JSON format.       |

## Success Criteria

- [ ] The company AI custom endpoint is configured in GitHub Copilot Desktop
- [ ] The assigned API key is saved successfully
- [ ] The approved model is visible in the model selector
- [ ] The approved model can be selected before sending prompts
- [ ] A test prompt returns a successful response
- [ ] No authentication or endpoint errors are present

## Storage & Access

Store this playbook in `docs/playbooks/ai-enablement/github-copilot-desktop` so engineers can follow the Copilot Desktop-specific setup flow without copying settings from memory.

Access is required for engineers, team leads, and AI enablement staff who are approved to use the company AI endpoint.

**Always Open Policy:** Keep this playbook visible while configuring the endpoint and selecting the model.

## Next review date

2026-11-12

[image1]: /resources/images/github-copilot-desktop-model-providers.png
[image2]: /resources/images/github-copilot-desktop-model-providers.png
[image3]: /resources/images/github-copilot-desktop-model-selector.png
