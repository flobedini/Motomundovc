
let stockProductos = [
    
    //Seccion Cascos

    {id: 1, nombre: "Rebatible", marca: "Hawk", tipo: "cascos", medida: "L", img: "../assets/img/cascos/1.png", precio: 12000},
    {id: 2, nombre: "Rebatible", marca: "Hawk", tipo: "cascos", medida: "L", img: "../assets/img/cascos/2.png",precio: 12500},
    {id: 3, nombre: "Rebatible", marca: "Hawk", tipo: "cascos", medida: "L", img: "../assets/img/cascos/3.png",precio: 13000},
    {id: 4, nombre: "Integral", marca: "MAC", tipo: "cascos", medida: "L", img: "../assets/img/cascos/4.png",precio: 15000},
    {id: 5, nombre: "Cross", marca: "Just 1", tipo: "cascos", medida: "L", img: "../assets/img/cascos/5.png",precio: 27000},
    {id: 6, nombre: "Cross", marca: "Just 1", tipo: "cascos", medida: "L", img: "../assets/img/cascos/6.png",precio: 28000},
    {id: 7, nombre: "Integral", marca: "LS2", tipo: "cascos", medida: "L", img: "../assets/img/cascos/7.png",precio: 30000},
    {id: 8, nombre: "Integral", marca: "LS2", tipo: "cascos", medida: "L", img: "../assets/img/cascos/8.png",precio: 20000},


    //Seccion Indumentaria
    {id: 9, nombre: "Calza",marca: "NTO", tipo: "indumentaria", medida: "", img: "../assets/img/indumentaria/1.png", precio: 7000},
    {id: 10, nombre: "Remera", marca: "NTO", tipo: "indumentaria", medida: "", img: "../assets/img/indumentaria/2.png", precio: 2500},
    {id: 11, nombre: "Guantes", marca: "NTO", tipo: "indumentaria", medida: "", img: "../assets/img/indumentaria/3.png", precio: 8000},
    {id: 12, nombre: "Pantalon", marca: "NTO", tipo: "indumentaria", medida: "", img: "../assets/img/indumentaria/4.png", precio: 15000},
    {id: 13, nombre: "Botas", marca: "NTO", tipo: "indumentaria", medida: "", img: "../assets/img/indumentaria/5.png", precio: 20000},
    {id: 14, nombre: "Campera", marca: "NTO", tipo: "indumentaria", medida: "", img: "../assets/img/indumentaria/6.png", precio: 40000},
    {id: 15, nombre: "Campera", marca: "NTO", tipo: "indumentaria", medida: "", img: "../assets/img/indumentaria/7.png", precio: 45000},
    {id: 16, nombre: "Campera", marca: "NTO", tipo: "indumentaria", medida: "", img: "../assets/img/indumentaria/8.png", precio: 43000},


    //Seccion Aceites
    {id: 17, nombre: "Mineral", marca: "Elf", tipo: "aceites", medida: "", img: "../assets/img/aceites/1.png", precio: 1000},
    {id: 18, nombre: "Mineral", marca: "Wander", tipo: "aceites", medida: "", img: "../assets/img/aceites/2.png", precio: 600},
    {id: 19, nombre: "7100", marca: "Motul", tipo: "aceites", medida: "", img: "../assets/img/aceites/3.png", precio: 2500},
    {id: 20, nombre: "Cadena", marca: "Motul", tipo: "aceites", medida: "", img: "../assets/img/aceites/4.png", precio: 2600},
    {id: 21, nombre: "510", marca: "Motul", tipo: "aceites", medida: "", img: "../assets/img/aceites/5.png", precio: 3000},
    {id: 22, nombre: "5000", marca: "Motul", tipo: "aceites", medida: "", img: "../assets/img/aceites/6.png", precio: 2000},
    {id: 23, nombre: "3000", marca: "Motul", tipo: "aceites", medida: "", img: "../assets/img/aceites/7.png", precio: 1500},
    {id: 24, nombre: "5100", marca: "Motul", tipo: "aceites", medida: "", img: "../assets/img/aceites/8.png", precio: 2000},


    //Seccion Cubiertas
    {id: 25, nombre: "Cubierta",marca: "Pirelli", tipo: "cubiertas", medida: "", img: "../assets/img/cubiertas/1.png", precio: 14000},
    {id: 26, nombre: "Cubierta",marca: "Pirelli", tipo: "cubiertas", medida: "", img: "../assets/img/cubiertas/2.png", precio: 19500},
    {id: 27, nombre: "Cubierta",marca: "Pirelli", tipo: "cubiertas", medida: "", img: "../assets/img/cubiertas/3.png", precio: 13000},
    {id: 28, nombre: "Cubierta",marca: "Pirelli", tipo: "cubiertas", medida: "", img: "../assets/img/cubiertas/4.png", precio: 8000},
    {id: 29, nombre: "Cubierta",marca: "Pirelli", tipo: "cubiertas", medida: "", img: "../assets/img/cubiertas/5.png", precio: 8900},
    {id: 30, nombre: "Cubierta",marca: "Pirelli", tipo: "cubiertas", medida: "", img: "../assets/img/cubiertas/6.png", precio: 16700},
    {id: 31, nombre: "Cubierta",marca: "Pirelli", tipo: "cubiertas", medida: "", img: "../assets/img/cubiertas/7.png", precio: 12500},
    {id: 32, nombre: "Cubierta",marca: "Pirelli", tipo: "cubiertas", medida: "", img: "../assets/img/cubiertas/8.png", precio: 13800},


    //Seccion Bolsos
    {id: 33, nombre: "Bolso",marca: "Givi", tipo: "bolsos", medida: "", img: "../assets/img/bolsos/1.png", precio: 34000},
    {id: 34, nombre: "Bolso",marca: "Givi", tipo: "bolsos", medida: "", img: "../assets/img/bolsos/2.png", precio: 32000},
    {id: 35, nombre: "Bolso",marca: "Givi", tipo: "bolsos", medida: "", img: "../assets/img/bolsos/3.png", precio: 25600},
    {id: 36, nombre: "Bolso",marca: "Givi", tipo: "bolsos", medida: "", img: "../assets/img/bolsos/4.png", precio: 19000},
    {id: 37, nombre: "Bolso",marca: "Givi", tipo: "bolsos", medida: "", img: "../assets/img/bolsos/5.png", precio: 23000},
    {id: 38, nombre: "Bolso",marca: "Givi", tipo: "bolsos", medida: "", img: "../assets/img/bolsos/6.png", precio: 24700},
    {id: 39, nombre: "Bolso",marca: "Givi", tipo: "bolsos", medida: "", img: "../assets/img/bolsos/7.png", precio: 15900},
    {id: 40, nombre: "Bolso",marca: "Givi", tipo: "bolsos", medida: "", img: "../assets/img/bolsos/8.png", precio: 10200},
]