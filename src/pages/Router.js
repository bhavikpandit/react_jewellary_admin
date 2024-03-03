import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from '../components/Layout/Layout'
import Users from './Users/Users'
import Orders from './Order/Orders'
import MainDash from './MainDash/MainDash'
import Login from './login'
import AuthGuard from '../components/Auth/Auth'


const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<AuthGuard><Layout /></AuthGuard>}>
        <Route path='/' element={<MainDash />} />
        <Route path='/orders' element={<Orders />} />
        {/* <Route path='/products/:productId' element={<ProductDetails />} /> */}
        <Route path='/users' element={<Users />} />
        {/* <Route path='/users/:userId' element={<UserDetails />} /> */}
      </Route>
    </Routes>
  )
}

export default Router