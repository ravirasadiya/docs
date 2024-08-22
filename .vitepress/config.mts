import { defineConfig } from 'vitepress'
import imageFigures from 'markdown-it-image-figures';

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
      { icon: 'github', link: 'https://github.com/vouchrun/docs' }
    ],
  },
  markdown: {
    config: (md) => {
      md.use(imageFigures, {
        figcaption: 'title',
        copyAttrs: '^class$',
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
        {text: "Get Started", link: "/docs/introduction/getstarted"},
        {text: "New to LSD Stack", link: "/docs/introduction/newtostack"},
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
          text: "Validator Staking Guide", // https://docs.stafi.io/ethvalidator/
          collapsed: false,
          items: [
            {text: "Introduction", link: "/docs/validator_guide/introduction"},
            {
              text: "Validator Setup Guide",
              collapsed: false,
              items: [
                {text: "Prerequisites ", link: "/docs/validator_guide/prereqs"},
                {text: "Generate Deposit/Staking File", link: "/docs/validator_guide/generate-deposit-staking-file"},
                {text: "Deposit PLS", link: "/docs/validator_guide/deposit_pls"},
                {text: "Complete PLS Staking", link: "/docs/validator_guide/complete_pls_staking"},
                {text: "Run Ejector Client", link: "/docs/validator_guide/run_ejector_client"},
                {text: "Exiting a Validator", link: "/docs/validator_guide/exiting_validator"}
              ]
            }
          ]
        },

      // {
      //   text: "Architecture",
      //   collapsed: false,
      //   items: [
      //     {text: "Vouch LSD Protool", link: "/docs/architecture/vouch_lsd"},
      //     {
      //     text: "Components",
      //       collapsed: true,
      //       items: [
      //           {text: "Get Started", link: "/docs/architecture/components/getstarted"},
      //           {text: "Contract", link: "/docs/architecture/components/contract"},
      //           {text: "Relay", link: "/docs/architecture/components/relay"},
      //           {text: "Validator", link: "/docs/architecture/components/validator"},
      //           {text: "Ejector", link: "/docs/architecture/components/ejector"},
      //           {text: "App", link: "/docs/architecture/components/ethlsdapp"},
      //           {text: "Validator App", link: "/docs/architecture/components/ethlsd_validator_app"},
      //           {text: "Deploy", link: "/docs/architecture/components/deploy"},
      //           {text: "Point System", link: "/docs/architecture/components/point_system"},
      //         ]
      //       }
      //     ]
      //   },
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





