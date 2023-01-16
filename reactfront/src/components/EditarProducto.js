import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product/'

const EditarProducto = () => {
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)
    const [plataforma, setPlataforma] = useState('')

    const {id} = useParams()

    const navigate = useNavigate()

    const update = async (e) => {
          e.preventDefault()
          await axios.put(`${endpoint}${id}`,{
            nombre: nombre, precio: precio, plataforma: plataforma
          })
          navigate('/')
    }
    useEffect( () =>{
      const ObtenerProductoid = async () => {
        const response = await axios.get(`${endpoint}${id}`)
        setNombre(response.data.nombre)
        setPrecio(response.data.precio)
        setPlataforma(response.data.plataforma)
      }
      ObtenerProductoid()
    },[])
    return (
      <div>
      <h3>Editar Producto</h3>
      <form onSubmit={update}>
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

export default EditarProducto
