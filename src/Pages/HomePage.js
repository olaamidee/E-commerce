import React from 'react'
import Aside from '../Components/Aside.js'
import HomeProduct from '../Components/HomeProduct.js'

function HomePage() {
  return (
    <div className='Homepage'>
        <Aside/>
        <HomeProduct />
    </div>
  )
}

export default HomePage