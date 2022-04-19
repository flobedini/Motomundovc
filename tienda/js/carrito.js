/* vacio el localStorage para evitar que hayan quedado datos guardados */
localStorage.removeItem("carrito");
localStorage.removeItem("contador");
localStorage.removeItem("precioTotal");

let contador = 0; 

let carritoContador = document.querySelector(".contador")
let contadorProducto = document.querySelector(".contador_producto")
let precioTotal = document.querySelector(".precio__producto span")
let totalCompra = 0


function carrito(){

    const agregar = document.getElementsByClassName("prod__agregar");
    


    for(let produc of agregar){

        produc.addEventListener("click",function(e){

            /* incremento del icono contador  */
            contador ++
            carritoContador.innerHTML=`
                <p>${contador}</p>
            `;

            /* capturar ID del boton seleccionado */
            agregarProducto(e.target.id);
            
            /* mostrar cantidad de productos*/
            contadorProducto.innerHTML = (contador)

            /* mostrar precio total */
            let producto =Productos.find( elem => elem.id == e.target.id);
            totalCompra += producto.precio ;
            precioTotal.innerHTML = (`$ ${totalCompra}`);

            localStorage.setItem("precioTotal", totalCompra);
            localStorage.setItem("contador", contador);
            
        });

    };

};
