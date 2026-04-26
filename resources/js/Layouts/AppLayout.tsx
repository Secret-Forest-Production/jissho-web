import React, { PropsWithChildren } from 'react'
import Navbar from '@/Components/shared/Navbar'
import Footer from '@/Components/shared/Footer'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}