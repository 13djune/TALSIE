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


    $("#lyra1").click(function(){
        $(".cambio2").attr("src","img/LYRa/lyra1.png")
    });


    // ALEXIA ALEXIA ALEXIA

    $("#alexia1").click(function(){
        $(".cambio3").attr("src","img/ALEXIA/alexia11.png")
    });

    $("#alexia2").click(function(){
        $(".cambio3").attr("src","")
    });

    $("#alexia3").click(function(){
        $(".cambio3").attr("src","")
    });

    $("#alexia4").click(function(){
        $(".cambio3").attr("src","")
    });

    $("#alexia5").click(function(){
        $(".cambio3").attr("src","")
    });

    $("#alexia6").click(function(){
        $(".cambio3").attr("src","")
    });

});
    




        



