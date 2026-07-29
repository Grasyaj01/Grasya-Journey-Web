/* ===================================
   GRASYA JOURNEY
   script.js
=================================== */

// =============================
// FAQ Accordion
// =============================

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {

    accordion.addEventListener("click", function () {

        this.classList.toggle("active");

        const panel = this.nextElementSibling;

        if (panel.style.display === "block") {

            panel.style.display = "none";

        } else {

            panel.style.display = "block";

        }

    });

});


// =============================
// Reveal Animation on Scroll
// =============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach((section)=>{

    section.classList.add("hidden");

    observer.observe(section);

});


// =============================
// Navbar Shadow
// =============================

window.addEventListener("scroll", ()=>{

    const nav = document.querySelector("nav");

    if(window.scrollY > 20){

        nav.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

    }

    else{

        nav.style.boxShadow="0 2px 15px rgba(0,0,0,.05)";

    }

});
