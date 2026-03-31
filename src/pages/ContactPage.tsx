import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { ContactFormData } from '../types'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  projectType: z.string().min(1, 'Please select project type'),
  budgetRange: z.string().min(1, 'Please select budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const projectTypes = [
  'Web Application',
  'Mobile App',
  'Blockchain / Web3',
  'E-commerce',
  'Portfolio / Personal Site',
  'Other',
]

const budgetRanges = [
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000+',
  'Not sure yet',
]

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('[WEBHOOK_URL]', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (response.ok) {
        alert('Message sent successfully! I will get back to you soon.')
        reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again or email me directly at [EMAIL]')
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <input
                {...register('name')}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-800"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-800"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Project Type *</label>
            <select
              {...register('projectType')}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-800"
            >
              <option value="">Select a project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.projectType && (
              <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Budget Range *</label>
            <select
              {...register('budgetRange')}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-800"
            >
              <option value="">Select a budget range</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
            {errors.budgetRange && (
              <p className="text-red-500 text-sm mt-1">{errors.budgetRange.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message *</label>
            <textarea
              {...register('message')}
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-800"
              placeholder="Tell me about your project, timeline, and any specific requirements..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Sending...' : (
              <>
                Send Message <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-4">Or reach me directly:</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Email: <a href="mailto:[EMAIL]" className="text-primary-600 hover:underline">[EMAIL]</a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
