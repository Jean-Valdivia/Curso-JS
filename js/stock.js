class piezas{
    constructor(id, nombre, color, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const pieza1 = new piezas (1, "Portasahumerio", "azul", 6.8*precioDolar);
const pieza2 = new piezas (2, "grip picatinny", "rojo", 7.2*precioDolar);
const pieza3 = new piezas (3, "cortante bob esponja", "amarillo", 1*precioDolar);
const pieza4 = new piezas (4, "cortante calamardo", "rosa", 1*precioDolar);
const pieza5 = new piezas (5, "cortante ", "amarillo", 1*precioDolar);
const pieza6 = new piezas (6, "cortante bob esponja", "amarillo", 1*precioDolar);

let stock = []

if (localStorage.getItem("stock")) {
    stock = JSON.parse(localStorage.getItem("stock"))
}else{
    stock.push(pieza1,pieza2,pieza3,pieza4,pieza5,pieza6)
    localStorage.setItem("stock", JSON.stringify(stock))
}