import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function PageLayout() {
  return (
    <>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default PageLayout
