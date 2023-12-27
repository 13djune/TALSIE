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

});
    




        



