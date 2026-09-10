// Obras de Laurie Anderson (declaro el array)

let obras = [

    {
        titulo: "O Superman",
        imagen: "img/obra1.jpg",
        descripcion: "Una de sus obras más reconocidas. Combina voz, música electrónica y narrativa para explorar la comunicación y la tecnología."
    },

    {
        titulo: "United States Live",
        imagen: "img/obra2.jpg",
        descripcion: "Una performance multimedia donde Laurie Anderson mezcla relatos, música, imágenes y reflexiones sobre la cultura estadounidense."
    },

    {
        titulo: "Big Science",
        imagen: "img/obra3.jpg",
        descripcion: "Álbum experimental que combina sonidos electrónicos, poesía y exploración de nuevas formas musicales."
    },

    {
        titulo: "The End of the Moon",
        imagen: "img/obra4.jpg",
        descripcion: "Performance donde reflexiona sobre el espacio, la memoria y la relación entre humanidad y tecnología."
    },
    
    {
        titulo: "Home of the Brave",
        imagen: "img/obra5.jpg",
        descripcion: "Película y performance experimental que combina música, imágenes y relatos personales en una experiencia audiovisual."
    },

    {
        titulo: "Mister Heartbreak",
        imagen: "img/obra6.png",
        descripcion: "Álbum donde Anderson continúa explorando la relación entre música electrónica, voz y narrativa."
    },

    {
        titulo: "Habeas Corpus",
        imagen: "img/obra7.png",
        descripcion: "Instalación multimedia que combina tecnología, memoria y testimonios para reflexionar sobre la identidad y la historia."
    },

    {
        titulo: "Chalkroom",
        imagen: "img/obra8.png",
        descripcion: "Experiencia de realidad virtual creada junto a Hsin-Chien Huang, donde el espectador explora un espacio construido con palabras e imágenes."
    }

];


// Seleccionar elementos (declaro los id)

let galeria = document.querySelector("#galeria");

let boton = document.querySelector("#btnDiseno");


// Crear galería (declaro la funcion)

function mostrarObras() {

    galeria.innerHTML = ""; //(vacía y evita que se duplique)

    obras.forEach(function(obra) { //(recorre el array)

        galeria.innerHTML += ` 
            <article class="obra">
                <img src="${obra.imagen}" alt="${obra.titulo}">
                <h3>${obra.titulo}</h3>
                <p>${obra.descripcion}</p>
            </article>
        `;
//(genera contenedor de bloque) (tarjeta article, clase obra) 
    });

}


// Mostrar al cargar

mostrarObras();


// Cambiar diseño

let diseñoAlternativo = false; //(declara variable booleana)


boton.addEventListener("click", function(){ //(declaro el evento)


    diseñoAlternativo = !diseñoAlternativo; //(true o false)


    if(diseñoAlternativo){

        galeria.classList.add("lista");

    }else{

        galeria.classList.remove("lista");

    }


});