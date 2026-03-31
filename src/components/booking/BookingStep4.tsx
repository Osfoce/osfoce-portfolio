import { CheckCircle } from 'lucide-react'
import { useBooking } from '../../context/BookingContext'

export default function BookingStep4() {
  const { closeModal, bookingData } = useBooking()

  return (
    <div className="text-center py-8">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">Booking Confirmed!</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Thank you for your interest. I'll get back to you within 24 hours.
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6 text-left">
        <p className="text-sm"><strong>Project Type:</strong> {bookingData.projectType}</p>
        <p className="text-sm"><strong>Budget Range:</strong> {bookingData.budgetRange}</p>
        <p className="text-sm"><strong>Name:</strong> {bookingData.name}</p>
        <p className="text-sm"><strong>Email:</strong> {bookingData.email}</p>
      </div>
      <button
        onClick={closeModal}
        className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
      >
        Close
      </button>
    </div>
  )
}
