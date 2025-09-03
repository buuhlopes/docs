---
sidebar_position: 4
sidebar_label: Production Setup
title: Production Setup
---

:::warning
The information in this section needs updating and should be ignored. Please have patience while we take care of it.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const your_domain = "devportal.yourdomain.com";

Welcome to the VeeCode Platform DevPortal complete product installation guide. This guide will help you install the product. You will need an Kubernetes cluster for this installation.

## Overview

This guide will cover the following steps:

1. **Creating a Repository for Hosting Your Catalog in the DevPortal**
2. **Configuring the DevPortal with your credentials and deploying it to your cluster**
3. **Accessing the DevPortal**

By following these steps, you'll be able to install the DevPortal product on your cluster and explore its features.

To continue, select your preferred provider:

<Tabs groupId="providers1">
<TabItem value="Github" label="Github">

## **Prerequisites (GitHub)**

Before you start, you'll need to have the following:

- An existing Kubernetes cluster for the installation.
- A GitHub account.
- A GitHub OAuth App Client ID and Client Secret
- A GitHub personal access token
- A PostgreSQL database.

In the next sections, we will provide a brief tutorial on **how to generate the GitHub OAuth App Client ID, Client Secret, and a personal access token**. If you already know how to generate these or have them readily available, feel free to skip the upcoming tutorial and proceed directly to Step 1 of the installation guide.

### Create a new GitHub OAuth App

1. **Create a New OAuth App**

 First, **[click here](https://github.com/settings/developers)** and then click on "New OAuth App". Fill in the required information, including:

- **Application name:** Choose a name that's easily identifiable, such as "devportal".
- **Homepage URL:** https://{your_domain}
- **Description:** (Optional) Add a brief description of the application, such as "VeeCode DevPortal".
- **Authorization callback URL:** https://{your_domain}/api/auth/github/handler/frame

Make sure to replace "**{your_domain}**" with the actual domain used in your kubernetes applications.

Leave the "Enable device flow" checkbox unselected and click on "Register application".

2. Write down the **Client ID** and click on "**Generate a New Client Secret**"

After registering the OAuth App, save the Client ID displayed on the screen. Then, click on "**Generate a new client secret**" and save the generated Client Secret.

Finally, click on "Update application" at the bottom of the page to save your changes.

By completing these steps, you have successfully generated a GitHub OAuth App and collected the Client ID and Client Secret to use in your application.

The reason for generating these credentials is to enable the Devportal to authenticate users via GitHub. The Client ID uniquely identifies your application, while the Client Secret serves as a secret key for authentication. This OAuth App allows the Devportal to securely connect to GitHub's API and access user information, ensuring a seamless integration between the Devportal and users' GitHub accounts.

### Create an Access Token on GitHub
1. **Create a new Access Token**

To generate an access token, **[click here](https://github.com/settings/tokens)** and then click "Generate new token". Choose the **classic mode** option and fill in the requested information.

- Name: any proper label, such as "devportal-token"
- Expiration date: we recommend setting it to 90 days

2. **Select the Correct Scopes** for the Token In the "Select scopes" section, select the "repo" scopes (select all) and "workflow" scopes. Make sure no other option is selected.

3. **Create the Token**

Click "Generate token" to create the access token. Copy the token and store it in a secure location, as it will only be displayed once.

With these three steps, you have successfully generated an access token on GitHub. Make sure to use to keep those safe.

The reason for the generation of these credentials is so that you can have access to the Devportal plugins.

</TabItem>

<TabItem value="Gitlab" label="Gitlab">

## **Prerequisites (GitLab)**

Before you start, you'll need to have the following:

- An existing Kubernetes cluster for the installation.
- A GitLab account.
- A GitLab personal access token.
- A PostgreSQL database.

In the next sections, we'll provide a brief tutorial on **how to generate a GitLab personal access token**. If you already know how to generate this token or if you have it readily available, feel free to skip the upcoming section and proceed directly to Step 1 of the installation guide.

### Create an Access Token on GitLab

1. **Log in to your GitLab account**: Visit **`https://gitlab.com/users/sign_in`** and enter your credentials to log in.
2. **Navigate to your profile settings**: Click on your account icon in the upper right corner of the GitLab interface and select "Settings" from the dropdown menu.
3. **Go to the Personal Access Tokens section**: On the left side menu, click on "Access Tokens".
4. **Create a new token**:
    - **Name**: Enter a name for the token that describes its purpose, such as "Personal Access Token".
    - **Expires at**: Optionally, you can set an expiration date for the token.
    - **Scopes**: Choose the appropriate scopes for this token. For instance, if you want the token to be able to read and write to repositories, you should select the "read_repository" and "write_repository" scopes.
5. **Create the token**: Click the "Create personal access token" button at the bottom of the page.
6. **Copy your token**: After creating the token, you will see a token value on the page. This is your personal access token and it will be shown only once, so copy it and keep it in a safe place.
The reason for the generation of these credentials is so that you can have access to the Devportal plugins.


**Important:** Keep your Personal Access Token saved, as you will need it in subsequent steps of the installation process.

</TabItem>
</Tabs>

## **Step 1: Creating a Repository for Hosting Your Catalog in the DevPortal**

The initial step to using the DevPortal involves setting up a repository to host your catalog. The catalog maps and exposes specifications, APIs, templates, and other resources. Depending on your preferred provider (GitHub or GitLab), the process may differ slightly.

First, select your preferred provider:

<Tabs groupId="providers1">
<TabItem value="Github" label="Github">

Creating a repository on Github with the files you have, follows this process:

1. **Go to**  [public-catalog](https://github.com/veecode-platform/public-catalog)  on GitHub.
2. **In the upper right** corner of the page, click the "Fork" button.
3. **In "Owner"**, select your account or the organization that you want to fork the repository to. Keep the original repository name and then click "Create fork"
4. **The repository** will be forked to your account.
5. **You will** be redirected to your forked repository.

Now you can make changes to your forked repository without affecting the original repository.

**Important**: Please remember to save the name of the repository you created, as you will need it in subsequent steps of the installation process.

And there you have it! Your GitHub repository is now set up correctly for the DevPortal to map and expose your catalog's contents.


</TabItem>

<TabItem value="Gitlab" label="Gitlab">

Creating a repository on GitLab with the files you have, follows this process:

1. **Access** [public-catalog](https://github.com/veecode-platform/public-catalog)
2. **Click on the "Clone" button** and select "Clone with HTTPS".
3. **Copy** the URL of the repository.
4. **Log into your GitLab** account and navigate to the "New project" page. You can do this by clicking on the "+" icon on the upper left corner and then selecting "New project/repository".
5. **Choose** "Import project".
6. **Select** "Repository by URL" as the source repository.
7. **Paste** the URL of the repository you want to import into the "Git repository URL" field.
8. **Click** on the "Import" button".

The repository will be imported to your GitLab account.

**Important**: Please remember to save the name of the repository you created, as you will need it in subsequent steps of the installation process.

Your GitLab repository is now correcly setup for the DevPortal to map and expose your catalog's contents.

</TabItem>
</Tabs>

## **Step 2: Configuring the DevPortal with your credentials and deploying it to your cluster**

To configure DevPortal deployment, edit the YAML file provided below and **replace** the following information with your own:

The file should be created with the name "values" by default.

<Tabs groupId="providers1">
<TabItem value="Github" label="Github">

1. Copy this values.yaml file:
    
    ```yaml
    replicas: 1
    image:
      repository: veecode/devportal-bundle
      tag: latest
      pullPolicy: IfNotPresent
    
    environment: development
    
    service:
      enabled: true
      name: devportal
      type: ClusterIP
      containerPort: 7007
    
    ingress:
      enabled: true
      host: <devportal-host> #devportal.com
      className: nginx
      # className: kong
      # annotations:
      #   konghq.com/https-redirect-status-code: "308"
      #   konghq.com/preserve-host: "true"
      #   konghq.com/protocols: "https"
      #   konghq.com/strip-path: "false"
      tls:
        secretName: devportal-secret
    
    resources:
      requests:
        cpu: 500m
        memory: 512Mi
      limits:
        cpu: 1000m
        memory: 1Gi
    
    appConfig:
      title: Devportal
      app:
        baseUrl: <devportal-host>
      backend:
        baseUrl: <devportal-host>
        secret: 56616a93-ac28-42ab-929d-6ec1fc008c54
      database:
        client: pg
        connection:
          host: <database-url>
          port: 5432
          database: platform_devportal
          user: <username>
          password: <password>
    
    auth:
      providers:
        github:
          clientId: <github-client-id>
          clientSecret: <github-client-secret>
    
    integrations:
      github:
        token: <github-token>
    
    catalog:
      providers:
        github:
          organization: <github-organization> # string
          catalogPath: /catalog-info.yaml # string
          filters:
            branch: main # Optional. Uses `master` as default
            repository: <repository-name> #suggestion devportal-catalog
            validateLocationsExist: true
    
    platform:
      guest:
        enabled: true
      apiManagement:
        enabled: false
        readOnlyMode: false
    ```
    
2. **Replace `<devportal-host>`**: This placeholder appears in two places: under **`ingress.host`**, and in **`appConfig`** under **`app.baseUrl`** and **`backend.baseUrl`**. Replace it with the hostname where your DevPortal will be accessible, such as **`devportal.yourdomain.com`**.
3. **Update Database Connection**: In the **`appConfig.database.connection`** section, you should replace:
    - **`<database-url>`**: Replace it with your PostgreSQL database server's hostname.
    - **`<username>`** and **`<password>`**: Replace these with the appropriate credentials to access your PostgreSQL database.
4. **Set GitHub OAuth Credentials**: In the **`auth.providers.github`** section, replace:
    - **`<github-client-id>`** and **`<github-client-secret>`**: Replace these with your GitHub OAuth app's client ID and client secret.
5. **Set GitHub Token**: In the **`integrations.github`** section, replace **`<github-token>`** with your GitHub personal access token.
6. **Configure Catalog Repository**: In the **`catalog.providers.github`** section:
    - Replace **`<github-organization>`**: This should be replaced with your GitHub username or organization name.
    - Replace **`<repository-name>`**: This should be replaced with the name of your GitHub repository.

</TabItem>

<TabItem value="Gitlab" label="Gitlab">

1. Copy this values.yaml file:
    
    ```yaml
    replicas: 1
    image:
      repository: veecode/devportal-bundle
      tag: latest
      pullPolicy: IfNotPresent
    
    environment: development
    
    service:
      enabled: true
      name: devportal
      type: ClusterIP
      containerPort: 7007
    
    ingress:
      enabled: true
      host: <devportal-host> #devportal.com
      className: nginx
      # className: kong
      # annotations:
      #   konghq.com/https-redirect-status-code: "308"
      #   konghq.com/preserve-host: "true"
      #   konghq.com/protocols: "https"
      #   konghq.com/strip-path: "false"
      tls:
        secretName: devportal-secret
    
    resources:
      requests:
        cpu: 500m
        memory: 512Mi
      limits:
        cpu: 1000m
        memory: 1Gi
    
    appConfig:
      title: Devportal
      app:
        baseUrl: <devportal-host>
      backend:
        baseUrl: <devportal-host>
        secret: 56616a93-ac28-42ab-929d-6ec1fc008c54
      database:
        client: pg
        connection:
          host: <database-url>
          port: 5432
          database: platform_devportal
          user: <username>
          password: <password>
    
    auth: {}
    
    integrations:
      gitlab:
        token: <gitlab-token>
    
    catalog:
      providers:
        gitlab:
          branch: main # Optional. Uses `master` as default
          group: <gitlab group/subgroup> # Optional. Group and subgroup (if needed) to look for repositories. If not present the whole project will be scanned
          entityFilename: catalog-info.yaml # Optional. Defaults to `catalog-info.yaml`
          projectPattern: <repository-name> #suggestion devportal-catalog
    
    platform:
      guest:
        enabled: true
      apiManagement:
        enabled: false
        readOnlyMode: false
    ```
    
2. **Replace `<devportal-host>`**: You'll see this in two places: once under **`ingress.host`** and twice under **`appConfig`**. This should be replaced with the hostname where you will be accessing your DevPortal. It would typically be the domain name or IP address where your DevPortal service will be accessible. For example, it could be **`devportal.yourcompany.com`**.
3. **Update Database Connection**: In the **`appConfig.database.connection`** section, replace:
    - **`<database-url>`**: Replace it with the hostname of your PostgreSQL database server.
    - **`<username>`** and **`<password>`**: Replace these with the credentials used to access your PostgreSQL database.
4. **Set GitLab Token**: In the **`integrations.gitlab`** section, replace **`<gitlab-token>`** with the GitLab personal access token you created earlier.
5. **Configure Catalog Repository**: In the **`catalog.providers.gitlab`** section:
    - Replace **`<gitlab group/subgroup>`**: This is the group or subgroup in GitLab where your repository exists. If your repository is under a subgroup, it should be formatted as **`group/subgroup`**.
    - Replace **`<repository-name>`**: This should be replaced with the name of your GitLab repository.

</TabItem>
</Tabs>

1. Open a terminal in the same directory as the YAML file.
2. Add the Veecode Platform repository to Helm by executing the following command:
    
    ```
    helm repo add veecode-platform https://veecode-platform.github.io/public-charts/
    ```
    
    This command enables Helm to access charts from the Veecode Platform repository.
    
3. Update Helm with the latest chart versions from all your repositories:
    
    ```
    helm repo update
    ```
    
    This command retrieves the latest version information about all the charts from the repositories that Helm is aware of.
    
4. After successfully completing the steps above, you can install or upgrade the Devportal platform using the following command:
    
    ```
    helm upgrade platform-devportal --install --values ./values.yaml veecode-platform/devportal
    ```
    
    This command upgrades (or installs if it does not exist) the platform-devportal release with the configuration specified in the **`values.yaml`** file. The chart used is from the veecode-platform repository, specifically the **`devportal`** chart.
    

By following these steps, Helm is properly configured with the Veecode Platform repository and updated with the latest chart information before upgrading or installing the Devportal platform.

:::info Disclaimer
If you're interested in a deeper understanding of the DevPortal chart, visit the documentation on Artifact Hub, [click here](https://artifacthub.io/packages/helm/veecode-platform/devportal). 
:::

## **Step 3: Accessing the DevPortal**

Once the DevPortal deployment is completed, you can access it by following this step:

1. **Open your web browser and navigate to the DevPortal host.**

You should now have full access to the VeeCode Platform DevPortal and be able to explore its features.

## **Conclusion**

Congratulations! You have successfully installed the VeeCode Platform DevPortal. By following this product installation guide, you have set up the DevPortal on your cluster and can now begin to use.

If you encounter any issues during the installation process, please reach out to the [support team](https://platform.vee.codes/contact-us/) for assistance or join our [community](https://github.com/orgs/veecode-platform/discussions).
