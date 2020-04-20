const slide = document.querySelector(".slider");
const image = document.querySelectorAll(".slider img");

//button
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//counter
let counter = 1;
const size = image[0].clientWidth;

slide.style.transform = "translateX(" + (-size * counter) + "px)";

//event handler
nextBtn.addEventListener("click", () => {
    if (counter >= image.length - 1) return;
    slide.style.transition = "transform 0.7s ease-in-out";
    counter++;
    slide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    slide.style.transition = "transform 0.7s ease-in-out";
    counter--;
    slide.style.transform = "translateX(" + (-size * counter) + "px)";
});

slide.addEventListener('transitionend',()=> {
    if (image[counter].id == "lastClone") {
    slide.style.transition = "none";
    counter = image.length - 2;
    slide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
    if (image[counter].id == "firstClone") {
    slide.style.transition = "none";
    counter = image.length - counter;
    slide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});