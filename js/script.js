alert ("Welcome to la calculadora costos de filamentos para impresion 3D de Jean");
let precioDolar = prompt("ingrese el precio del dolar al dia de la fecha");
if (!(precioDolar>0)) {
    alert ("Eso no es un precio de Dolar")
    brake
}

class colores{
    constructor(id, nombreColor, precio){
        this.id = id;
        this.nombreColor = nombreColor;
        this.precio = precio;
    }
}

class Carrito{
    constructor(){
        this.coloresDisponibles = [
            new colores(1, "azul", 6.8*precioDolar/1000),
            new colores(2, "rojo", 7.2*precioDolar/1000),
            new colores(3, "blanco", 6.7*precioDolar/1000),
            new colores(4, "negro", 6.9*precioDolar/1000),
            new colores(5, "amarillo", 7*precioDolar/1000),
            new colores(6, "rosa", 7.1*precioDolar/1000),
        ]
        this.items =[];
        }

    buscarColor(nombreColor){
        return this.coloresDisponibles.find((color) => 
        color.nombreColor.toLowerCase() === nombreColor.toLowerCase()
        )
    }

    CostoPieza(color, cantidad){
        this.items.push({
            colores: color.nombreColor,
            cantidad: cantidad,
            subtotal: color.precio * cantidad,
        })
    }

    confirmarCarrito() {
        while (true) {
        let seleccion = prompt(
            "Ingrese el color de la pieza a fabricar: (Azul, Blanco, Negro, Rosa, Amarillo, Rojo)"
        );
    
        let color = this.buscarColor(seleccion);
    
        if (color) {
            let cantidad = parseInt(prompt("Ingrese la cantidad de filamento a consumir (g):"));
            this.CostoPieza(color, cantidad);
        } else {
            alert("El color seleccionado no existe. Por favor, vuelva a intentarlo.");
        }

        if (!confirm("¿Desea agregar otro producto al carrito?")) {
            break;
            }
        }
    }

    calcularTotal(){
        console.log("Consumo de filamentos");
        this.items.forEach((item) => {
            console.log(`- ${item.cantidad}g ${item.colores}: ${item.subtotal} AR$`);
        });

    let total = this.items.reduce((sum, item) => sum + item.subtotal, 0);
    console.log(`Total de costo de filamentos: ${total} AR$`);
    }

    vaciarCarrito() {
        this.items = [];
        console.log("El carrito ha sido vaciado.");
    }
}

const carrito = new Carrito();
carrito.confirmarCarrito();

if (carrito.items.length > 0) {
    if (confirm("¿Desea vaciar el carrito?")) {
    carrito.vaciarCarrito();
    }
}

carrito.calcularTotal();