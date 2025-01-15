export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  Blockchain: 'blockchain',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Blockchain',
    value: PROJECT_CATEGORY.Blockchain,
    icon: 'fluent-mdl2:open-source',
  },
];

export const PROJECTS = [
  {
    imgSrc: './assets/Image/RipplesBuyBot.png',
    title: 'RIPPLES Token Buy Bot on XRP',
    description:
      'A seamless buy bot built for the XRP Ledger, enabling users to securely purchase RIPPLES tokens. It offers an intuitive interface and leverages the XRP Ledger’s speed and reliability to facilitate fast and secure transactions.',
    repoLink: 'https://github.com/nico99815/XRP-BuyBot/',
    sourceLink: 'https://t.me/RIPPLESXRPBuyBot',
    category: [PROJECT_CATEGORY.Blockchain, PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: './assets/Image/PearTapBot.png',
    title: 'Pear Tap to Earn Bot',
    description:
      'A tap-to-earn bot built on the TON blockchain, supporting verified jetton trades. Users can seamlessly exchange any verified jetton with another or trade with TON/USDT, leveraging the security and verification features of TON',
    repoLink: 'https://github.com/nico99815/Pear_Tap_Bot',
    sourceLink: 'https://t.me/pear_tap_bot',
    category: [PROJECT_CATEGORY.Blockchain, PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: './assets/Image/ResgirlBot.png',
    title: 'Resistance Girl OTC Trading Bot',
    description:
      'Any verified jetton on TON blockchain (those having blue verification tick) can be traded for any verified jetton or TON/USDT!',
    repoLink: 'https://github.com/nico99815/Resgirl_bot',
    sourceLink: 'https://t.me/resgirl_bot',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/AStyleTapGame.png',
    title: 'A Style Tap To Earn Game (Telegram Mini App)',
    description:
      'A fun tap-to-earn game developed for A Style brand, featuring intuitive mechanics, full-stack integration, and seamless gameplay. Check out the repo and bot!',
    repoLink: 'https://github.com/nico99815/AStyleTapGame',
    sourceLink: 'https://t.me/astyletapbot',
    category: [PROJECT_CATEGORY.Blockchain, PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: './assets/Image/Uniton.png',
    title: 'Simple Staking on TON (Uniton APP)',
    description:
      'Simple Staking is a feature that allows Uniton users to engage in single-sided staking of $UTN token within the TON Network. Simple Staking presents an opportunity to generate returns by staking just one kind of asset.',
    repoLink: 'https://github.com/nico99815/Uniton_App',
    sourceLink: 'https://app.unitontoken.com',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/LandX.png',
    title: 'LandX Perpetual Commodity Vaults Protocol',
    description:
      'Commodity vaults provide investors an inflation hedged return backed by a legal contract secured on underlying farmland. LandX makes commodity vaults available as a liquid digital asset.',
    repoLink: '',
    sourceLink: 'https://landx.fi/',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/coincodex.jpg',
    title: 'CoinCodex - Live Crypto Prices',
    description:
      'The CoinCodex app makes it easy to follow Bitcoin, Ethereum, over 10,000 other coins. Join thousands of cryptocurrency user and stay updated with the CoinCodex crypto price tracker and portfolio app.',
    repoLink: '',
    sourceLink: 'https://play.google.com/store/apps/details?id=com.coincodex.coincodexapp&hl=en_IN&gl=US',
    category: [PROJECT_CATEGORY.Blockchain, PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://images2.imgbox.com/79/5f/S3hu6kJs_o.jpg',
    title: 'Flipkart Clone - E-Commerce Project',
    description:
      'Flipkart Clone is done with top-notch features for the entrepreneur startups like Flipkart. It is build with React Js, Node Js.',
    repoLink: 'https://github.com/nico99815/flipkart-clone',
    sourceLink: 'https://flipkart-web.vercel.app/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: './assets/Image/portfolio.png',
    title: 'My Portfolio',
    description:
      'Simple and classic modern portfolio for who wants to present himself as a software developer. Portfolio build with highly customizable using Tailwind CSS, Next Js.',
    repoLink: 'https://github.com/nico99815/DevPortfolio',
    sourceLink: 'https://thomasken.pro/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://images2.imgbox.com/dd/a3/Fcx8cjEr_o.jpg',
    title: 'Kitchen Store - E-Commerce',
    description:
      'The e-commerce to buy kitchen related items. College final year project base on Servlets and JSP (Java)',
    repoLink: 'https://github.com/nico99815/E-commerce-Java',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: './assets/Image/OkseWallet.jpg',
    title: 'Okse Wallet & Card',
    description:
      'The Okse Wallet is our way of making the user experience even more streamlined through easier access to different Networks and helping you spend Crypto with Virtual and Physical Debit Cards.',
    repoLink: 'https://github.com/nico99815/privateRepos',
    sourceLink: 'https://play.google.com/store/apps/details?id=wallet.okse.io&hl=en_US&gl=US',
    category: [PROJECT_CATEGORY.Blockchain, PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: './assets/Image/adrestus-explorer.png',
    title: 'Adrestus Block Explorer',
    description:
      'Block and Transaction Explorer on Adrestus network using React, Tailwind CSS, Restful APIs, SpringBoot, WebSocket',
    repoLink: 'https://github.com/nico99815/Adrestus-Transaction-Explorer',
    sourceLink: 'https://adrestus-explorer.vercel.app/',
    category: [PROJECT_CATEGORY.Blockchain],
  },

  {
    imgSrc: './assets/Image/adrestus.png',
    title: 'Adrestus Website',
    description: 'Adrestus Website using Three.js, Canva, React.js, Tailwind CSS, Email.js, HCaptcha',
    repoLink: 'Private Repo',
    sourceLink: 'https://www.adrestus.net/',
    category: [PROJECT_CATEGORY.Blockchain, PROJECT_CATEGORY.FULL_STACK],
  },

  {
    imgSrc: 'https://images2.imgbox.com/9d/d0/zdDVFtFN_o.png',
    title: 'Netflix Clone - TMDB API Project',
    description: 'Netflix clone using react Js. Proving movies details using TMDB API.',
    repoLink: 'https://github.com/nico99815/Adrestus-Transaction-Explorer',
    sourceLink: 'https://netflix-clone-by-dhaval.web.app/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: './assets/Image/mc2fi.png',
    title: 'MC² Finance',
    description:
      'A Crosschain non-custodial DeFi Platform to simply follow the best token, traders & Institutions, to learn from their content and earn by following their strategies using Vue, Rust, PostgreSQL, WebSocket',
    sourceLink: 'https://app.mc2.fi',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/dodoex.png',
    title: 'DODO X',
    description: 'Dex and Launchpad, Crosschain Aggregator using Next.js, Solidity, Web3.js, Rainbow kit, Wagmi',
    sourceLink: 'https://dodoex.io/en',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/sidusheroes.jpg',
    title: 'SIDUS Heroes',
    description:
      'SIDUS HEROES is a GameFi web3 Publisher (2023 golden excellence award winner in UAE) building a unique metaverse ecosystem with multiple games of various genres that share a single recognizable lore and in game token “Sidus” and DAO governance token "Senate"',
    sourceLink: 'https://sidusheroes.com/project/',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/starkmeta.png',
    title: 'Starkmeta AI Image Platform',
    description:
      'Starkmeta AI Image Generation Platform combined NFT marketplace using React, Typescript, Node.js, MongoDB, Azure, StableDiffusion API',
    sourceLink: 'https://starkmeta.ai',
    category: [PROJECT_CATEGORY.Blockchain, PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: './assets/Image/StarkMarketplace.png',
    title: 'StarkMeta NFT Marketplace',
    description: 'StarkMeta NFT marketplace using React, Typescript, Solidity, ERC721',
    repoLink: 'https://github.com/nico99815/NFTMarketplace-SC',
    sourceLink: 'https://stark-marketplace.vercel.app/',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/larix.png',
    title: 'The Lending gateway of Solana',
    description:
      'Larix is the ultimate lending gateway on Solana, adopted a dynamic interest rate model and created more capital-efficient risk management pools',
    repoLink: 'https://github.com/nico99815/NFTMarketplace-SC',
    sourceLink: 'https://projectlarix.com/',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/steak.png',
    title: 'STEAK Protocol',
    description:
      'We present the STEAK protocol, a proof of stake (PoS) protocol designed to serve as a sustainable and efficient source of randomness for dApps on the Cardano blockchain',
    sourceLink: 'https://steakprotocol.com/',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/Tulip.png',
    title: 'Solana Yield Aggregation Homestead',
    description:
      'Tulip Protocol currently offers three types of yield products, “Vaults”, “Lending” & “Leveraged Farming”.',
    repoLink: 'https://github.com/nico99815/NFTMarketplace-SC',
    sourceLink: 'https://tulip.garden/leverage',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/solana-nft.png',
    title: 'Solana pioneering NFT Marketplace that gives back 100% of its fees to the community',
    description:
      'HolyGrails is Solana’s first revenue-back-sharing / trade-to-Earn NFT marketplace - distributing 100% of $SOL revenue to Traders and $HOLY tokens to stakers and offers a easy to use NFT Creator tool for everyone to launch NFT Collections easy on SOLANA Blockchain.',
    repoLink: '',
    sourceLink: 'https://holygrails.io/',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/symblox.png',
    title: 'Collateral Staking on BSC',
    description:
      'Symblox provides liquidity for permissionless derivatives like perpetual futures, options, parimutuel markets on BSC. Powering the next generation of permissionless protocols.',
    repoLink: '',
    sourceLink: 'https://symblox.ai/',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/pdoge_presale.png',
    title: 'Physical Doge Presale on BSC',
    description:
      'Users can buy $PDOGE Token with USDT or BNB on Physical Doge Presale on BSC. Presale, Staking & Token contract in Solidity, Front-End with React, Vite, Typescript, Tailwind CSS, Rainbow kit for Wallet Connect, Wagmi.',
    repoLink: '',
    sourceLink: 'https://presale-bsc-app.vercel.app/',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/soramala_presale.png',
    title: 'Soramala Presale on Solana',
    description:
      'Users can buy Soramala Token with USDT or ETH, BNB, Card on Soramala Presale on Solana. Presale, Staking & Token contract in Rust, Front-End with React, Vite, Typescript, Tailwind CSS, MetaMask, Phantom for Wallet Connec.',
    repoLink: '',
    sourceLink: 'https://www.soramala.io/en',
    category: [PROJECT_CATEGORY.Blockchain],
  },
];
