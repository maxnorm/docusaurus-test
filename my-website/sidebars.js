/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Main documentation sidebar
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        description: 'Learn how to install and configure Compose for your smart contract projects.',
      },
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/your-first-diamond',
      ],
    },
  ],

  // API Reference sidebar - minimal for now
  apiSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Documentation Home',
    },
  ],
};

export default sidebars;
