import React from 'react'

import data from '../Data/hadith.json'

const Contentbar = () => {
 
  return (
    <div className='py-1'>
         <div className='overflow-y-auto scrollbar-left
         lg:max-h-[500px] '>
       {
       data.hadiths.map((hadith: any) => {
         return (
           <div key={hadith.id} className='border text-right text-3xl text-gray-500 p-2 m-0.5'>
         <p className='p-0.5 '>{hadith.content.hadith}</p>
        </div>
         )
       })
       }
         </div>

    </div>
  )

}

export default Contentbar