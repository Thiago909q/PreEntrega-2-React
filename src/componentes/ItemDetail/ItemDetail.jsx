import React from 'react'
import "./ItemDetail.css"




const ItemDetail = ({id, nombre, precio, img,}) => {


  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <img src={img} alt={nombre} />
        <h3>Precio {precio} </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, labore. 
          Facilis commodi harum eligendi eum amet quia nesciunt asperiores. Quibusdam voluptates assumenda ipsam magni dignissimos totam ex culpa maiores atque?</p>
    </div>
  )
}

export default ItemDetail