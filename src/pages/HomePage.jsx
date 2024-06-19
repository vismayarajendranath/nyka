import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Header'
import ProductList from '../components/ProductList'

const HomePage = () => {
  return (
    <div>
      <ProductList />
    </div>
  )
}

export default HomePage