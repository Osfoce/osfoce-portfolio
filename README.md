# Professional Portfolio - [YOUR_NAME]

A modern, high-performance developer portfolio built with React, TypeScript, and Vite. Features detailed case studies, project showcases, and an integrated booking system.

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Forms:** React Hook Form + Zod
- **Deployment:** Vercel
- **CI/CD:** GitHub Actions

## Features

- 🚀 **Performance Optimized** - Lighthouse score ≥ 90
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Smooth Animations** - Intentional, professional motion
- 📊 **Analytics Ready** - Track user interactions
- 📝 **Case Studies** - Detailed project breakdowns
- 📅 **Booking System** - Multi-step consultation booking
- 🔍 **SEO Friendly** - Optimized meta tags and structure

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone [YOUR_REPO_URL]

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

### Environment Variables

Create a `.env` file in the root directory:

\`\`\`env
VITE_WEBHOOK_URL=[YOUR_WEBHOOK_URL]
VITE_ANALYTICS_ID=[YOUR_ANALYTICS_ID]
\`\`\`

### Building for Production

\`\`\`bash
npm run build
npm run preview
\`\`\`

## Deployment

This project is configured for automatic deployment to Vercel:

1. Push to `main` branch triggers production deployment
2. Pull requests create preview deployments
3. GitHub Actions handles CI/CD pipeline

## Project Structure

\`\`\`
src/
├── components/     # Reusable UI components
├── pages/         # Route pages
├── context/       # React Context providers
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── data/          # Mock data and constants
├── utils/         # Utility functions
└── assets/        # Static assets
\`\`\`

## Performance Metrics

- First Contentful Paint: < 0.8s
- Time to Interactive: < 1.2s
- Lighthouse Performance: 95+
- Bundle Size: Optimized with code splitting

## License

MIT

## Contact

[YOUR_NAME] - [EMAIL]

Project Link: [GITHUB_LINK]