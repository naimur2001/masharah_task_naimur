"use client"
import React, { useEffect, useState } from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { GiBackwardTime } from "react-icons/gi";
import data from '../Data/hadith.json'

const sidebar = () => {
    const [showTitles, setShowTitles] = useState(true);
    const [showTitles2, setShowTitle2] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showBookMark, setShowBookMark] = useState(false);

  const sidebarIcons=[{id:"back",icon:<GiBackwardTime className='text-2xl cursor-pointer
      focus:bg-amber-50'/>},{id:"star",icon:<FaStar className='text-2xl cursor-pointer  focus:bg-amber-50'/>},{id:"search",icon:<FaSearch className='text-2xl cursor-pointer  focus:bg-amber-50'/>},{id:"menu",icon:<TfiMenuAlt className='text-2xl cursor-pointer  focus:bg-amber-50  rotate-y-180' />}]
const [activeButton, setActiveButton] = useState("menu"); // menu is active initially


const handleClick = (id: string) => {
  setActiveButton(id);
  if (id === "menu") {
    setShowTitles(true);
    setShowTitle2(false); // hide back list
  }

  if (id === "back") {
    setShowTitles(false); // hide menu list
    setShowTitle2(true);

  }


  if (id === "search") {
    setShowTitles(false); // hide menu list
    setShowTitle2(false);
    setShowSearch(true)
  }
  if (id==="star"){
    setShowTitles(false); // hide menu list
    setShowTitle2(false);
    setShowSearch(false)
    setShowBookMark(true)
  }
};

  return (
    <div>
      <div>
  
    <div  className='flex justify-between gap-x-2 gap-y-3  bg-gray-200 '>
    {
      sidebarIcons?.map((item,index)=>{
    return(
          <button onClick={() => handleClick(item.id)}
 className={`h-10 w-20 flex justify-center items-center cursor-pointer hover:bg-amber-50 focus:bg-amber-50 ${
    activeButton === item.id ? "bg-amber-50" : ""
  }`}key={item.id}>
            {item.icon}
          </button>
    )
      })
    }
    </div>
     {showTitles && (
        <ul className="mt-4 pl-2 pb-2 pt-2  pr-0 border-r border-gray-300  overflow-y-auto scrollbar-left
         lg:max-h-[500px] ">
          {data?.hadiths?.map((hadith: any, i: number) => (
            <li
              key={i}
              className="cursor-pointer  p-2 border-b text-xl text-gray-500 border-gray-300   rounded text-right"
            >
              {hadith.title} -
            </li>
          ))}
        </ul>
      )}

     {
        showTitles2 && (
          <ul className="mt-4 pl-2 pb-2 pt-2  pr-0 border-r border-gray-300 overflow-y-auto scrollbar-left
           max-h-[500px] ">
            {data?.hadiths?.map((hadith: any, i: number) => (
              <li
                key={i}
                className="cursor-pointer  p-2 border-b text-xl text-gray-500 border-gray-300   rounded text-right flex justify-between"
              >
             <span>  - </span>{hadith.title} 
              </li>
            ))}
          </ul>
        )
      }

     {
        showSearch  && (
          <ul className="mt-4 pl-2 pb-2 pt-2  pr-0 border-r border-gray-300 overflow-y-auto scrollbar-left
           max-h-[500px] ">
            <div className='m-1 flex justify-center'>
                          <input type="text" className='w-full p-3 border-1 border-gray-400 outline-none rounded-md'  />

            </div>
            {data?.hadiths?.map((hadith: any, i: number) => (
              <li
                key={i}
                className="cursor-pointer  p-2 border-b text-xl text-gray-500 border-gray-300   rounded text-right flex justify-between"
              >
             <span>  - </span>{hadith.title} 
              </li>
            ))}
          </ul>
        )
      }
  {
    showBookMark &&(
         <ul className="mt-4 pl-2 pb-2 pt-2  pr-0 border-r border-gray-300 overflow-y-auto scrollbar-left
           max-h-[500px] ">
           <h1 className=' text-center text-3xl text-gray-500 break-words '>
            أضف مفضلة بالنقر مرتين على صفحة من الكتاب

           </h1>
          </ul>
    )
  }
      </div>

    </div>
  )
}

export default sidebar