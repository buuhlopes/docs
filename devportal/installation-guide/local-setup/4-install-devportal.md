---
sidebar_position: 5
sidebar_label: DevPortal Installation
title: Installing the DevPortal
---

In this step, you will install DevPortal by configuring GitHub credentials and integrating them into the Kubernetes environment. This process includes creating an OAuth application on GitHub and generating an access token.

### Prerequisites

Before starting the installation of DevPortal, you will need:

- An existing Kubernetes cluster (the one you started with `vkdr infra up`).
- A GitHub access token (obtained on previous step).
- GitHub Client ID and Client Secret (obtained on previous step).
- A DNS name to access DevPortal (we are using `devportal.localhost`).

### Install DevPortal (simplest)

After gathering all the necessary information (token, Client ID, and Client Secret), run the following command to install DevPortal:

```sh
vkdr devportal install \
  --github-token=$GITHUB_TOKEN \
  --install-samples
```

### Access DevPortal Locally

Access DevPortal locally at:

```sh
http://devportal.localhost:8000/
```

:::warning
You may need to add `devportal.localhost` to your `/etc/hosts` file resolving to `127.0.0.1`.
:::

Upon completing the installation of DevPortal, navigate on its web interface to explore the available features and functionalities. A couple of sample applications and APIs were deployed and catalogued for you to test and interact with.

### What has been installed?

The DevPortal installation above includes the following components:

- **VeeCode DevPortal:** The main web interface for managing APIs and applications.
- **Kong Gateway:** The API gateway that manages apps and API traffic (also the cluster's ingress controller).
- **PetClinic sample:** A sample application that demonstrates catalogue behaviour.
- **ViaCEP API example:** A sample API that retrieves Brazilian postal codes.

### Play with the Tutorials

TODO
