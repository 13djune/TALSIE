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

        // HAMBURGUER
        $(".hamburger").click(function() {
            $(this).toggleClass('close');
          });


    
///////////POPUP/////////
function ClosePopUp(){
    var popUp = document.getElementById("popUp");
    popUp.style.display = "none";
}





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

        // HAMBURGUER
        $(".hamburger").click(function() {
            $(this).toggleClass('close');
          });


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



    




        



