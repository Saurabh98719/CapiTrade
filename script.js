'use strict';

/**
 * add event on element
 */

const addEventOnElem = function(elem, type, callback){
    if(elem.length > 1 ) {
        for(let i = 0; i < elem.length; i++){
            elem[i].addEventListener(type, callback);
        }
    } else{
elem.addEventListener(type, callback);
    }
}

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarlinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
    const isOpen = navbar.classList.toggle("active");
    navToggler.classList.toggle("active", isOpen);
    document.body.classList.toggle("active", isOpen);
}

const closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
    document.body.classList.remove("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

/**
 * header active
 */

const header = document.querySelector("[data-header]");
const activeHeader = function () {
    if(window.scrollY > 300){
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

addEventOnElem(window,"scroll", activeHeader);

/**
 * toggle active on add to fav
 */

const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
   this.classList.toggle("active");
   const isActive = this.classList.contains("active");
   this.setAttribute("aria-pressed", String(isActive));
}

addEventOnElem(addToFavBtns, "click", toggleActive);

/**
 * scroll revreal effectx
 */
const sections = document.querySelectorAll("[data-section]");

const scrollreveal = function(){
    for (let i = 0; i < sections.length; i++){
        if(sections[1].getBoundingClientRect().top < window.innerHeight/1.5){
            sections[i].classList.add("active");
        }else{
            sections[i].classList.remove("active");
        }

    }
}
scrollreveal();
addEventOnElem(window,"scroll", scrollreveal);

navbarlinks.forEach((link) => {
    link.addEventListener("click", closeNavbar);
});

navbarlinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        link.style.color = 'hsl(222, 100%, 61%)';
    });

    link.addEventListener('mouseleave', () => {
        if (!link.classList.contains('active')) {
            link.style.color = '#ffffff';
        }
    });

    link.addEventListener('focus', () => {
        link.style.color = 'hsl(222, 100%, 61%)';
    });

    link.addEventListener('blur', () => {
        if (!link.classList.contains('active')) {
            link.style.color = '#ffffff';
        }
    });
});

const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const tabGroup = button.closest('.tab-nav');

        if (!tabGroup) return;

        tabGroup.querySelectorAll('.tab-btn').forEach((tab) => {
            tab.classList.remove('active');
        });

        button.classList.add('active');
    });
});