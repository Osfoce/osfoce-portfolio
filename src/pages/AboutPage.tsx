import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div>
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              I am a Smart Contract and Blockchain Developer dedicated to building secure, production-ready decentralized systems.

              I design and implement smart contracts, connect them to modern frontends, and create seamless blockchain-powered user experiences.

              My focus is on DeFi systems and real-world applications, with an emphasis on clean architecture, security, and efficiency.

              I am continuously refining my craft to build scalable solutions that deliver real value.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                {/* <li>Vue.js</li> */}
                <li>Web3.js / Ethers</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Backend</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Node.js / Express</li>
                {/* <li>Python / Django</li> */}
                {/* <li>PostgreSQL</li> */}
                <li>MongoDB</li>
                {/* <li>GraphQL</li> */}
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Tools & DevOps</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Docker / Kubernetes</li>
                <li>AWS / GCP</li>
                <li>GitHub Actions</li>
                <li>Vercel / Netlify</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary-600 pl-4">
              <h3 className="text-xl font-semibold">Senior Developer - [Company Name]</h3>
              <p className="text-gray-500 mb-2">2022 - Present</p>
              <p className="text-gray-600 dark:text-gray-400">
                Leading development of scalable web applications, mentoring junior developers, and architecting cloud solutions.
              </p>
            </div>
            <div className="border-l-4 border-primary-600 pl-4">
              <h3 className="text-xl font-semibold">Full Stack Developer - [Company Name]</h3>
              <p className="text-gray-500 mb-2">2020 - 2022</p>
              <p className="text-gray-600 dark:text-gray-400">
                Built and maintained multiple client projects using React, Node.js, and various cloud technologies.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
