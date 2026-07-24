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
