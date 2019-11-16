/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: 'http://ai-speaker.com/images/logo_ais.png',
    infoLink: 'https://www.ai-speaker.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Asystent domowy, dokumentacja' /* title for your website */,
  tagline: 'Wszystko co potrzebujesz aby korzystać z Asystenta domowego',
  editUrl: 'https://github.com/sviete/AIS-docs/edit/master/docs/',
  url: 'https://sviete.github.io' /* your website url */,
  baseUrl: '/AIS-docs/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  gaTrackingId: 'UA-126115790-1',

  // Used for publishing and more
  projectName: 'AIS-docs',
  organizationName: 'sviete',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'ais_bramka_index', label: 'Bramka IoT'},
    {doc: 'ais_app_index', label: 'Aplikacja'},
    {doc: 'ais_remote_index', label: 'Pilot'},
    {doc: 'ais_app_radio', label: 'Integracje'},
    {doc: 'ais_iot_works_with', label: 'Urządzenia'},
    {href: '/AIS-docs/docs/en/ais_faq_index', label: 'FAQ'},
    { blog: true, label: 'Aktualności'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo-white.svg',
  footerIcon: 'img/logo-white.svg',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#ff9900',
    secondaryColor: '#ffa800',
  },

  // algolia: {
  //   apiKey: 'my-api-key',
  //   indexName: 'my-index-name',
  //   algoliaOptions: {},
  //   placeholder: 'Wyszukiwanie'
    
  // },
  docsSideNavCollapsible: true,

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' AI-Speaker',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  // scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/default-social.png',
  twitterImage: 'img/default-social.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/sviete',
  repoFrontendUrl: 'https://github.com/sviete/home-assistant-polymer',
  repoFrontendWebsite: 'https://github.com/home-assistant/home-assistant.github.io',
  repoDevWebsite: 'https://github.com/home-assistant/developers.home-assistant',
  blogSidebarCount: 25,
};

module.exports = siteConfig;
