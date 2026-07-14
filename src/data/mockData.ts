import { Project, Testimonial } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "happy-bounty-web3-reward-platform",
    title: "Happy Bounty - Web3 Reward Distribution Platform",
    description:
      "A secure Web3 bounty management platform that enables organizations, DAOs, hackathon hosts, and communities to create, manage, and distribute ETH and USDC rewards on-chain through a scalable individual-claim architecture.",

    fullDescription:
      "Happy Bounty is a decentralized bounty management platform designed to streamline the creation and distribution of rewards within Web3 ecosystems. The platform allows bounty creators to fund rewards using ETH or USDC and distribute them through single-winner, equal-split, or percentage-based payout models. To improve scalability and transaction reliability, the platform implements an individual claim architecture that enables winners to claim rewards independently rather than relying on bulk payout transactions. The smart contract system incorporates robust security measures including reentrancy protection, double-claim prevention, strict validation checks, secure token transfer patterns, and ownership-based administrative controls. The full-stack application combines a React frontend, blockchain interaction layer, backend services, and database management to provide a seamless experience for bounty creation, winner assignment, and reward claiming. The architecture was built with future extensibility in mind, including planned support for Merkle-tree based distributions, DAO governance, and additional ERC-20 token support.",

    category: "Web3",

    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "RainbowKit",
      "Ethers.js",
      "Solidity",
      "OpenZeppelin Contracts",
      "Foundry",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vite",
      "Vercel",
    ],

    problem:
      "Traditional bounty and reward distribution systems suffer from limited transparency, manual payout processes, failed bulk transactions, double-payment risks, and poor scalability when managing multiple winners. Organizations, DAOs, and community platforms require a secure, transparent, and automated mechanism for distributing rewards while maintaining trust and minimizing operational overhead.",

    solution:
      "Built a decentralized bounty payout platform that automates reward distribution through smart contracts, supports multiple payout structures, enables individual reward claims for improved scalability, and provides transparent on-chain verification of reward allocation and distribution.",

    architecture:
      "The platform follows a layered architecture consisting of a React frontend for bounty management and reward claiming, RainbowKit and Ethers.js for wallet connectivity and blockchain interactions, Solidity smart contracts for bounty creation, winner assignment, fee management, and reward claiming, and a Node.js/Express backend with MongoDB for managing off-chain metadata, indexing, and application data. Smart contract events are emitted to support frontend synchronization and future indexing services.",

    challenges: [
      "Designing a unified payout system supporting both ETH and ERC-20 (USDC) rewards",
      "Implementing secure reward withdrawals while preventing reentrancy attacks",
      "Validating percentage-based distributions while enforcing a 100% allocation rule",
      "Preventing duplicate winners and double reward claims",
      "Building a scalable payout architecture that avoids gas-intensive bulk transfers",
      "Synchronizing smart contract events with frontend and backend services",
    ],

    results: [
      "Successfully implemented single-winner, equal-split, and percentage-based reward distribution models",
      "Developed an individual-claim architecture that improves payout reliability and scalability",
      "Integrated ETH and USDC reward support within a unified smart contract system",
      "Implemented reentrancy protection, ownership controls, and double-claim prevention mechanisms",
      "Built a frontend-ready event architecture for real-time reward tracking and user interaction",
      "Designed the system with a future migration path to Merkle-tree based large-scale distributions",
    ],

    metrics: [
      { label: "Bounties Created", value: "Pending Launch" },
      { label: "Rewards Distributed", value: "Pending Launch" },
      { label: "Active Users", value: "Pending Launch" },
    ],

    featured: true,

    liveUrl: "https://fresh-bounty.vercel.app",

    githubUrl: "https://github.com/Osfoce/Fresh-Bounty",
  },
  {
    id: "2",
    slug: "ecommerce-platform",
    title: "Enterprise E-commerce Platform",
    description:
      "Full-featured e-commerce solution with real-time inventory, payment processing, and analytics.",
    category: "Full Stack",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe"],
    problem:
      "Small businesses lacked affordable, scalable e-commerce solutions with advanced features.",
    solution:
      "Built a platform combining the best of Shopify's simplicity with custom enterprise features.",
    featured: true,
  },
  {
    id: "3",
    slug: "real-time-analytics",
    title: "Real-time Analytics Dashboard",
    description:
      "Interactive dashboard processing millions of events per second with live visualizations.",
    category: "Full Stack",
    techStack: ["React", "D3.js", "WebSockets", "Express", "MongoDB"],
    problem:
      "Marketing teams needed instant insights from user behavior data for quick decision making.",
    solution:
      "Built a streaming analytics platform with sub-second latency and interactive visualizations.",
    featured: true,
  },
  // {
  //   id: '4',
  //   slug: 'mobile-banking-app',
  //   title: 'Mobile Banking Application',
  //   description: 'Secure mobile banking app with biometric authentication and real-time transaction monitoring.',
  //   category: 'Mobile',
  //   techStack: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
  //   featured: false,
  // },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Smith",
    role: "CTO",
    company: "TechCorp",
    content:
      "An exceptional developer who delivered our project ahead of schedule. The code quality was outstanding and their technical insights saved us months of development time.",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "InnovateLabs",
    content:
      "Working with this developer was a game-changer for our product. They not only built a robust solution but also provided valuable architectural guidance that improved our entire system.",
  },
];
