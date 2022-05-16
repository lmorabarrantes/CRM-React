import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditClient = () => {
  const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)
    const {id}= useParams()


    useEffect(() => {
        const ObtenerClienteAPI = async()=>{
            try {
                const url =  `${import.meta.env.VITE_API_URL}/${id} `
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)
    
            } catch (error) {
                console.log(error)
            }

                setCargando(!cargando)

            
        }
        ObtenerClienteAPI()
    }, [])


  return (
    <>
      <h1 className='font-black text-4xl text-blue-900 text-center'>Editar Cliente</h1>
      <p className='mt-10'>Formulario para Editar un Cliente</p>
      
      {cliente?.nombre ?(
      <Formulario
        cliente={cliente}
        cargando={cargando}

      />): <p className='bg-slate-600 font-bold text-white text-center text-2xl rounded-md'>Cliente ID no valido</p>}
      
      
    </>
  )
}

export default EditClient