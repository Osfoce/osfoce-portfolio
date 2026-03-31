export interface Project {
  id: string
  slug: string
  title: string
  description: string
  fullDescription?: string
  category: 'Web3' | 'Frontend' | 'Backend' | 'Full Stack' | 'Mobile'
  techStack: string[]
  image?: string
  problem?: string
  solution?: string
  architecture?: string
  challenges?: string[]
  results?: string[]
  metrics?: {
    label: string
    value: string
  }[]
  featured?: boolean
  liveUrl?: string
  githubUrl?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

export interface BookingData {
  projectType: string
  budgetRange: string
  name: string
  email: string
  message?: string
}

export interface ContactFormData {
  name: string
  email: string
  projectType: string
  budgetRange: string
  message: string
}