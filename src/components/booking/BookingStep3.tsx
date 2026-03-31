import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useBooking } from '../../context/BookingContext'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function BookingStep3() {
  const { updateBookingData, setCurrentStep, submitBooking, bookingData } = useBooking()
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: bookingData.name || '',
      email: bookingData.email || '',
      message: bookingData.message || '',
    },
  })

  const onSubmit = async (data: FormData) => {
    updateBookingData(data)
    await submitBooking()
    setCurrentStep(3)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name *</label>
        <input
          {...register('name')}
          className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-800"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Email *</label>
        <input
          {...register('email')}
          type="email"
          className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-800"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Message (Optional)</label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-800"
          placeholder="Tell me more about your project..."
        />
      </div>
      
      <button
        type="submit"
        className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
      >
        Submit Booking
      </button>
    </form>
  )
}
