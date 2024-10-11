const misProductos= [
    {
        id: "1", 
        nombre: "Reloj Casio 1",
        stock: 10,
        precio: 600000, 
        img: "../img/casio1.png",
        idCat:"casio",
    },
    {
        id: "2", 
        nombre: "Reloj Tommy 1",
        stock: 12, 
        precio: 300000,
        img: "../img/tommy1.png",
        idCat:"tommy",
    },
    {
        id: "3",
        nombre: "Reloj Tisot 1", 
        stock: 14,
        precio: 250000, 
        img: "../img/tisot1.png",
        idCat:"tisot",
    },
    {
        id: "4",
        nombre: "Reloj Tisot 2",
        stock: 20,
        precio: 900000,
        img: "../img/tisot2.png",
        idCat:"tisot",
    },
]

export const getProductos = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(misProductos)
        }, 100);
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })

}

export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 100);

    })

}