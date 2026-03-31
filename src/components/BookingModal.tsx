import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useBooking } from '../context/BookingContext'
import BookingStep1 from './booking/BookingStep1'
import BookingStep2 from './booking/BookingStep2'
import BookingStep3 from './booking/BookingStep3'
import BookingStep4 from './booking/BookingStep4'

export default function BookingModal() {
  const { isOpen, closeModal, currentStep } = useBooking()

  const steps = [
    { component: BookingStep1, title: 'Select Project Type' },
    { component: BookingStep2, title: 'Select Budget Range' },
    { component: BookingStep3, title: 'Contact Details' },
    { component: BookingStep4, title: 'Confirmation' },
  ]

  const CurrentStepComponent = steps[currentStep]?.component

  if (!CurrentStepComponent) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-xl z-50"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Book a Call</h2>
                <button
                  onClick={closeModal}
                  className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex-1 h-1 rounded-full mx-1 ${
                        index <= currentStep
                          ? 'bg-primary-600'
                          : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
                </p>
              </div>
              
              <CurrentStepComponent />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
