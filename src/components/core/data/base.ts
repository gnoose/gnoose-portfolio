export enum ExtensionType {
  MetaMask,
  Polkadot,
}

export const personalData = {
  name: 'Jie Li',
  roles: ['Front-End Engineer', 'Back-End Engineer', 'Blockchain Engineer'],
  frameworks: ['angular.svg', 'react.svg', 'vue.svg', 'nestjs.svg', 'python.svg', 'golang.svg'],
  introduction: `I'm a senior Blockchain and Full-Stack developer who likes to work with Blockchain(Bitcoin, Ethereum, Solana, Rust, Solidity, ERC20, ERC721, ERC1155), JavaScript/Typescript (React, Angular, Vue.js, TensorFlow.js, Node, Nest), Python among others. <br><br>Building state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion of mine and I am confident I would be an excellent addition to your organization. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements. This has allowed me to stay ahead of the curve and deliver exceptional work to all of my employers, including those I've worked for on a project basis.💜`,
  projects: [
    {
      title: 'BrainchildNFT',
      year: '2022',
      role: 'Blockchain Engineer',
      range: '06.2021 ~ 04.2022',
      stacks: ['React.Js', 'TailwindCSS', 'Web3.Js', 'Ether.Js', 'Solidity', 'GoLang', 'PostgresSQL', 'AWS', 'GitHub(CICD)'],
      thumbnail: 'assets/images/projects/brainchildnft.png',
      subTitle: 'NFT Collection on the Ethereum',
      content: 'Customers in the whitelist can raffle and they could redeem every 3 months.\n' +
        'Redeeming means delivering the object which the NFT image shows to the\n' +
        'customers.\n' +
        'I have contributed to the front-end with Web3 and also worked for some\n' +
        'features on smart contracts as well.',
      images: [
        'assets/images/projects/bc1.png',
        'assets/images/projects/bc2.png',
        'assets/images/projects/bc3.png',
        'assets/images/projects/bc4.png',
        'assets/images/projects/bc5.png',
        'assets/images/projects/bc6.png',
        'assets/images/projects/bc7.png',
        'assets/images/projects/bc8.png',
      ]
    },
    {
      title: 'DeltaFinance',
      year: '2021',
      role: 'Blockchain Engineer',
      range: '09.2020 ~ 06.2021',
      stacks: ['Solana', 'Rust(Anchor)', 'React.Js', 'Solana/Web3.Js', 'PostgreSQL', 'AWS', 'GitHub(CICD)'],
      thumbnail: 'assets/images/projects/deltafinance.png',
      subTitle: 'Defi on Solana network with Rust language',
      content: 'The world\'s most efficient decentralized exchange. The main goal of the project is to do a swap/pool/farm/bridge on the Solana network.',
      images: [
        'assets/images/projects/deltafinance.png',
        'assets/images/projects/df1.png',
      ]
    },
    {
      title: 'United Hardscapes',
      year: '2020',
      role: 'Software Engineer',
      range: '09.2019 ~ 09.2020',
      stacks: ['Angular 9,13', 'Bootstrap 4', 'Material UI', 'Next.Js', 'TailwindCSS', 'Jest', 'Nest.Js', 'PostgresSQL', 'AWS', 'GitHub'],
      thumbnail: 'assets/images/projects/unitedhardscapes.png',
      subTitle: 'Managed marketplace for the customers in the USA',
      content: 'Managed marketplace for the outdoors services industries. This is based on the J&D landscaping project but it’s working for the customers in the whole US. Fast speed and flexible responsibility are the breakthrough performance in this project.',
      images: [
        'assets/images/projects/unitedhardscapes.png',
        'assets/images/projects/uh1.png',
        'assets/images/projects/uh2.png'
      ]
    },
    {
      title: 'Venturespace',
      year: '2019',
      role: 'Python Engineer',
      range: '08.2017 ~ 08.2019',
      stacks: ['Django(Python)', 'ElasticSearch', 'Material UI', 'NestJS', 'PostgreSQL', 'AWS'],
      thumbnail: 'assets/images/projects/venturespace.png',
      subTitle: 'Gather historical lease, funding and employee data, and company information from several services via API, web scraping',
      content: 'Aim of the project is to gather historical lease, funding and employee data, and company information from several services via API, web scraping. Also, transform the gathered data to extract accurate meaningful data as the customers want. Design database and schemas, manipulate big data by well-structured DB and data warehouse - AWS redShift.',
      images: [
        'assets/images/projects/vs1.png',
        'assets/images/projects/vs2.png',
        'assets/images/projects/vs3.png',
        'assets/images/projects/vs4.png',
        'assets/images/projects/vs5.png',
      ]
    },
    {
      title: 'J&D Landscaping',
      year: '2017',
      role: 'Fullstack Engineer',
      range: '06.2016 ~ 06.2017',
      stacks: ['Angular 9', 'Bootstrap 4', 'Material UI', 'Jest', 'Nest.Js', 'PostgresSQL', 'AWS', 'GitHub'],
      thumbnail: 'assets/images/projects/jdland.png',
      subTitle: 'Hardscaping platform for homeowners and contractors',
      content: 'This is the marketplace for the hardscaping for the customers in the CT (USA) Also having a contractor\'s dashboard so that the contractors could work for our company.',
      images: [
        'assets/images/projects/jd1.png',
        'assets/images/projects/jd2.png',
        'assets/images/projects/jd3.png',
        'assets/images/projects/jd4.png',
        'assets/images/projects/jd5.png',
        'assets/images/projects/jd6.png',
      ]
    },
    {
      title: 'GuruShots',
      year: '2016',
      role: 'Frontend Engineer',
      range: '03.2014 ~ 04.2016',
      stacks: ['Angular 7', 'Bootstrap 4', 'Material UI', 'Karma', 'Nest.Js', 'TypeORM', 'PostgresSQL', 'AWS', 'GitHub'],
      thumbnail: 'assets/images/projects/gurushots.png',
      subTitle: 'Hardscaping platform for homeowners and contractors',
      content: 'The mission of the Gurushots is to help people show the world’s photos that are taken by talent. Talent members have a competition on Gurushots to get more votes from the customers. It is a marketing website for customers who love to see and get more talented photos. I worked on the competition features on the project and there built many functionalities such as Real-Time communication, Competition, Payment, and so on.',
      images: [
        'assets/images/projects/gs1.png',
        'assets/images/projects/gs2.png',
        'assets/images/projects/gs3.png',
        'assets/images/projects/gs4.png'
      ]
    },
  ],
  skills: [
    {
      name: 'Angular 7~13',
      icon: 'assets/images/frameworks/angular.svg',
      age: '9'
    },
    {
      name: 'React.Js',
      icon: 'assets/images/frameworks/react.svg',
      age: '11'
    },
    {
      name: 'Vue.Js',
      icon: 'assets/images/frameworks/vue.svg',
      age: '5'
    },
    {
      name: 'Express.Js',
      icon: 'assets/images/frameworks/express.png',
      age: '7'
    },
    {
      name: 'Nest.Js',
      icon: 'assets/images/frameworks/nestjs.svg',
      age: '7'
    },
    {
      name: 'TailwindCSS',
      icon: 'assets/images/frameworks/tailwindcss.png',
      age: '4'
    },
    {
      name: 'UnitTest',
      icon: 'assets/images/frameworks/unittest.svg',
      age: '7'
    },
    {
      name: 'Python',
      icon: 'assets/images/frameworks/python.svg',
      age: '4'
    },
    {
      name: 'Golang',
      icon: 'assets/images/frameworks/golang.svg',
      age: '4'
    },
    {
      name: 'GraphQL',
      icon: 'assets/images/frameworks/graphql.svg',
      age: '3'
    },
    {
      name: 'PostgresSQL',
      icon: 'assets/images/frameworks/postgressql.png',
      age: '9'
    },
    {
      name: 'MongoDB',
      icon: 'assets/images/frameworks/mongodb.svg',
      age: '9'
    },
    {
      name: 'Ethereum',
      icon: 'assets/images/frameworks/ethereum.svg',
      age: '3'
    },
    {
      name: 'Solana',
      icon: 'assets/images/frameworks/solana.svg',
      age: '2'
    },
    {
      name: 'Flow',
      icon: 'assets/images/frameworks/flow.svg',
      age: '2'
    },
    {
      name: 'Solidity',
      icon: 'assets/images/frameworks/solidity.png',
      age: '3'
    },
    {
      name: 'Rust',
      icon: 'assets/images/frameworks/rust.png',
      age: '3'
    },
    {
      name: 'Web3.Js',
      icon: 'assets/images/frameworks/web3.png',
      age: '3'
    },
    {
      name: 'GitHub',
      icon: 'assets/images/frameworks/github.gif',
      age: '14'
    },
    {
      name: 'AWS',
      icon: 'assets/images/frameworks/aws.svg',
      age: '8'
    },
  ],
  contactUs: [
    {
      icon: 'assets/images/contactUs/discord.svg',
      link: 'gnoose#7223'
    },
    {
      icon: 'assets/images/contactUs/telegram.svg',
      link: 'https://t.me/jieli38'
    },
    {
      icon: 'assets/images/contactUs/github.svg',
      link: 'https://github.com/gnoose'
    },
    {
      icon: 'assets/images/contactUs/mail.svg',
      link: 'mailto:jieli3838@gmail.com'
    },
    {
      icon: 'assets/images/contactUs/skype.svg',
      link: 'live:.cid.9aedca9d3e67e880'
    }
  ]
};
