import { useNavigate } from "react-router-dom"

const Cliente = ({cliente, handleEliminar}) => {
    const navigate = useNavigate()
    const {nombre, empresa,email, telefono, notas, id }= cliente
  return (
    <tr className='border-b hover:bg-gray-50'>
        <td className='p-3 '>{nombre}</td>
        <td className='p-3 '>
            <p><span className='text-gray-800 font-bold uppercase'>Email: </span>{email}</p>
            <p><span className='text-gray-800 font-bold uppercase'>Tel: </span>{telefono}</p>
        </td>
        <td className='p-3 '>{empresa}</td>
        <td className='p-3 '>
            <button 
                type='button' 
                className=' text-xs transition ease-in-out delay-150 bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-400 duration-300 ... text-white p-1 w-full uppercase font-bold mb-2'
                onClick={() => navigate(`/client/${id}`)}
            >Ver</button>
            <button 
                type='button' 
                className=' text-xs transition ease-in-out delay-150 bg-blue-800 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... text-white p-1 w-full uppercase font-bold mb-2'
                onClick={()=> navigate(`/client/edit/${id}`)}
            >Editar</button>
            <button 
            type='button' 
            className=' text-xs transition ease-in-out delay-150 bg-red-700 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 ... text-white p-1 w-full uppercase font-bold'
            onClick={()=> handleEliminar(id)}
            > Eliminar</button>
        </td>
    </tr>
  )
}

export default Cliente