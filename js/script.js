// Datos curiosos sobre Laurie Anderson (declarar datos del array)
let datos = [

    {
        texto: "Laurie Anderson es una artista multimedia conocida por combinar música, tecnología y performance.",
        imagen: "img/anderson-1.jpg"
    },

    {
        texto: "Su obra 'O Superman' alcanzó gran reconocimiento internacional en 1981.",
        imagen: "img/anderson-5.png"
    },

    {
        texto: "Anderson creó instrumentos electrónicos propios para explorar nuevas formas de sonido.",
        imagen: "img/anderson-8.png"
    },

    {
        texto: "Fue una de las artistas pioneras en unir tecnología y arte contemporáneo.",
        imagen: "img/anderson-9.png"
    }

];


// Seleccionar elementos (declarar variables)

let boton = document.querySelector("#nuevoDato");

let texto = document.querySelector("#dato");

let imagen = document.querySelector("#andersonimagen");


// Evento del botón. Al presionarlo, se dan datos aleatorios (suscripcion al evento)

boton.addEventListener("click", function(){

  let numero = Math.floor(Math.random() * datos.length); // (declaro num)

let datoActual = datos[numero]; //(actualizo el dato con el resultado)

texto.textContent = datoActual.texto; //(actualiza accediendo al id)

imagen.src = datoActual.imagen;
});