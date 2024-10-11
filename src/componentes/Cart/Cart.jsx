import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'


const Cart = () => {
 const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext)

 if (cantidadTotal === 0) {
    return (
        <div className="contenedorCarritoVacio">
            <h2>No hay productos en el carrito.</h2>
            <div className="DivVerProductos">
            <Link to="/" className="BtnVerProductos">Ver Productos</Link>
            </div>
        </div>

    )
 }

  return (
    <div className="contenedorCarrito">
        <div className="funcionCarritoProductos">
            {
                
                carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)

            }
            </div>

        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <button onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>
        <Link to="/checkout" className="BtnFinalizarCompra">Finalizar Compra</Link>

    </div>
  )
}

export default Cart