---
sidebar_position: 0
sidebar_label: Home
title: Home
---

import style from './style.module.css';

# Welcome to the official documentation of the **VeeCode DevPortal**.

Here you’ll find everything you need to **understand, install, and use** the platform in a simple and practical way.

:::tip
This documentation is being updated to our latest release supporting dynamic plugins. Keep in touch and, by all means, file PRs to help us improve it.
:::

![Optional Image Description](/img/home/home1.png)

## What is the DevPortal?

The **VeeCode DevPortal** is a platform designed to **centralize and organize your company’s development ecosystem**.

It provides teams with a **unified view of services, APIs, templates, and documentation**, promoting autonomy and standardization.

With the DevPortal you can:

- 📚 Catalog and explore services and APIs in one place
- ⚡ Create new projects from ready-to-use templates
- 🔒 Manage access and permissions (RBAC)
- 🔗 Integrate with tools like GitHub, GitLab, Kong, and CI/CD pipelines
- 🔍 Centralize documentation from all teams and repositories

## How to navigate this documentation

- **Why DevPortal** → Why adopt the DevPortal
- **Installation** → Step-by-step guide
- **About the product** → Features and architecture
- **How to use** → Practical, everyday examples
- **FAQ** → Frequently asked questions
- **Support** → Where to get help

<div className={style.wrapper}>

export const Card = ({children, title, link}) => (
   <div className={style.card}
      onClick={() => window.location = link }
      onKeyDown={(e) => e.key === 'Enter' && (window.location = link)}
      tabIndex={0}
      role="button"
      aria-label={`Navigate to ${title}`}>
      <div className={style.titlebar}>
         <h3 className={style.title}>{title}</h3>
      </div>
      <p className={style.desc}>
         {children}
      </p>
   </div>
);

<!-- <Card title="📄️ Self-Service Demo" link="self-service-demo/prerequisites">Explore the platform's features through a simple interactive demo.</Card> -->

<Card title="💻 Installation Guide" link="/devportal/installation-guide/simple-setup">Learn how to install the Developer Portal on your own infrastructure.</Card>

<Card title="💡 Concepts" link="/devportal/concepts/catalog">Understand the core concepts and terminology related to the Developer Portal.</Card>

<!-- <Card title="🌐 API Management" link="/devportal/api-management/apiManagement">Effectively manage your APIs and services using the Developer Portal.</Card> -->

<Card title="🧩 Plugins" link="/devportal/plugins/techdocs">Customize and extend the functionality of your Developer Portal.</Card>

<Card title="📍 Troubleshooting" link="/devportal/troubleshooting">Find solutions to common issues and learn how to report errors.</Card>

</div>

By the end of this guide, you should have a good understanding of how the Developer Portal works and how it can help you better manage your API and service ecosystem. Let's get started!
