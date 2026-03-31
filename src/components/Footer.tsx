import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Oselu Fortunatus</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Building innovative solutions that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/osfoce" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/oselufortunatus/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:oselufortunatis@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">About</Link></li>
              <li><Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">oselufortunatis@gmail.com</li>
              <li>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  Book a Call
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Oselu Fortunatus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
