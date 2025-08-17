import React from 'react'
import Sidebar from '../components/sidebar'
import Contentbar from '../components/contentbar'

const Home = () => {
  return (
  <div className="grid grid-cols-12 gap-2">
  
    <div className="lg:col-span-8 md:col-span-6 col-span-12">
      <Contentbar />
    </div>


    <div className="lg:col-span-4 md:col-span-6 hidden md:block">
      <Sidebar />
    </div>
  </div>
  )
}

export default Home
