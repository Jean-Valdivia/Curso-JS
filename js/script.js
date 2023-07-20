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
    constructor(id, color, stock){
        this.id = id;
        this.color = color;
        this.stock = stock;
    }
}

class stockColores{
    constructor(){
        this.coloresDisponibles = [
            new colores(1, "azul", 1000),
            new colores(2, "rojo", 1000),
            new colores(3, "blanco", 1000),
            new colores(4, "negro", 1000),
            new colores(5, "amarillo", 1000),
            new colores(6, "rosa", 1000),
        ]
        this.items =[];
        }
    buscarColor(color){
        return this.coloresDisponibles.find((colores) => colores.color.toLoweCase() === color.toLoweCase()
        )
    }
    descontarStock(colores, cantidad){
        this.items.push({
            colores: colores.color,
            cantidad: cantidad,
            subtotal: colores.stock - cantidad,
        })
    }
}

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

