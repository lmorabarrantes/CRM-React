import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from "yup"
import Alert from './Alert'
import Spinner from './Spinner'
import { useNavigate, useNavigationType } from 'react-router-dom'



const Formulario = ({cliente, cargando}) => {
    const navigate = useNavigate()

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
                    .min(3, "El nombre es muy corto")
                    .max(30, "nombre es muy largo")
                    .required("El Nombre del cliente es Obligatorio"),
        empresa: Yup.string()
                    .required("Nombre de la empresa es obligatorio"),
        email: Yup.string()
                    .required("email es obligatorio")
                    .email("Email no valido"),
        telefono: Yup.number()
                        .integer("Numero no valido")
                        .typeError("Numero no valido"),
        

    })


    const handleSubmit = async(valores)=>{
        try {
            let respuesta
            if (cliente.id) {
                //Editando Registro
                const url = `http://localhost:4000/clients/${cliente.id}`
                respuesta = await fetch(url,{
                    method: "PUT",
                    body: JSON.stringify(valores),
                    headers:{
                        "Content-Type": "application/json"
                    }
                })
            }else{
                //nuevo Registo
                const url = "http://localhost:4000/clients"
                respuesta = await fetch(url,{
                    method: "POST",
                    body: JSON.stringify(valores),
                    headers:{
                        "Content-Type": "application/json"
                    }
                })

            }
            const resultado = await respuesta.json()
            console.log(resultado)
            navigate("/client")
        } catch (error) {
            console.log("error")
        }
    }


  return (
    cargando ? <Spinner/> :(
        <div className='bg-white mt-10 p-5 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>{cliente?.nombre ? "EDITAR CLIENTE" : "AGREGAR CLIENTE"}</h1>

            <Formik
                initialValues={{
                    nombre: cliente?.nombre ?? "",
                    empresa: cliente?.empresa ?? "",
                    email: cliente?.email ?? "",
                    telefono: cliente?.telefono ?? "",
                    notas:cliente?.notas ?? ""

                }}
                enableReinitialize={true}
                onSubmit={async(values, {resetForm})=>{
                    await handleSubmit(values)
                    resetForm()
                }}
                validationSchema={nuevoClienteSchema}
            
            >

                {({errors, touched})=>(

            
                <Form
                className=' mt-15'>
                    <div className='mb-5'>
                        <label className='text-gray-800' htmlFor='nombre'>Nombre: </label>
                        <Field
                            id="nombre"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-100"
                            placeholder="Nombre Cliente"
                            name="nombre"
                        />
                        {errors.nombre && touched.nombre ? ( <Alert> {errors.nombre} </Alert> ): null}
                    </div>
                    <div className='mb-5'>
                        <label className='text-gray-800' htmlFor='empresa'>Empresa: </label>
                        <Field
                            id="empresa"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-100"
                            placeholder="Nombre Empresa"
                            name="empresa"
                        />
                        {errors.empresa && touched.empresa ? ( <Alert> {errors.empresa} </Alert> ): null}
                    </div>
                    <div className='mb-5'>
                        <label className='text-gray-800' htmlFor='email'>Email: </label>
                        <Field
                            id="email"
                            type="email"
                            className="mt-2 block w-full p-3 bg-gray-100"
                            placeholder="Email"
                            name="email"
                        />
                        {errors.email && touched.email ? ( <Alert> {errors.email} </Alert> ): null}
                    </div>
                    <div className='mb-5'>
                        <label className='text-gray-800' htmlFor='telefono'>Telefono: </label>
                        <Field
                            id="telefono"
                            type="tel"
                            className="mt-2 block w-full p-3 bg-gray-100"
                            placeholder="Telefono Clinte"
                            name="telefono"
                        />
                        {errors.telefono && touched.telefono ? (<Alert>{errors.telefono}</Alert>) : null}
                    </div>
                    <div className='mb-5'>
                        <label className='text-gray-800' htmlFor='notas'>Notas: </label>
                        <Field
                            as="textarea"
                            id="notas"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-100 h-40"
                            placeholder="Notas de Cliente"
                            name="notas"
                        />
                    </div>
                    <input
                        className='mt-5 w-full  p-3 text-white font-bold uppercase text-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... '
                        type="submit"
                        value={cliente?.nombre ? "EDITAR CLIENTE" : "AGREGAR CLIENTE"}
                    />
                    

                </Form>
                )}
            </Formik>
        </div>
    )

  )
}
Formulario.defaultProps ={
    cliente:{},
    cargando : false
}

export default Formulario