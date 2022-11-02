// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "VideoGata",
  tagline: "Plugin based video",
  url: "https://infogata.github.io",
  baseUrl: "/videogata-plugin-typings/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "InfoGata", // Usually your GitHub org/user name.
  projectName: "videogata-plugin-typings", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/InfoGata/videogata-plugin-typings/tree/master/docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "VideoGata",
        logo: {
          alt: "VideoGata Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://github.com/InfoGata/videogata-plugin-typings",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "VideoGata",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/info_gata",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/InfoGata/videogata-plugin-typings",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} InfoGata LLC. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        docsRouteBasePath: "/",
        indexDocs: true,
        indexBlog: false,
      },
    ],
  ],
};

module.exports = {
  ...config,
  plugins: [
    [
      "docusaurus-plugin-typedoc",

      // Plugin / TypeDoc options
      {
        entryPoints: ["../index.d.ts"],
        tsconfig: "../tsconfig.json",
        disableSources: true,
        readme: "none",
        out: "plugins/api",
        sidebar: {
          categoryLabel: "Plugin API",
          position: 3,
        },
      },
    ],
  ],
};
