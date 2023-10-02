const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Variables
let position = 0;
// querySelector pour retourner le 1er élement qui correspond à un selecteur css.
const leftEl = document.querySelector(".arrow_left");
const rightEl = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const img = document.querySelector(".banner-img");
const txt = document.querySelector("p");


// Créez et ajoutez les éléments .dot enfants en fonction du tableau slides
for (let index = 0; index < slides.length; index++) {
    console.log('index : ', index)
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);

    //Si index est égal à 0, on ajoute la classe
    if (index === 0) {
        dot.classList.add("dot_selected");
    }
}



// Event Listenner pour les boutons gauche et droite (=>) a la place du mot function
leftEl.addEventListener("click", () => {
    position--;
    if (position === -1) {
        position = slides.length - 1;
    }
    img.src = `./slideshow/${slides[position].image}`;
    txt.innerHTML = slides[position].tagLine;
    dynamicBullets(i);
});

rightEl.addEventListener("click", () => {
    position++;
    if (position === slides.length) {
        position = 0;
    }
    img.src = `./slideshow/${slides[position].image}`;
    txt.innerHTML = slides[position].tagLine;
    dynamicBullets(position);
});

// Fonction pour mettre les bullets dynamiquement blanc/gris
function dynamicBullets(count) {
    const dotsEl = document.querySelectorAll(".dot")
    dotsEl.forEach((dot, index) => {
        if (index === count) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}


