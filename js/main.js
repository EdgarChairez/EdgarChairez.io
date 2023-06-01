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
};
  
// Llamada a la función cuando se redimensiona la ventana
// window.onresize = function() {
//     validarTamanoPantalla();
// };