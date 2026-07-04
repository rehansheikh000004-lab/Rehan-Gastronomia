/* ==========================================
   REHAN GASTRONOMIA
   app.js
========================================== */

// LOADER
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 1800);
});

// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("show");

    });

}

// STICKY HEADER

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 60) {

        header.style.background = "rgba(0,0,0,.92)";

    } else {

        header.style.background = "rgba(10,10,10,.55)";

    }

});

// HERO IMAGE FLOAT

const heroImage = document.querySelector(".hero-right img");

if (heroImage) {

    let direction = 1;

    setInterval(() => {

        heroImage.style.transform =
            `translateY(${direction * 10}px)`;

        direction *= -1;

    }, 2500);

}

// SCROLL REVEAL

const revealElements = document.querySelectorAll(

".hero-left,.hero-right,.signature,.chef"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

revealElements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(60px)";
el.style.transition="1s";

observer.observe(el);

});

// TITLE ANIMATION

let dots = 0;

setInterval(()=>{

dots++;

if(dots>3) dots=0;

document.title="REHAN GASTRONOMIA"+".".repeat(dots);

},1000);
