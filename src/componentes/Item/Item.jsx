import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id,nombre, precio, img}) => {
  return (
    <div className='cardProductos'>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <p>Precio: {precio}</p>
        <Link to={`/item/${id}`}>Ver Detalles</Link>

    </div>
  )
}

export default Item