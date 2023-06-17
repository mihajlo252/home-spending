import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Components/Footer'

export const Root = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}
