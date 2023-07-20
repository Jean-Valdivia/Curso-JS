alert ("Welcome to la calculadora costos para impresion 3D de Jean");
let precioDolar = prompt("ingrese el precio del dolar al dia de la fecha");
let precioFilamento = 7*precioDolar;
let precioHora = 0.2*precioDolar;
let precioEnvio = 0.5*precioDolar;
let piezaFilamento = 0;
let piezaTiempo = 0;
let envio = false;
let seguir = false;

class colores{
    constructor(id, color, precio){
        this.id = id;
        this.color = color;
        this.precio = precio;
    }
}

class consumoColores{
    constructor(){
        this.coloresDisponibles = [
            new colores(1, "azul", 6.8*precioDolar),
            new colores(2, "rojo", 7.2*precioDolar),
            new colores(3, "blanco", 6.7*precioDolar),
            new colores(4, "negro", 6.9*precioDolar),
            new colores(5, "amarillo", 7*precioDolar),
            new colores(6, "rosa", 7.1*precioDolar),
        ]
        this.items =[];
        }

    buscarColor(color){
        return this.coloresDisponibles.find((colores) =>
        colores.color.toLoweCase() === color.toLoweCase()
        )
    }

    CostoPieza(colores, cantidad){
        this.items.push({
            colores: colores.color,
            cantidad: cantidad,
            subtotal: colores.consumo * cantidad,
        })
    }

    confirmarCarrito() {
        while (true) {
        let seleccion = prompt(
            "Ingrese el color de la pieza a fabricar: (Azul, Blanco, Negro, Rosa, Amarillo, Rojo)"
        );
    
        let producto = this.buscarColor(seleccion);
    
        if (producto) {
            let cantidad = parseInt(prompt("Ingrese la cantidad de filamento a consumir:"));
            this.agregarItem(producto, cantidad);
        } else {
            alert("El color seleccionado no existe. Por favor, vuelva a intentarlo.");
        }

        if (!confirm("¿Desea agregar otro producto al carrito?")) {
            break;
            }
        }
    }

    calcularTotal(){
        console.log("Consumo de filamentos")
        this.items.forEach((item) => {
            console.log(`- ${item.cantidad} ${item.producto}: ${item.subtotal}`);
        });
    }

    let total = this.items.reduce((sum, item) => sum + item.subtotal, 0);
    console.log(`Total de costo de filamentos: ${total}`);
}

vaciarCarrito() {
    this.items = [];
    console.log("El carrito ha sido vaciado.");
}

if (carrito.items.length > 0) {
    if (confirm("¿Desea vaciar el carrito?")) {
    carrito.vaciarCarrito();
    }
}

carrito.calcularTotal();

console.log ("Precios de base en AR$");
console.log ("Precio de Filamento x kg = ",precioFilamento);
console.log ("Precio de trabajo x hr = ",precioHora);
console.log ("Costo de envio = ",precioEnvio);

function calculadora1() {
    let resultado1=(piezaFilamento*(precioFilamento/1000))+(precioHora*piezaTiempo);
    alert("El precio (AR$) de la pieza es: "+resultado1)
}
function calculadora2() {
    let resultado2 =((piezaFilamento*(precioFilamento/1000))+(precioHora*piezaTiempo)+precioEnvio);
    alert("El precio (AR$) de la pieza con envio es: "+resultado2)
}

seguir = confirm("Desea calcular un trabajo?");
if (seguir) {
    do {
        piezaFilamento=prompt("Ingrese el consumo de filamento de la pieza en gramos");
        piezaTiempo=prompt("Ingrese el tiempo de trabajo para la pieza en horas");
        envio=confirm("Se debe enviar?");
        if (envio) {
            calculadora2()
        } else {
            calculadora1()
        }
        seguir=confirm("desea realizar un nuevo calculo de costo de pieza?")
    } while (
        seguir
    )
    document.write("Gracias por usar mi calculadora");
} else {
    document.write ("Hoy no se trabaja")
}

