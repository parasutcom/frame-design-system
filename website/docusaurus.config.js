import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Frame Design System Documentation',
  tagline: 'Guides and docs for Frame Design System',
  url: 'https://parasutcom.github.io/',
  baseUrl: '/frame-design-system/',
  favicon: 'img/favicon.ico',
  organizationName: 'parasutcom',
  projectName: 'frame-design-system',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  deploymentBranch: 'gh-pages',

  themes: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/parasutcom/frame-design-system/website/tree/master',
          routeBasePath: '/',
        },

        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      liveCodeBlock: {
        playgroundPosition: 'top',
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Frame Design System Logo',
          src: 'img/logo.svg',
          width: 242,
          height: 21,
          href: '/',
        },
        items: [
          {
            to: '/get-started/introduction',
            label: 'Get Started',
            position: 'left',
            activeBasePath: 'get-started',
          },
          {
            to: '/foundations/color',
            label: 'Foundations',
            position: 'left',
            activeBasePath: 'foundations',
          },
          {
            to: '/components/aggregate',
            label: 'Components',
            position: 'left',
            activeBasePath: 'components',
          },
          {
            href: 'https://github.com/parasutcom/frame-design-system',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          src: '/img/mikrogrup-logo-negative.svg',
          alt: 'Mikrogrup Logo',
          href: 'https://www.mikrogrup.com/',
        },
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Mikrogrup, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
