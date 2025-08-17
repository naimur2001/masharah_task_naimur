import React from 'react'
import Sidebar from '../components/sidebar'
import Contentbar from '../components/contentbar'

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      {/* Content takes 8/12 = 2/3 */}
      <div className="col-span-8">
        <Contentbar />
      </div>

      {/* Sidebar takes 4/12 = 1/3 */}
      <div className="col-span-4">
        <Sidebar />
      </div>
    </div>
  )
}

export default Home
