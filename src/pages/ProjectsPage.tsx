import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { projects } from '../data/mockData'

const categories = ['All', 'Web3', 'Frontend', 'Backend', 'Full Stack', 'Mobile']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          A collection of my work and case studies
        </p>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-mono bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center text-primary-600 font-medium">
                  Read case study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
