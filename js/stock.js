let precioDolar = 550

class piezas{
    constructor(id, nombre, color, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const pieza1 = new piezas (1, "afa", "azul", 6.8*precioDolar, "afa.png");
const pieza2 = new piezas (2, "cortante caballito de mar", "rojo", 7.2*precioDolar, "caballitodemar.jpg");
const pieza3 = new piezas (3, "cortante cancha", "amarillo", 1*precioDolar, "cancha.jpg");
const pieza4 = new piezas (4, "cortante candado", "rosa", 1*precioDolar, "candado.jpg");
const pieza5 = new piezas (5, "cortante copa", "blanco", 1*precioDolar, "copa.jpg");
const pieza6 = new piezas (6, "cortante pulpo", "amarillo", 1*precioDolar, "pulpo.jpg");

let stock = []

if (localStorage.getItem("stock")) {
    stock = JSON.parse(localStorage.getItem("stock"))
}else{
    stock.push(pieza1,pieza2,pieza3,pieza4,pieza5,pieza6)
    localStorage.setItem("stock", JSON.stringify(stock))
}