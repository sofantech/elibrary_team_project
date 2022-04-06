//slider
const dots = document.querySelectorAll(".btn-slid-container button");
const images = document.querySelectorAll(".image-container img");
let i = 0; // current slide
let j = 13; // total
function next() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i + 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
    indicator(i + 1);
}

function prev() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
    indicator(i + 1);
}

function indicator(num) {
    dots.forEach(function(dot) {
        dot.style.backgroundColor = "gray";
    });
    document.querySelector(".btn-slid-container button:nth-child(" + num + ")").style.backgroundColor = "#f2f2f2";
}

function dot(index) {
    images.forEach(function(image) {
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}