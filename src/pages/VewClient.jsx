
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const VewClient = () => {
    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)
    const {id}= useParams()
    useEffect(() => {
        const ObtenerClienteAPI = async()=>{
            try {
                const url =  `http://localhost:4000/clients/${id} `
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
    
    const {nombre, empresa, email, notas, telefono} = cliente
  return (
      cargando ? <Spinner/> : Object.keys(cliente).length === 0 ? <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center font-bold uppercase'>No Hay Resultados</p> : (
      
        <div className='bg-white text-center'>
            <h1 className='font-black text-4xl text-blue-900 text-center'>Clientes</h1>
            <p className='mt-1 font-bold uppercase bg-gray-200'>cliente visualizado</p>     

            <p className='text-2xl text-gray-700 mt-5'>
                <span className='uppercase font-bold'>Cliente:</span>{nombre}
            </p>
            <p className='text-2xl text-gray-700 mt-5'>
                <span className='uppercase font-bold'>empresa:</span>{empresa}
            </p>
            <p className='text-2xl text-gray-700 mt-5'>
                <span className='uppercase font-bold'>email:</span>{email}
            </p>
            <p className='text-2xl text-gray-700 mt-5'>
                <span className='uppercase font-bold'>telefono:</span>{telefono}
            </p>
            {cliente.notas && (
                <p className='text-2xl text-gray-700 mt-5'>
                            <span className='uppercase font-bold'>notas:</span>{notas}
                </p>
            )}            
            )
            
        </div>
      )
  )
}

export default VewClient