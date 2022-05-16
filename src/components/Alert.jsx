import React from 'react'

const Alert = ({children}) => {
  return (
    <div className='text-center my-2 text-white font-bold p-1 uppercase bg-red-400 rounded-md'>
        {children}
    </div>
  )
}

export default Alert