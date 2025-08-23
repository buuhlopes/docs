// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require("prism-react-renderer/themes/github");
//const darkCodeTheme = require("prism-react-renderer/themes/dracula");
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "VeeCode Platform Documentation",
  staticDirectories: ["static"],
  tagline: "Access the comprehensive documentation for VeeCode Platform, covering the DevPortal and Admin-UI. Learn how to effectively use these powerful tools to build and deploy your applications with ease.",
  url: "https://docs.platform.vee.codes/",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "veecode-platform", // Usually your GitHub org/user name.
  projectName: "VeeCode Platform Services", // Usually your repo name.
  // MDX v3 mais tolerante
  // markdown: {
  //   format: "detect",
  // },
  // Internationalization
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        htmlLang: "en",
      },
    },
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({

        // https://docusaurus.io/docs/docs-multi-instance
        docs: {
          // id: 'product', // omitted => default instance
          path: "devportal",
          routeBasePath: "devportal",
          sidebarPath: require.resolve("./sidebars.js"),
          // ... other options
        },
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: 'platform', // omitted => default instance
        path: "platform",
        routeBasePath: "platform",
        sidebarPath: require.resolve("./sidebars.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: 'admin-ui', // omitted => default instance
        path: "admin-ui",
        routeBasePath: "admin-ui",
        sidebarPath: require.resolve("./sidebars.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: 'vkdr', // omitted => default instance
        path: "vkdr",
        routeBasePath: "vkdr",
        sidebarPath: require.resolve("./sidebars.js"),
        // ... other options
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Platform",
        logo: {
          alt: "VeeCode Logo",
          src: "img/veecodelogo.png",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "safira-cli",
          // },
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "vkpr",
          // },
          // { to: '/platform/intro', label: 'Platform', position: 'left' },
          { to: '/devportal/intro', label: 'Devportal', position: 'left' },
          { to: '/admin-ui/intro', label: 'Admin-UI', position: 'left' },
          { to: '/vkdr/intro', label: 'VKDR-CLI', position: 'left' },
          // { to: '/safira-cli/intro', label: 'Safira-CLI', position: 'left' },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          // },
          {
            href: "https://github.com/veecode-platform/support",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Website",
            items: [
              {
                label: "Veecode Platform",
                to: "https://platform.vee.codes/",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/showcase/veecode-platform/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/veecodeplatform",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Join our Comunity",
                href: "https://github.com/orgs/veecode-platform/discussions",
              },
              {
                label: "Contact Us",
                href: "https://platform.vee.codes/contact-us",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} VeeCode Platform, Inc. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ["bash"],
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
