import React, { useEffect, useState } from 'react'
import {getUnProducto} from '../../asynmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null)

  const {idItem} = useParams()

  useEffect(()=>{
      getUnProducto(idItem)
          .then(respuesta => setProducto(respuesta))
  }, [idItem])




  return (
    <div className='contenedor-productos'>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer