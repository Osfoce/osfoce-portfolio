import { useBooking } from '../../context/BookingContext'

const projectTypes = [
  'Web Application',
  'Mobile App',
  'Blockchain / Web3',
  'E-commerce',
  'Portfolio / Personal Site',
  'Other',
]

export default function BookingStep1() {
  const { updateBookingData, setCurrentStep, bookingData } = useBooking()

  const handleSelect = (type: string) => {
    updateBookingData({ projectType: type })
    setCurrentStep(1)
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        What type of project do you need help with?
      </p>
      <div className="grid grid-cols-1 gap-3">
        {projectTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleSelect(type)}
            className={`p-3 text-left rounded-lg border transition-all ${
              bookingData.projectType === type
                ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                : 'border-gray-200 dark:border-gray-700 hover:border-primary-600'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  )
}
