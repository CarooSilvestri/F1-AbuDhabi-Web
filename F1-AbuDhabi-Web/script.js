window.onscroll = function(){
    
if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    
    document.getElementById("barra").style.display = "block";
    document.getElementById("cuerpo").className ="col-11"
    }

    else{
        document.getElementById("barra").style.display = "none";
        document.getElementById("cuerpo").className ="col-12"
    }
}


var countDownDate = new Date("Dec 12, 2021 10:00:00").getTime();
var intervalo = setInterval(function() {

    // Fecha de hoy
    var fecha_act = new Date().getTime();
    
    // Diferencia de tiempo
    var dif_tiempo = countDownDate - fecha_act;

    // Algunos caluclos mugrosos
    var dias = Math.floor(dif_tiempo / (1000 * 60 * 60 * 24));
    var horas = Math.floor((dif_tiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((dif_tiempo % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((dif_tiempo % (1000 * 60)) / 1000);

    // Actualizo los números que se ven en la web
    act_texto(dias, horas, minutos, segundos)

}, 1000);

function act_texto(dias, horas, minutos, segundos) {

    let numeros = document.getElementsByClassName("typo")
    
    numeros[0].innerHTML = dias
    numeros[1].innerHTML = horas
    numeros[2].innerHTML = minutos
    numeros[3].innerHTML = segundos
}
