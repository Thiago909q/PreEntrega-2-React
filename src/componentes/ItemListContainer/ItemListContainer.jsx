import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategorias} from "../../asynmock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams()

  useEffect(() => {
      const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;

      funcionProductos(idCategoria)
      .then(res => setProductos(res))
      
  }, [idCategoria])


  return (

    <>
        <h2> Mis productos</h2>
        <ItemList productos={productos}/>
    
    </>
  )
}

export default ItemListContainer