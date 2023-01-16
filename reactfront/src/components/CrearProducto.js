import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product'
const CrearProducto = () => {
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)
    const [plataforma, setPlataforma] = useState('')

    const navigate = useNavigate()


    const store = async (e) => {
         e.preventDefault()
       await axios.post(endpoint, {nombre: nombre, precio: precio, plataforma: plataforma})
         navigate('/')
    }
  return (
    <div>
      <h3>Crear Producto</h3>
      <form onSubmit={store}>
      <div className='mb-3'>
        <label className='form-label'>Nombre</label>
        <input value={nombre} onChange={(e)=>setNombre(e.target.value)} type='text' className='form-control'/>

      </div>
      <div className='mb-3'>
        <label className='form-label'>Precio</label>
        <input value={precio} onChange={(e)=>setPrecio(e.target.value)} type='number' className='form-control'/>

      </div>
      <div className='mb-3'>
        <label className='form-label'>Plataforma</label>
        <input value={plataforma} onChange={(e)=>setPlataforma(e.target.value)} type='text' className='form-control'/>

      </div>
           <button type='submit' className='btn btn-primary'>Guardar</button>

      </form>
    </div>
  )
}

export default CrearProducto
