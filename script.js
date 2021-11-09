$(document).ready(function() {


  // Votación


  

  $('.acordion').click(function() { 

    if(this.id == 'descargables') {
      cargar_descargable(prods)
      return
    }
    // prods = document.getElementById("prods")      
    filtrar(data, this.id, prods)
    $('.acordion').removeClass("active")
    $(this).addClass("active")
  })
})

var c_lewis = document.getElementById("card-lewis")
var c_max = document.getElementById("card-max")
window.onscroll = function () {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 400
  ) {
    document.getElementById("barra").style.display = "flex";

    document.getElementById("cuerpo").className = "col-11";
  } else {
    document.getElementById("barra").style.display = "none";
    document.getElementById("cuerpo").className = "col-12";
  }
};


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

