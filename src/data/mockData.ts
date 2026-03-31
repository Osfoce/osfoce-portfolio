import { Project, Testimonial } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'decentralized-exchange',
    title: 'Decentralized Exchange Platform',
    description: 'A secure, high-performance DEX built on Ethereum with automated market maker functionality.',
    fullDescription: 'Built a complete decentralized exchange with smart contracts, liquidity pools, and real-time trading interface.',
    category: 'Web3',
    techStack: ['React', 'Solidity', 'Web3.js', 'Hardhat', 'Tailwind CSS'],
    problem: 'Existing DEX platforms had high gas fees and poor UX, making DeFi inaccessible to mainstream users.',
    solution: 'Created an intuitive interface with optimized smart contracts that reduce gas costs by 40% compared to competitors.',
    architecture: 'The platform uses a layered architecture: Smart Contracts (Solidity) for core logic, Web3.js for blockchain interaction, and React for the frontend with real-time price feeds via WebSockets.',
    challenges: [
      'Optimizing gas usage for smart contract functions',
      'Implementing real-time price updates without excessive polling',
      'Ensuring security against common DeFi exploits'
    ],
    results: [
      'Processed over $1M in trading volume in first month',
      'Reduced average transaction cost by 35%',
      'Acquired 5,000+ active users within 3 months'
    ],
    metrics: [
      { label: 'Trading Volume', value: '$1M+' },
      { label: 'Active Users', value: '5,000+' },
      { label: 'Gas Savings', value: '35%' }
    ],
    featured: true,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: '2',
    slug: 'ecommerce-platform',
    title: 'Enterprise E-commerce Platform',
    description: 'Full-featured e-commerce solution with real-time inventory, payment processing, and analytics.',
    category: 'Full Stack',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
    problem: 'Small businesses lacked affordable, scalable e-commerce solutions with advanced features.',
    solution: 'Built a platform combining the best of Shopify\'s simplicity with custom enterprise features.',
    featured: true,
  },
  {
    id: '3',
    slug: 'real-time-analytics',
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive dashboard processing millions of events per second with live visualizations.',
    category: 'Frontend',
    techStack: ['React', 'D3.js', 'WebSockets', 'Express', 'MongoDB'],
    problem: 'Marketing teams needed instant insights from user behavior data for quick decision making.',
    solution: 'Built a streaming analytics platform with sub-second latency and interactive visualizations.',
    featured: true,
  },
  {
    id: '4',
    slug: 'mobile-banking-app',
    title: 'Mobile Banking Application',
    description: 'Secure mobile banking app with biometric authentication and real-time transaction monitoring.',
    category: 'Mobile',
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
    featured: false,
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'CTO',
    company: 'TechCorp',
    content: 'An exceptional developer who delivered our project ahead of schedule. The code quality was outstanding and their technical insights saved us months of development time.'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'InnovateLabs',
    content: 'Working with this developer was a game-changer for our product. They not only built a robust solution but also provided valuable architectural guidance that improved our entire system.'
  }
]
