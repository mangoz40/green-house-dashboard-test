import { React, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import Dashboard from '../components/dashboard'
import Control from '../pages/controls'


function User() {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleInitialScreenSize = () => {
      if (window.innerWidth < 1200) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    }; 
    handleInitialScreenSize();
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  
  
  document.documentElement.dir = "ltr";
  return (
    <div className='flex h-full w-full sm:mt-[5px] md:mt-[0px] bg-gray'>
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className='h-full w-full '>
        <main className='mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[250px]'>
          <div className='h-full'>
            <Navbar 
              onOpenSidenav={() => setOpen(true)}
            />
          </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/control" element={<Control />} />
            
          </Routes>
          
        </main>

      </div>
    </div>
  )
}

export default User