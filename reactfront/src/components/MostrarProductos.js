import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const MostrarProductos = () => {
const [products, setProducts] = useState ([])
useEffect (()=>{
    ObtenerTodos()
}, [])

    const ObtenerTodos = async () => {
    const response = await axios.get(`${endpoint}/products`)
    setProducts(response.data)
    }
    const EliminarProducto = async (id) => {
    await axios.delete(`${endpoint}/product/${id}`)
    ObtenerTodos()
    }
  return (
    <div>
                   <div className='d-grid gap-2'>
                       <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Crear</Link>
                   </div>
                   <table className='table table-striped'>
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Plataforma</th>
                            <th>Opciones</th>


                            
                        </tr>


                    </thead>
                    <tbody>
                        {products.map( (product) => (
                            <tr key={product.id}>
                                <td> {product.nombre} </td>
                                <td> {product.precio} </td>
                                <td> {product.plataforma} </td>
                                <td>
                                    <Link to={`/edit/${product.id}`} className='btn btn-warning'>Editar</Link>
                                    <button onClick={()=>EliminarProducto(product.id) } className='btn btn-danger'>Eliminar</button>
                                    </td> 

                            </tr>
                        ))}
                    </tbody>
                   </table>

    </div>
  )
}

export default MostrarProductos