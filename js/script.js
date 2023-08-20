let productosEnCarrito = []
let divProductos = document.getElementById("productos")
let btnGuardarPieza = document.getElementById("btnGuardarPieza")
let buscador = document.getElementById("buscador")
let btnVerCatalogo = document.getElementById("verCatalogo")
let btnOcultarCatalogo = document.getElementById("ocultarCatalogo")
let modalBody = document.getElementById("offcanvas-body")
let botonCarrito = document.getElementById("botonCarrito")
let coincidencia = document.getElementById("coincidencia")
let selectOrden = document.getElementById("selectOrden")
let precioTotal = document.getElementById("precioTotal")

if (localStorage.getItem("carrito")) {
    enCarrito = JSON.parse(localStorage.getItem("carrito"))
} else {
    localStorage.setItem("carrito", JSON.stringify(enCarrito))
}

function buscarProducto(buscado, array) {
    let busqueda = array.filter(
        (piezas) => piezas.nombre.toLowerCase().includes(buscado.toLowerCase()) ||
        piezas.color.toLowerCase().includes(buscado.toLowerCase())
    )

    if (busqueda.length == 0) {
        coincidencia.innerHTML = ""
        let nuevoDiv = document.createElement("div")
        nuevoDiv.innerHTML = '<p> No hay coincidencias </p>'
        coincidencia.appendChild(nuevoDiv)
    } else {
        coincidencia.innerHTML = ""
        mostrarCatalogo(busqueda)
    }
}

function ordenarMayorMenor(array) {
    let mayorMenor = [].concat(array)
    mayorMenor.sort((a, b) => (b.precio - a.precio))
    mostrarCatalogo(mayorMenor)
}

function ordenarMenorMayor(array) {
    let menorMayor = [].concat(array)
    menorMayor.sort((a, b) => (a.precio - b.precio))
    mostrarCatalogo(menorMayor)
}

function ordenarAlfabeticamente(array) {
    let alfabeticamente = [].concat(array)
    alfabeticamente.sort((a, b) => {
        return 0;
    })
    mostrarCatalogo(alfabeticamente)
}


function mostrarCatalogo(array) {
    divProductos.innerHTML = ""

    for (const pieza of array) {
        let nuevaPieza = document.createElement("div")
        nuevaPieza.classList.add("col-12", "col-md-6", "col-lg-4", "my-4")
        nuevaPieza.innerHTML = `<div id="${pieza.id}" class="card" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;"src="./assets/${pieza.imagen}" alt="${pieza.nombre} de ${pieza.color}">
        <div class="card-body">
            <h4 class="card-title">${pieza.nombre}</h4>
            <p>Color: ${pieza.color}</p>
            <p class="">Precio: ${pieza.precio}</p>
        <button id="agregarBtn${pieza.id}" class="btn btn-outline-success">Agregar al carrito</button>
        </div>
</div>`
        divProductos.appendChild(nuevaPieza)
        let btnAgregar = document.getElementById(`agregarBtn${pieza.id}`)
        btnAgregar.addEventListener("click", () => {
            agregarAlCarrito(pieza)
        })
    }
}

function agregarAlCarrito(pieza) {
    productosEnCarrito.push(pieza)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}



function cargarProductosCarrito(array) {
    modalBody.innerHTML = ""

    let precioTotal = 0;

    array.forEach(productoCarrito => {
        modalBody.innerHTML += `<div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
        <img class="card-img-top" height="300px" src="assets/${productoCarrito.imagen}" alt="${productoCarrito.nombre}">
        <div class="card-body">
            <h4 class="card-title">${productoCarrito.nombre}</h4>
            <p class="card-text">$${productoCarrito.precio}</p> 
            <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
        </div>    
        </div>`

        precioTotal += productoCarrito.precio;
    });

    array.forEach((productoCarrito, indice) => {
        document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", () => {
            let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
            cardProducto.remove()
            productosEnCarrito.splice(indice, 1)
            localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
        })
    });
    document.getElementById("precioTotal").textContent = `Precio Total: $${precioTotal}`;
}


function cargarPieza(array) {
    let inputNombre = document.getElementById("nombreInput")
    let inputColor = document.getElementById("colorInput")
    let inputPrecio = document.getElementById("precioInput")
    let inputImagen = document.getElementById("imagenInput")

    let piezaCreada = new piezas(array.length + 1, inputNombre.value, inputColor.value, parseInt(inputPrecio.value), inputImagen.value)
    array.push(piezaCreada)
    localStorage.setItem("stock", JSON.stringify(array))
    mostrarCatalogo(array)
    inputNombre.value = ""
    inputColor.value = ""
    inputPrecio.value = ""
    inputImagen.value = ""
}

btnGuardarPieza.addEventListener("click", () => {
    cargarPieza(stock)
})

buscador.addEventListener("input", () => {
    buscarProducto(buscador.value, stock)
})

botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(productosEnCarrito)
})

selectOrden.addEventListener("change", () => {
    if (selectOrden.value == 1) {
        ordenarMayorMenor(stock)
    }

    else if (selectOrden.value == 2) {
        ordenarMenorMayor(stock)
    }

    else if (selectOrden.value == 3) {
        ordenarAlfabeticamente(stock)
    }
    else {
        mostrarCatalogo(stock)
    }
})

mostrarCatalogo(stock)