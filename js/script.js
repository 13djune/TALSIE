function openMenu() {
    document.getElementById("menu").lastElementChild.style.left = "0%";
}

function closeMenu() {
    document.getElementById("menu").lastElementChild.style.left = "-110%";
}

function menu() {
    "use strict";
    if (document.getElementById("menu").lastElementChild.style.left === "0%") {
        closeMenu();
    } else {
        openMenu();
    }
}

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show-menu');
}

function closeMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.remove('show-menu');
}






          
$(document).ready(function(){

    $("#elene1").click(function(){
        $(".cambio1").attr("src","img/ELENE/abalorios.png")
    });

    $("#elene2").click(function(){
        $(".cambio1").attr("src","img/ELENE/collarcorazon.png")
    });

    $("#elene3").click(function(){
        $(".cambio1").attr("src","img/ELENE/collarhada.png")
    });

    $("#elene4").click(function(){
        $(".cambio1").attr("src","img/ELENE/collarlazo.png")
    });

    $("#elene5").click(function(){
        $(".cambio1").attr("src","img/ELENE/pendientes2.png")
    });

    $("#elene6").click(function(){
        $(".cambio1").attr("src","img/ELENE/pendientitos.png")
    });


    // LYRAAAAA LYRA LYRA

    $("#lyra1").click(function(){
        $(".cambio2").attr("src","img/LYRa/lyra6.png")
    });

    $("#lyra2").click(function(){
        $(".cambio2").attr("src","img/LYRa/lyra5.png")
    });

    $("#lyra3").click(function(){
        $(".cambio2").attr("src","img/LYRa/lyra4.png")
    });

    $("#lyra4").click(function(){
        $(".cambio2").attr("src","img/LYRa/lyra2.png")
    });

    $("#lyra5").click(function(){
        $(".cambio2").attr("src","img/LYRa/lyra3.png")
    });

    $("#lyra6").click(function(){
        $(".cambio2").attr("src","img/LYRa/lyra1.png")
    });


    // ALEXIA ALEXIA ALEXIA

    $("#alexia1").click(function(){
        $(".cambio3").attr("src","img/ALEXIA/alexia3.png")
    });

    $("#alexia2").click(function(){
        $(".cambio3").attr("src","img/ALEXIA/alexia4.png")
    });

    $("#alexia3").click(function(){
        $(".cambio3").attr("src","img/ALEXIA/alexia5.png")
    });

    $("#alexia4").click(function(){
        $(".cambio3").attr("src","img/ALEXIA/alexia6.png")
    });

    $("#alexia5").click(function(){
        $(".cambio3").attr("src","img/ALEXIA/alexia2.png")
    });

    $("#alexia6").click(function(){
        $(".cambio3").attr("src","img/ALEXIA/alexia11.png")
    });



    $(".cambio1").click(function(){
        window.location.href = "https://elene.cargo.site/";
    });


});
    
///////////POPUP/////////
function ClosePopUp(){
    var popUp = document.getElementById("popUp");
    popUp.style.display = "none";
}





document.getElementById("botonCarrito").addEventListener("click", function() {
    var listaCarrito = document.getElementById("listaCarrito");
    var estadolistacarrito = listaCarrito.classList.contains("cerrado");

    if (estadolistacarrito) {
        
        listaCarrito.style.right = "0";
    } else {
        
        listaCarrito.style.right = "-110%";
    }

    
    listaCarrito.classList.toggle("cerrado");
});




// COLECCIÓN ELENE

function closeListaCarrito() {
    document.getElementById("listaCarrito").style.right = "-110%";
}

function closeListaCarrito() {
    document.getElementById("listaCarrito").style.right = "-110%";
}


function agregarProducto(nombreProducto, imagenProducto, precioProducto) {
    
    var listaCompra = document.getElementById('producto_carrito');

    var nuevoProductoCarrito = document.createElement('div');
    nuevoProductoCarrito.classList.add('producto_carrito');
  
    
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

var x = 1;
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
    // Eliminar el producto del carrito al hacer clic en el botón de eliminar
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
        






/*POP UPS apartado de CUENTA*/

/* PEDIDOS */

function mostrarVentana() {
    var ventana = document.getElementById('ventana');
    ventana.style.display = 'block';
}

function cerrarVentana() {
    var ventana = document.getElementById('ventana');
    ventana.style.display = 'none';
}

/* PUNTOS ACUMULADOS */


function mostrarMispuntos() {
    var ventana = document.getElementById('puntuacion');
    ventana.style.display = 'block';
}

function cerrarMispuntos() {
    var ventana = document.getElementById('puntuacion');
    ventana.style.display = 'none';
}

/* MIS DATOS */


function mostrarMisdatos() {
    var ventana = document.getElementById('informate');
    ventana.style.display = 'block';
}

function cerrarMisdatos() {
    var ventana = document.getElementById('informate');
    ventana.style.display = 'none';
}

