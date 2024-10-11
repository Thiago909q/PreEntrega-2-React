import React from 'react'
import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'



const ItemDetail = ({id, nombre, precio, img, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext)


const manejadorCantidad = (cantidad) =>{
  setAgregarCantidad(cantidad);
  console.log("Productos Agregados:" + cantidad)

  const item = {id, nombre, precio}
  agregarAlCarrito (item, cantidad)
}

  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <img src={img} alt={nombre} />
        <h3>Precio {precio} </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, labore. 
          Facilis commodi harum eligendi eum amet quia nesciunt asperiores. Quibusdam voluptates assumenda ipsam magni dignissimos totam ex culpa maiores atque?</p>
    
    {
      agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
    }
    </div>
  )
}

export default ItemDetail