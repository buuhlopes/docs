---
sidebar_position: 4
sidebar_label: Github Token
title: Github personal Token
---

In this step you will obtain a Github personal token for the DevPortal to connect to Github.

:::warning
Configuring a Github App in adition to a token is not required for local setup, but it is recommended for real environments. Relying only on a token will have you hit GitHub API's rate limits very quickly.
:::

## Create an Access Token on GitHub

Access the [Github access token](https://github.com/settings/tokens) page and follow these steps:

1. Create a new "classic" access token on GitHub (for simplicity):

    - **Name:** An appropriate label, such as "devportal-token".
    - **Expiration Date:** Recommended 90 days.
    - **Scopes:** Select "repo" (full control) and "workflow".

2. Take note of the generated token.

The token will only be displayed once, so make sure to store it in a safe place to use later on. You may keep it for now in an environment variable:

```bash
export GITHUB_TOKEN=ghp_...
```

## Alternative: Create a Fine-grained Access Token instead

You may prefer to use safer and less-privileged fine grained tokens instead, so you can restrict access to specific repositories or organizations.

1. Create a new "fine grained" access token on GitHub (more secure):

    - **Token name:** An appropriate label, such as "devportal-token".
    - **Resource Owner:** Pick your GitHub username or organization (you may want to create a new org just for this demo).
    - **Repository access:** choose "All repositories" (makes sense for an IDP).
    - **Expiration:** Recommended 90 days.
    - **Permissions:** this is the tricky part, because choices here depend on what DevPortal features you want to use. A typical setup should require (NOTE: still testing this):
      - **Repository permissions**
        - **Actions:** Read/Write.
        - **Administration:** Read/Write.
        - **Metadata:** Read-only.
        - **Contents:** Read/Write.
        - **Pull requests:** Read-only.
        - **Workflows:** Read/Write.
      - **Organization permissions**
        - **Administration:** Read-only.
        - **Members:** Read-only.

2. Take note of the generated token.

If everything is set up correctly, proceed to the next step.
