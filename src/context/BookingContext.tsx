import { createContext, useContext, useState } from 'react'
import { BookingData } from '../types'
// import emailjs from '@emailjs/browser'


interface BookingContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
  bookingData: Partial<BookingData>
  updateBookingData: (data: Partial<BookingData>) => void
  currentStep: number
  setCurrentStep: (step: number) => void
  submitBooking: () => Promise<void>
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({})

  const openModal = () => setIsOpen(true)
  const closeModal = () => {
    setIsOpen(false)
    setCurrentStep(0)
    setBookingData({})
  }

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...data }))
  }

  const submitBooking = async () => {
    // Send to webhook or email API
    try {
      const response = await fetch('[WEBHOOK_URL]', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      })

      if (response.ok) {
        console.log('Booking submitted successfully')
      }
    } catch (error) {
      console.error('Error submitting booking:', error)
    }

    //     try {
    //   await emailjs.send(
    //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //     {
    //       name: data.name,
    //       email: data.email,
    //       projectType: data.projectType,
    //       budgetRange: data.budgetRange,
    //       message: data.message,
    //       time: new Date().toLocaleString(),
    //     },
    //     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    //   )

    //   alert('Message sent successfully! I will get back to you soon.')
    //   reset()

    // } catch (error) {
    //   console.error('Error sending message:', error)
    //   alert(
    //     'Failed to send message. Please try again or email me directly at oselufortunatus@gmail.com'
    //   )
    // }
  }

  return (
    <BookingContext.Provider value={{
      isOpen,
      openModal,
      closeModal,
      bookingData,
      updateBookingData,
      currentStep,
      setCurrentStep,
      submitBooking,
    }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider')
  }
  return context
}
