let menuBtn = document.querySelector(".mobile-icon");
let header = document.querySelector(".header");

let toggleBtn = () => {
    header.classList.toggle("active");
}

menuBtn.addEventListener("click" , () => {
    toggleBtn();
})