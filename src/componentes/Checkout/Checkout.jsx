import { useState, useContext } from "react"
import {CarritoContext} from "../../context/CarritoContext" 
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import './CheckOut.css';

const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, vaciarCarrito, total} = useContext(CarritoContext)



    const manejadorFormulario =(e) => {
        e.preventDefault()

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos solicitados")
            return;
        }
        
    

        if(email !== emailConfirmacion){
            setError("Las direcciones E-mail ingresadas no coinciden")
            return;
        }



        const orden = {
            items: carrito.map (producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };


        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id)
                vaciarCarrito();
                setNombre("")
                setApellido("")
                setTelefono("")
                setEmail("")
                setEmailConfirmacion("")
            })
            .catch(error => {
                console.log("Error al crear la orden", error)
                setError("Se producjo un error al crear la orden!")
            })
    }

  return (
    <div>

        <form onSubmit={manejadorFormulario} className="Form-caja">
        <h2 className="checkout-form"> Checkout</h2>
            {   
                carrito.map(producto => (
                    <div key={producto.item.id} className="productos-carrito">
                        <p>{producto.item.nombre}</p>
                        <p>{producto.item.precio} x {producto.cantidad}</p>
                        <p>{producto.item.precio}</p>
                        
                    </div>
                ))
            }
            <div className="contenedor-formulario">
            <div className="form-items">
                <input type="text" id="nombre" onChange={(e)=>setNombre(e.target.value)} value={nombre} /> 
                <label htmlFor="nombre"> Nombre </label>
                
            </div>
            <div className="form-items">
            <input type="text" id="apellido" onChange={(e)=>setApellido(e.target.value)} value={apellido} /> 
                <label htmlFor="apellido"> Apellido </label> 
                
            
            </div>
            <div className="form-items">
            <input type="text" id="telefono" onChange={(e)=>setTelefono(e.target.value)} value={telefono} /> 
            <label htmlFor="telefono"> Telefono </label> 
            
            </div>
            <div className="form-items">
            <input type="email" id="mail" onChange={(e)=>setEmail(e.target.value)} value={email} />
            <label htmlFor="mail"> Email </label> 
            </div>
            <div className="form-items">

            <input type="email" id="mail" onChange={(e)=>setEmailConfirmacion(e.target.value)} value={emailConfirmacion}/>
            <label htmlFor="mail"> Email Confirmacion </label> 
            
            
            </div>
            </div>
                {
                    error && <p style={{color:"red"}}> {error}</p>
                }

            <button type="submit"> Confirmar Compra </button>
            {
                ordenId && (
                    <strong>¡Gracias por tu compra! Tu numero de orden es: {ordenId}</strong>
                )
            }
        </form>
        
    </div>

  )
}

export default Checkout 