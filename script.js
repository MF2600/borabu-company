const hamburger=document.getElementById("hamburger-menu");
const navlinks=document.querySelector(".nav-links");
hamburger.addEventListener("click",()=>{hamburger.classList.toggle("active");navlinks.classList.toggle("active");})
//GSAP
document.addEventListener("DOMContentLoaded",() => {gsap.registerPlugin(SplitText);
    
    //Header Container
    gsap.from(".header-container",{
        duration: 1.5,
        y: -150,
        opacity: 0,
    })
})
const slides = document.querySelectorAll(".hero-image .slide");

let currentSlide = 0;

setInterval(() => {
    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
}, 4000);