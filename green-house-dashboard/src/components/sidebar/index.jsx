import { React, useState, useEffect } from 'react'
import { HiX } from 'react-icons/hi'

const Sidebar = ({ open, onClose }) => {

  
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-primary
      pb-10 shadow-2xl shadow-white/5 transition-all ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
        <span
          className="xl:hidden absolute top-4 right-4 block cursor-pointer"
          onClick={onClose}
        >
          <HiX />
        </span>

        <div className={`mx-[56px] mt-[50px] flex items-center`}>
          <div className="mt-1 ml-1 text-[26px] font-bold">
            DODMA 
          </div>
        </div>

    </div>
  )
}

export default Sidebar