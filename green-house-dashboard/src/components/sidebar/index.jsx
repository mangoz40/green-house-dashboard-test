import { React, useState, useEffect } from 'react'
import { HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'

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
            VIEWS
          </div>
        </div>
        <ul className="mb-auto pt-1">
          <li className="my-[3px] flex cursor-pointer items-center px-8 font-bold">
            <Link to="/"> 
              Main Dashboard
            </Link>
          </li>
          <li className="my-[3px] flex cursor-pointer items-center px-8 font-bold">
            <Link to="/control"> 
              Control
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar