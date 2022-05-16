import React from 'react'
import Formulario from '../components/Formulario'

const NewClient = () => {
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900 text-center'>Nuevo Cliente</h1>
      <p className='mt-10'>Formulario para Resgistrar un Cliente</p>

      <Formulario/>
    </>

  )
}

export default NewClient