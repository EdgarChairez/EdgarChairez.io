const app = document.getElementById('portafolio');

const  typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});

// var ancho = window.innerWidth;
var ancho = outerWidth;

function validarTamanoPantalla() {
    var mensaje = "";

    if (ancho < 1000) {
        mensaje = "Proximamente - Portafolio";
    } else {
        mensaje = "Proximamente - Portafolio de Proyectos";
    }

    typewriter
    .typeString(mensaje)
    .pauseFor(200)
    .start()
}

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
                // screens greater than >= 1024px
                breakpoint: 1000,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },{
              // screens greater than >= 1024px
              breakpoint: 1200,
              settings: {
                slidesToShow: 3.5,
                slidesToScroll: 1
              }
            }
          ]
    });
};