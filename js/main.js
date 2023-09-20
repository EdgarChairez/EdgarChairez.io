
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
                // screens greater than >= 1000px
                breakpoint: 1000,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },{
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


function funcion(aux){
  switch (aux) {
  case 'git':
    swal('GIT', 'https://github.com/EdgarChairez', '../img/EC (1).png');
    break;
    
  case 'mail':
    swal('CORREO', 'chairezandres0@gmail.com', '../img/EC (1).png');
    break;

  case 'red':
    swal('PAGINA', 'https://edgarchairez.github.io/EdgarChairez.io/', '../img/EC (1).png');
    break;
      
  case 'cel':
    swal('CELULAR', '(+52) 667-401-8894', '../img/EC (1).png');
    break;
    
  case 'in':
    swal('LINKEDIN', 'https://www.linkedin.com/in/edgar-andr%C3%A9s-chairez-sanchez-a784961b8', '../img/EC (1).png');
    break;
  
  default:
    break;
  }
}


