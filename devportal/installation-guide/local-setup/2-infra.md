---
sidebar_position: 3
sidebar_label: Infrastructure Configuration
title: Configuring the Infrastructure
---

In this step, you will start the local cluster that will run DevPortal and its dependencies, emulating a real cloud scenario.

## Start a local cluster

1. Open the terminal.
2. Run the following command to set up the infrastructure:
   
```sh
vkdr infra up
```

This command starts a lightweight Kubernetes cluster using k3d, a tool that simplifies the process of creating and managing "fake" Kubernetes clusters in Docker. The cluster will be used to run DevPortal and its dependencies.

Please understand what things are available now:

- A local Kubernetes cluster running under Docker.
- Ports 8000 and 8001 are bound to HTTP and HTTPS of the first LoadBalancer deployed in this cluster (don't worry, DevPortal will take care of this).
- A couple of "registry mirrors" will also be started to speed up the download of Docker images even if you recycle the entire cluster (starting form port 6001).

## Create host entries

To access the DevPortal and other deployed services you will need to an entry to your `/etc/hosts` file:

```
127.0.0.1 devportal.localhost manager.localhost
```

If everything is set up correctly, proceed to the next step.
