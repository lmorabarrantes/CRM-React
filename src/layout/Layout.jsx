import React from 'react'
import {Outlet, Link, useLocation} from "react-router-dom"

const Layout = () => {
  const location = useLocation()
  console.log(location)
  const urlActual = location.pathname
  return (
    <div className='md:flex md:min-h-screen'>
     
      <div className='md:w-1/5 bg-gray-700 py-10 p-5 '>
        <h2 className='text-4xl font-black text-center text-white'> Clientes</h2>
        <nav className='mt-10 '>
          <Link className={`${urlActual === "/client" ? "text-blue-300": "text-white"} text-1xl block mt-2 hover:text-blue-300 `}
            to="/client"
          >clientes</Link>
          <Link className={`${urlActual === "/client/new" ? "text-blue-300": "text-white"} text-1xl block mt-2 hover:text-blue-300 `}
            to="/client/new"
          >Nuevo Cliente</Link>




        </nav>


      </div>
      <div className='md:w-4/5 p-10 md:h-screen overflow-scroll'>
        <Outlet/>
      </div>
        

      
    </div>
  )
}

export default Layout