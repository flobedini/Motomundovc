let carritoDeCompras = []

const contenedorProductos = document.getElementById('container--productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecTalles = document.getElementById('selecTalles')
const buscador = document.getElementById('search')

const categoria = document.getElementsByClassName('.select--categoria')

//filtro
/* selecTalles.addEventListener('change',()=>{
    if(selecTalles.value == 'all'){
        mostrarProductos(stockProductos)
    }else{
        mostrarProductos(stockProductos.filter(elemento => elemento.talle == selecTalles.value))
    }
}) */

//Buscador



mostrarProductos(stockProductos)


//Creando cards de productos


function mostrarProductos(array){
    contenedorProductos.innerHTML= ""
    
    array.forEach(item => {

        let div = document.createElement('div')
        div.classList.add('div__producto')
        div.innerHTML += `
                    <div class="card">
                        <img src="${item.img}" alt="Foto cascos">
                        <h4>${item.marca}</h4>
                        <p>${item.nombre}</p>
                        <p>Talle: ${item.medida}</p>
                        <p>$${item.precio}</p>
                        <button class="agregar__prod" id="agregar${item.id}"><i class="fas fa-bag-shopping"></i>Agregar</button>
                    </div>`
    
    contenedorProductos.appendChild(div)

        let btnAgregar = document.getElementById(`agregar${item.id}`)

        btnAgregar.addEventListener('click',()=>{
            console.log(item.id);
            agregarAlCarrito(item.id)
        })

    })
}


    function agregarAlCarrito(id) {
    let carritoAgregar = carritoDeCompras.find(item=> item.id == id)
    if(carritoAgregar){
        carritoAgregar.cantidad = carritoAgregar.cantidad + 1
        document.getElementById(`und${carritoAgregar.id}`).innerHTML =` <p id=und${carritoAgregar.id}>Cant: ${carritoAgregar.cantidad}</p>`
        actualizarCarrito()
    }else{
        let productoAgregar = stockProductos.find(elemento => elemento.id == id)
    
        productoAgregar.cantidad = 1
        
        carritoDeCompras.push(productoAgregar)
        
        actualizarCarrito()

        mostrarCarrito(productoAgregar) 
    }

    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
    
}



//Creando la funcion de carrito

function mostrarCarrito(productoAgregar) {

    let div = document.createElement('div')
    div.className = 'productoEnCarrito'
    div.innerHTML=`
                    <img src="${productoAgregar.img}" class="img--carrito">
                    <p>${productoAgregar.marca}</p>
                    <p>${productoAgregar.nombre}</p>
                    <p>$${productoAgregar.precio}</p>
                    <p id="und${productoAgregar.id}">Cant: ${productoAgregar.cantidad}</p>
                    <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `
    contenedorCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

    btnEliminar.addEventListener('click',()=>{
        if(productoAgregar.cantidad == 1){
            btnEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter(item=> item.id != productoAgregar.id)
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
        }else{
            productoAgregar.cantidad = productoAgregar.cantidad - 1
            document.getElementById(`und${productoAgregar.id}`).innerHTML =` <p id=und${productoAgregar.id}>Cant: ${productoAgregar.cantidad}</p>`
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
            }
        

    })


}



function  actualizarCarrito (){
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
}




function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    
    if(recuperarLS){
        recuperarLS.forEach(el=> {
            mostrarCarrito(el)
            carritoDeCompras.push(el)
            actualizarCarrito()
        })
    }


}


recuperar()


if (contenedorCarrito == null ){
    document.querySelector(".ver__carrito")
    button.addEventListener("click", function(){
        swal({
            icon: "error",
        });
    })
}