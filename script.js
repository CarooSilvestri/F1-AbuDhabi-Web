$( document ).ready(function() {
  
  $('#hamburger-icon').click(function() {
    $('nav').toggle();
     hamburger.toggleClass('active');
     return false;
  });

  $(".item-menu").click(function(){
    $('nav').toggle();
     hamburger.toggleClass('active');
     return false;
  })

  // ANIMACION CARDS
  $("#card-lewis").click(function() {

    $(this).animate({"height": "100%"}, "slow", "swing")
    $("#card-max").addClass("d-sm-none") 
    crear_res_poll("56%", "Lewis", "318.5")
  })

  $("#card-max").click(function() {

    $(this).animate({"height": '100%'},"slow","swing")
    $("#card-lewis").addClass("d-sm-none") 
    crear_res_poll("44%", "Max", "332,5")    
  })

  function crear_res_poll(cantidad, corredor, puntos_corredor) {

    document.getElementById("voto-hecho").innerHTML = ""

    var elect = document.createElement("h4")
    elect.innerHTML = "Tu elección: <b>" + corredor + "</b>"

    var stats = document.createElement("h1")
    stats.setAttribute("class", "num-vot")
    stats.innerHTML= cantidad

    var text = document.createElement("h4")
    text.innerHTML= "de las personas votaron por " + corredor 

    var puntos = document.createElement("h1")
    puntos.innerHTML= "Puntos del campeonato: " +  puntos_corredor + " pts."

    $("#voto-hecho").append(elect, stats, text, puntos)
    $("#voto-hecho").addClass("d-block")
  }


  $('.C-navigation__dot').click(function() { 

    $('.C-navigation__dot').removeClass("active")


    $(this).addClass("active")

    var a = document.querySelectorAll('.C-slide')

    $(".C-slide").removeClass("d-flex")
    a[$(this).data('slideindex')].classList.add("d-flex")


  });
});


// Cuenta regresiva
var countDownDate = new Date("Dec 12, 2021 10:00:00").getTime();
var intervalo = setInterval(function () {
  // Fecha de hoy
  var fecha_act = new Date().getTime();

  // Diferencia de tiempo
  var dif_tiempo = countDownDate - fecha_act;

  // Algunos caluclos mugrosos
  var dias = Math.floor(dif_tiempo / (1000 * 60 * 60 * 24));
  var horas = Math.floor(
    (dif_tiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutos = Math.floor((dif_tiempo % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((dif_tiempo % (1000 * 60)) / 1000);

  // Actualizo los números que se ven en la web
  act_texto(dias, horas, minutos, segundos);
}, 1000);

function act_texto(dias, horas, minutos, segundos) {
  let numeros = document.getElementsByClassName("typo");

  numeros[0].innerHTML = dias;
  numeros[1].innerHTML = horas;
  numeros[2].innerHTML = minutos;
  numeros[3].innerHTML = segundos;
}



// Caroussel
window.addEventListener(`load`, function () {
  new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".carousel__indicadores",
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: "2",
          slidesToScroll: "2",
          itemWidth: 150,
          duration: 0.25,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.25,
        },
      },
    ],
  });
});


// Caroussel de tikets
window.addEventListener(`load`, function () {
  new Glider(document.querySelector(".carousel__Tiketselementos"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".carousel__indicador",
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: "2",
          slidesToScroll: "2",
          itemWidth: 150,
          duration: 0.25,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.25,
        },
      },
    ],
  });
});

