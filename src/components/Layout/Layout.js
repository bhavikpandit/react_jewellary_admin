import React from 'react'
import { Outlet } from 'react-router-dom'
import "./layout.css"
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const Layout = () => {
  console.log("layout")
  return (
    <>
      <main>
        <Header />
        <div className='AppGlass'>
          <div className='main-content'>
            <Sidebar />
            <div className='AppContent'>
              <Outlet />
            </div></div>
        </div>
      </main >

    </>
  )
}

export default Layout