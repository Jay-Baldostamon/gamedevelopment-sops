# 🤖 Hurdman AI VS Code Connection Playbook

## DEFINE

| Field         | Value                                                                                                                                                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playbook Name | Hurdman AI VS Code Connection Playbook                                                                                                                                                                                        |
| Purpose       | Standardize how team members connect their VS Code environment to the Hurdman AI custom endpoint so every engineer is using the correct model, API configuration, and endpoint without requiring one-on-one setup assistance. |
| Owner         | AI Administrator                                                                                                                                                                                                              |
| Last Updated  | 2026-05-29                                                                                                                                                                                                                    |
| Review Cycle  | Every 90 days                                                                                                                                                                                                                 |

## Prerequisites

- [ ] VS Code is installed and open
- [ ] Your personal API Key has been received from the AI Administrator
- [ ] You know where to find the model selection dropdown in the VS Code lower-right corner
- [ ] You have internet access to reach `https://llm.hurdman.com`
- [ ] GitHub Copilot or a compatible language model extension is active in VS Code

## Step-by-Step Checklist

### Phase 1: Prepare Your API Key

1. **Confirm** you have received your assigned API Key from the AI Administrator.
2. **Keep** your API Key accessible for the configuration steps below.
3. **Do not** share your API Key with other team members.

- [ ] API Key is received
- [ ] API Key is ready to paste
- [ ] API Key is not shared

**IF you have not received an API Key, THEN contact the AI Administrator before continuing.**

---

### Phase 2: Open the Language Model Configuration

1. **Open** VS Code.
2. **Locate** the model selection dropdown in the lower-right corner of the window.
3. **Click** the cog icon to open the configuration menu.
4. **Click** `Add Models` in the top-right corner of the Language Models modal.

- [ ] VS Code is open
- [ ] Model dropdown is located in the lower-right corner
- [ ] Cog icon is clicked
- [ ] Language Models modal is open
- [ ] `Add Models` is clicked

**IF the cog icon is not visible, THEN confirm that a language model extension such as GitHub Copilot is installed and active.**

![][image1]

---

### Phase 3: Configure the Custom Endpoint

1. **Select** `Custom Endpoint` from the options provided.
2. **Enter** `Hurdman AI` as the custom endpoint Group Name.
3. **Paste** your assigned API Key into the API Key field.
4. **Select** `Chat Completions API` as the API type.

- [ ] `Custom Endpoint` is selected
- [ ] Group Name is set to `Hurdman AI`
- [ ] API Key is pasted
- [ ] `Chat Completions API` is selected

**IF `Custom Endpoint` is not available as an option, THEN check that your VS Code and language model extension are up to date.**

**IF the API Key field is not visible, THEN confirm `Chat Completions API` is selected as the API type.**

![][image2]  
([full image](https://drive.google.com/file/d/1UkuDRg_gbqBcUENfOfglwU_0bz0_C0lZ/view?usp=drive_link))

![][image3]

![][image4]

---

### Phase 4: Apply the JSON Configuration

1. **Open** the custom endpoint JSON configuration editor.
2. **Select all** existing content in the JSON editor.
3. **Delete** the existing content.
4. **Paste** the exact JSON configuration below.
5. **Confirm** the JSON is pasted without modification.
6. **Save** the configuration.

```
{
  "name": "Hurdman AI",
  "vendor": "customendpoint",
  "apiKey": "${input:chat.lm.secret.4f056ad5}",
  "apiType": "chat-completions",
  "models": [
      {
        "id": "deepseek-v4-flash",
        "name": "deepseek-v4-flash",
        "url": "https://llm.hurdman.com",
        "toolCalling": true,
        "vision": true,
        "maxInputTokens": 500000,
        "maxOutputTokens": 500000
      }
  ]
}
```

- [ ] Existing JSON is cleared
- [ ] Exact JSON is pasted
- [ ] No characters were modified
- [ ] Configuration is saved

**IF the JSON is modified in any way, THEN delete all content and re-paste the exact configuration above.**

**IF VS Code shows a JSON syntax error after pasting, THEN delete the content and paste again without extra spaces, line breaks, or formatting changes.**

---

### Phase 5: Verify the Connection

1. **Open** the Copilot Chat window in VS Code.
2. **Confirm** `deepseek-v4-flash` appears as an available model option.
3. **Select** the `deepseek-v4-flash` model from the model selector.
4. **Type** a basic test prompt in the chat window.
5. **Confirm** the model responds correctly.

```
Hello, confirm you are connected as Hurdman AI.
```

- [ ] Chat window is open
- [ ] `deepseek-v4-flash` model is available and selected
- [ ] Test prompt is sent
- [ ] Model responds correctly

**IF the model does not appear, THEN close and reopen VS Code and re-check the JSON configuration.**

**IF the model appears but does not respond, THEN verify your API Key is correct and contact the AI Administrator.**

**IF you receive an authentication or permission error, THEN confirm your API Key with the AI Administrator.**

**![][image5]**

---

## Common Mistakes & Fixes

| Common Mistake                                       | Fix                                                                                     |
| :--------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| Starting setup without the API Key ready             | Contact the AI Administrator and receive the API Key before opening VS Code             |
| Mistyping the Group Name                             | Enter `Hurdman AI` exactly as written, including capitalization                         |
| Selecting the wrong API type                         | Select `Chat Completions API`, not any other API type                                   |
| Modifying the JSON configuration                     | Delete all existing content and paste the exact JSON block without changes              |
| Pasting the JSON with extra characters or formatting | Clear the editor completely and re-paste from the source                                |
| Sharing your API Key with another team member        | Each engineer must have their own API Key from the AI Administrator                     |
| Skipping the verification step                       | Always send a test prompt to confirm the connection works before using it for real work |
| Model not appearing after configuration              | Close and reopen VS Code, then verify the saved JSON configuration                      |

## Success Criteria

- [ ] API Key is received from the AI Administrator
- [ ] `Custom Endpoint` is added with Group Name `Hurdman AI`
- [ ] `Chat Completions API` is selected
- [ ] Exact JSON configuration is applied without modification
- [ ] `qwen3` model is available in the model selector
- [ ] Test prompt returns a successful response from the model
- [ ] No authentication or connection errors are present

## Storage & Access

Store this playbook in the central team playbook library, internal onboarding documentation, or engineering wiki where every team member setting up VS Code can access it without asking for help.

**Always Open Policy:** Keep this playbook open during setup. Do not attempt to configure the endpoint from memory. Follow each phase in order to prevent incorrect JSON, wrong API type selection, or missing API Key errors.

Use this playbook for:

- New team member VS Code onboarding
- Reconnecting after VS Code reinstallation
- Troubleshooting missing or broken Hurdman AI model access
- Cross-training team members on the AI tooling setup

## Next review date

2026-07-01

[image1]: /resources/images/hurdman-ai-cog.png
[image2]: /resources/images/hurdman-ai-models.png
[image3]: /resources/images/hurdman-ai-custom-endpoint.png
[image4]: /resources/images/hurdman-ai-chat-completions.png
[image5]: /resources/images/hurdman-ai-chatbox.png
