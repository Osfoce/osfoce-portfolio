import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { projects } from '../data/mockData'

export default function CaseStudyPage() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link
          to="/projects"
          className="inline-flex items-center text-primary-600 mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Projects
        </Link>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="prose dark:prose-invert max-w-none">
          {project.problem && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">The Problem</h2>
              <p className="text-gray-600 dark:text-gray-400">{project.problem}</p>
            </section>
          )}

          {project.solution && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-gray-600 dark:text-gray-400">{project.solution}</p>
            </section>
          )}

          {project.architecture && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Architecture</h2>
              <p className="text-gray-600 dark:text-gray-400">{project.architecture}</p>
            </section>
          )}

          {project.challenges && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </section>
          )}

          {project.results && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </section>
          )}

          {project.metrics && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Key Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-600">{metric.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="flex gap-4 pt-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary-600 transition-colors"
              >
                <FaGithub className="w-4 h-4 mr-2" />
                View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
