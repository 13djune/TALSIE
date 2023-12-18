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


    




        



