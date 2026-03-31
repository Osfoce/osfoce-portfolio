import { useBooking } from '../../context/BookingContext'

const budgetRanges = [
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000+',
  'Not sure yet',
]

export default function BookingStep2() {
  const { updateBookingData, setCurrentStep, bookingData } = useBooking()

  const handleSelect = (range: string) => {
    updateBookingData({ budgetRange: range })
    setCurrentStep(2)
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        What's your estimated budget?
      </p>
      <div className="grid grid-cols-1 gap-3">
        {budgetRanges.map((range) => (
          <button
            key={range}
            onClick={() => handleSelect(range)}
            className={`p-3 text-left rounded-lg border transition-all ${
              bookingData.budgetRange === range
                ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                : 'border-gray-200 dark:border-gray-700 hover:border-primary-600'
            }`}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  )
}
