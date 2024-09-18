import { defineConfig } from 'vitepress'
import imageFigures from 'markdown-it-image-figures';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';
import markdownItVideo from 'markdown-it-video';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vouch LSD",
  description: "Liquid Staking Derivatives on Pulsechain",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/image/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/docs/introduction/getstarted' },
      //{ text: 'Website', link: 'https://vouch.run' },
      { text: 'Launch User App', link: 'https://app.vouch.run' },
    ],
     sidebar: {
      "/docs/": docs(),
    },
    search: {
      provider: 'local'
    },

    outline: {
      level: [1,4],
      // label: 'Contents',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vouchrun/' }
    ],
  },
  markdown: {
    math: true,
    config: (md) => {
      md.use(imageFigures, {
        figcaption: 'title',
        copyAttrs: '^class$',
      }),
      md.use(tabsMarkdownPlugin),
      md.use(markdownItVideo, {
        youtube: {
          width: 560,
          height: 315,
          parameters: {
            rel: 0,
            start: 0, // start the video at 18 seconds
          }
        }
      });
    },
  },
  ignoreDeadLinks: [
    // ignore all localhost links
    /^https?:\/\/localhost/,
  ],
})


function docs(){
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        {text: "Intro to LSDs", link: "/docs/introduction/intro_to_LSD"},
        {text: "Vouch Overview", link: "/docs/introduction/vouch_overview"},
        {text: "vPLS (LST) Token", link: "/docs/introduction/vPLS_Token"},
    ]
    },
    // {
    //   text: "User Guide", //https://github.com/stafiprotocol/docs/tree/main/pages/stakingeth
    //   collapsed: false,
    //   items: [
    //     {text: "Pulsechain Staking", link: "/docs/userguide/plsstaking"},
    //     {text: "How Vouch Staked PLS works", link: "/docs/userguide/frontend"},
    //     {text: "The vPLS token", link: "/docs/userguide/frontend"},
    //     {text: "How to stake PLS", link: "/docs/userguide/frontend"},
    //     {text: "How to unstake PLS", link: "/docs/userguide/frontend"},
    //     {text: "Liquidity Mining", link: "/docs/userguide/frontend"},
    //   ]
    // },

        {
          text: "Validator Guide", // https://docs.stafi.io/ethvalidator/
          collapsed: false,
          items: [
            {text: "Getting Started", link: "/docs/validator_guide/getting_started"},
            {text: "Validator Staking Guide", link: "/docs/validator_guide/validator_staking_guide"},
            {text: "pulse-staking-deposit-cli", link: "/docs/validator_guide/pulse-staking-deposit-cli"},
            {text: "Ejector Client", link: "/docs/validator_guide/ejector_client"},
            {text: "Exiting a Validator", link: "/docs/validator_guide/exiting_validators"},
            // {
            //   text: "Validator Staking",
            //   collapsed: false,
            //   items: [
            //     {text: "Validator Staking Steps", link: "/docs/validator_guide/validator_staking_guide"},
            //     {text: "pulse-staking-deposit-cli", link: "/docs/validator_guide/pulse-staking-deposit-cli"},
            //     {text: "Ejector Client", link: "/docs/validator_guide/ejector_client"},
            //     {text: "Exiting a Validator", link: "/docs/validator_guide/exiting_validators"}
            //   ]
            // }
          ]
        },

      {
        text: "Architecture",
        collapsed: false,
        items: [
          {text: "Vouch LSD Protool", link: "/docs/architecture/vouch_lsd"},
          // {
          // text: "Components",
          //   collapsed: true,
          //   items: [
          //       {text: "Get Started", link: "/docs/architecture/components/getstarted"},
          //       {text: "Contract", link: "/docs/architecture/components/contract"},
          //       {text: "Relay", link: "/docs/architecture/components/relay"},
          //       {text: "Validator", link: "/docs/architecture/components/validator"},
          //       {text: "Ejector", link: "/docs/architecture/components/ejector"},
          //       {text: "App", link: "/docs/architecture/components/ethlsdapp"},
          //       {text: "Validator App", link: "/docs/architecture/components/ethlsd_validator_app"},
          //       {text: "Deploy", link: "/docs/architecture/components/deploy"},
          //       {text: "Point System", link: "/docs/architecture/components/point_system"},
          //     ]
          //   }
          ]
        },
    // {
    //   text: "DAO",
    //   collapsed: true,
    //   items: [
    //     {text: "Introduction", link: "/docs/dao/introduction"},
    //   ]
    // },
    // {
    //   text: "Security",
    //   collapsed: true,
    //   items: [
    //     {text: "Introduction", link: "/docs/security/introduction"},
    //     {text: "Audit", link: "/docs/security/audit"},

    //   ]
    // },
    // {
    //   text: "Concepts",
    //   collapsed: true,
    //   items: [
    //     {text: "Ethereum Staking", link: "/docs/concepts/ethstaking"},
    //     {text: "LSD & LST", link: "/docs/concepts/lstlsd"},
    //   ]
    // },
  ]
}





