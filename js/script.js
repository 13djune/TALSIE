// MENU
function openMenu() {
    document.getElementById("menu").lastElementChild.style.left = "0%";
}

function closeMenu() {
    document.getElementById("menu").lastElementChild.style.left = "-110%";
}

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show-menu');
}

function ClosePopUp(){
    var popUp = document.getElementById("popUp");
    popUp.style.display = "none";
}

// FIN MENU

document.getElementById("botonCarrito").addEventListener("click", function () {
    var listaCarrito = document.getElementById("listaCarrito");
    var estadolistacarrito = listaCarrito.classList.contains("cerrado");

    if (estadolistacarrito) {
        listaCarrito.style.right = "0";
    } else {
        listaCarrito.style.right = "-110%";
    }

    listaCarrito.classList.toggle("cerrado");
});

function closeListaCarrito() {
    document.getElementById("listaCarrito").style.right = "-110%";
}

function agregarProducto(nombreProducto, imagenProducto, precioProducto) {
    var listaCompra = document.getElementById('producto_carrito');

    var nuevoProductoCarrito = document.createElement('div');
    nuevoProductoCarrito.classList.add('producto_carrito');

    var x = 1; // Definir x aquí para que no haya conflictos con su definición previa

    nuevoProductoCarrito.innerHTML = `
      <div class="foto_productoCarrito">
          <img id="foto_productoC" src="${imagenProducto}" alt="${nombreProducto}">
      </div>
      <div class="datos_productoCarrito">
          <p id="nombre_productoC">${nombreProducto}</p>
          <div>
              <p>${precioProducto}</p>
              <div class="cantidad_producto">
                  <button onclick="realizarOperacion('-', ${x}, this)">-</button>
                  <p id="resultado_${x}">${x}</p> 
                  <button onclick="realizarOperacion('+', ${x}, this)">+</button>
              </div>
          </div>
      </div>
      <button onclick="eliminarProducto(this)"><i class="fa-regular fa-trash-can"></i></button>
    `;

    listaCompra.appendChild(nuevoProductoCarrito);
}

function realizarOperacion(operador, x, elemento) {
    var cantidadElemento = elemento.closest('.producto_carrito').querySelector(`#resultado_${x}`);

    if (operador === '+') {
        x = Math.min(10, x + 1);
    } else if (operador === '-') {
        x = Math.max(1, x - 1);
    }

    cantidadElemento.textContent = x;
}

function eliminarProducto(elemento) {
    var listaCompra = document.getElementById('producto_carrito');
    var productoCarrito = elemento.closest('.producto_carrito');
    listaCompra.removeChild(productoCarrito);
}

//FAVORITOS


function cerrarFavart1() {
    document.getElementById('favart1').style.display = 'none';
}

function cerrarFavart2() {
    document.getElementById('favart2').style.display = 'none';
}

function cerrarFavart3() {
    document.getElementById('favart3').style.display = 'none';
}

function cerrarFavart4() {
    document.getElementById('favart4').style.display = 'none';
}

// function restarCantidad() {
//     var cantidadElemento = document.getElementById('canProducto');
//     var canProducto = parseInt(cantidadElemento.innerText);

//     // Resta 1 a la cantidad
//     canProducto = Math.max(1, canProducto - 1);

//     // Actualiza el contenido del elemento h2 con la nueva cantidad
//     cantidadElemento.innerText = canProducto;
// }

// // Suma 1 a la cantidad y actualiza el contenido
// function sumarCantidad() {
//     var cantidadElemento = document.getElementById('canProducto');
//     var canProducto = parseInt(cantidadElemento.innerText);

//     // Suma 1 a la cantidad
//     canProducto = canProducto + 1;

//     // Actualiza el contenido del elemento h2 con la nueva cantidad
//     cantidadElemento.innerText = canProducto;
// }


var canProducto1 = 1;
var canProducto2 = 1;
var canProducto3 = 1;
var canProducto4 = 1;

function restarCantidad(id) {
    var canProducto = obtenerCantidadProducto(id);
    canProducto = Math.max(1, canProducto - 1);
    actualizarCantidad(id, canProducto);
}

function sumarCantidad(id) {
    var canProducto = obtenerCantidadProducto(id);
    canProducto = Math.min(10, canProducto + 1);
    actualizarCantidad(id, canProducto);
}

function actualizarCantidad(id, cantidad) {
    document.getElementById('canProducto' + obtenerNumeroFavart(id)).innerText = cantidad;
}

function obtenerCantidadProducto(id) {
    return parseInt(document.getElementById('canProducto' + obtenerNumeroFavart(id)).innerText);
}

function cerrarFavart(id) {
    document.getElementById('favart' + obtenerNumeroFavart(id)).style.display = 'none';
}

function obtenerNumeroFavart(id) {
    // Extraer el número del final del ID (por ejemplo, "favart2" devuelve "2")
    return id.replace('favart', '');
}

