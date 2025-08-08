window.onload = function () {
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("from");
let displayValTwo = document.getElementById("to");
let minGap = 0;
let sliderTrack = document.querySelector(".filters__slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.value = sliderOne.value;
    fillColor();
}
function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.value = sliderTwo.value;
    fillColor();
}
function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #00CA74 ${percent1}% , #00CA74 ${percent2}%, #dadae5 ${percent2}%)`;
}

displayValOne.addEventListener('change', () => {
    if (displayValOne.value < 0) {
        displayValOne.value = 0
    }

    if (displayValOne.value > displayValTwo.value) {
        displayValOne.value = displayValTwo.value - 1000
    }

    sliderOne.value = displayValOne.value
    fillColor();
});

displayValTwo.addEventListener('change', () => {
    if (displayValTwo.value < displayValOne.value) {
        displayValTwo.value = displayValOne.value + 1000
    }

    if (displayValTwo.value > displayValTwo.max) {
        displayValTwo.value = displayValTwo.max
    }

    sliderTwo.value = displayValTwo.value
    fillColor();
});