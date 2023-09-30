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
let i = 0;
const leftEl = document.querySelector(".arrow_left");
const rightEl = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const img = document.querySelector(".banner-img");
const txt = document.querySelector("p");


// Créez et ajoutez les éléments .dot enfants en fonction du tableau slides
for (let index = 0; index < slides.length; index++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
}

// Sélectionner à nouveau les éléments (.dot) après les avoirs ajoutés
const dotsEl = dotsContainer.querySelectorAll(".dot");

//Ajouter la classe dot_selected à la première bullet (index 0)
dotsEl[0].classList.add("dot_selected");

// Écouteurs d'événements pour les boutons gauche et droite (=> a la place du mot function)
leftEl.addEventListener("click", () => {
    i--;
    if (i === -1) {
        i = slides.length - 1;
    }
    img.src = slides[i].image;
    txt.innerHTML = slides[i].tagLine;
    dynamicBullets(i);
});

rightEl.addEventListener("click", () => {
    i++;
    if (i === slides.length) {
        i = 0;
    }
    img.src = slides[i].image;
    txt.innerHTML = slides[i].tagLine;
    dynamicBullets(i);
});

// Fonction pour mettre les bullets dynamiquement blanc/gris
function dynamicBullets(count) {
    dotsEl.forEach((dot, index) => {
        if (index === count) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}


