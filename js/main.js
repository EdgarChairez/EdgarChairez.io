
const app = document.getElementById('portafolio');

const  typewriter = new Typewriter(app, {
    loop: true,
    delay:100
});

// var ancho = window.innerWidth;
var ancho = outerWidth;

function validarTamanoPantalla() {
    var mensaje = "";

    if (ancho < 1000) {
        mensaje = "...";
    } else {
        mensaje = "Escribiendo...";
    }

    typewriter
    .typeString(mensaje)
    .pauseFor(500)
    .start()
};

// Llamada a la función cuando se carga la página
window.onload = function() {
  validarTamanoPantalla();

  new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.dots',
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__siguiente'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        // screens greater than >= 1000px
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        // screens greater than >= 1200px
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1
        }
      }
    ]
  });
};

git = document.getElementById('git');
function btnGit() {
  location.href=window.open("https://github.com/EdgarChairez");
}

lin = document.getElementById('btnIN');
function btnIN() {
  location.href=window.open("https://www.linkedin.com/in/edgarandreschairezsanchez/");
}

var color;
var color1;
function modoClaro(){
  // Claro
  color = "#ffa200";
  color1 = "#000000";
  modo();
}

function modoOscuro(){
  // Oscuro
  color = "#373b3e";
  color1 = "#ffa200";
  modo();
}

function modo(){
  document.querySelector("#html").style.backgroundColor = color;
  document.querySelector("#fondoAcercaDeMi").style.backgroundColor = color;
  document.querySelector("#fondoProtafolio").style.backgroundColor = color;
  document.querySelector("#fondoHabilidades").style.backgroundColor = color;
  document.querySelector("#fondoExperiencia").style.backgroundColor = color;
  document.querySelector("#carPortafolio").style.backgroundColor = color;
  document.querySelector("#footer").style.backgroundColor = color;
  document.querySelector("#body").style.backgroundColor = color;

  //document.querySelector(".texto td").style.color = color1;
}