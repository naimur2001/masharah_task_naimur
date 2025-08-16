import React from 'react'
import Sidebar from '../components/sidebar'

const Home = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
      <div className='div-1'></div>
      <div className='div-2'><Sidebar/></div>
    </div>
  )
}

export default Home