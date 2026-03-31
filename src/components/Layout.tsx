import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BookingModal from './BookingModal'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <BookingModal />
    </div>
  )
}
