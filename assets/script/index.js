'use strict';


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuButton =
    document.querySelector('.mobile-toggle');

const mobileMenu =
    document.querySelector('.mobile-nav');

const menuIcon =
    document.querySelector('.mobile-toggle i');

const mobileLinks =
    document.querySelectorAll('.mobile-nav a');


menuButton.addEventListener('click', () => {


    const menuIsOpen =
        mobileMenu.classList.toggle('active');


    menuButton.setAttribute(
        'aria-expanded',
        menuIsOpen
    );


    if (menuIsOpen) {


        menuIcon.classList.remove(
            'fa-bars'
        );


        menuIcon.classList.add(
            'fa-xmark'
        );


    } else {


        menuIcon.classList.remove(
            'fa-xmark'
        );


        menuIcon.classList.add(
            'fa-bars'
        );


    }


});



/* =====================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
===================================================== */

mobileLinks.forEach(link => {


    link.addEventListener('click', () => {


        mobileMenu.classList.remove(
            'active'
        );


        menuButton.setAttribute(
            'aria-expanded',
            'false'
        );


        menuIcon.classList.remove(
            'fa-xmark'
        );


        menuIcon.classList.add(
            'fa-bars'
        );


    });


});



/* =====================================================
   CURRENT YEAR
===================================================== */

const year =
    document.querySelector('#year');


year.textContent =
    new Date().getFullYear();



/* =====================================================
   SCROLL REVEAL ANIMATIONS
===================================================== */

const revealElements =
    document.querySelectorAll('.reveal');


const revealObserver =
    new IntersectionObserver(


        entries => {


            entries.forEach(entry => {


                if (entry.isIntersecting) {


                    entry.target.classList.add(
                        'active'
                    );


                    revealObserver.unobserve(
                        entry.target
                    );


                }


            });


        },


        {

            threshold: 0.12,

            rootMargin:
                '0px 0px -60px 0px'

        }


    );



revealElements.forEach(element => {


    revealObserver.observe(
        element
    );


});



/* =====================================================
   HEADER BACKGROUND ON SCROLL
===================================================== */

const header =
    document.querySelector('.header');


window.addEventListener(
    'scroll',
    () => {


        if (window.scrollY > 30) {


            header.style.background =
                'rgba(10, 10, 15, 0.92)';


        } else {


            header.style.background =
                'rgba(10, 10, 15, 0.68)';


        }


    },
    {
        passive: true
    }
);



/* =====================================================
   SUBTLE PROJECT MOUSE EFFECT
===================================================== */

const projects =
    document.querySelectorAll('.project');


projects.forEach(project => {


    project.addEventListener(
        'mousemove',
        event => {


            const rectangle =
                project.getBoundingClientRect();


            const x =
                event.clientX -
                rectangle.left;


            const percentage =
                (
                    x /
                    rectangle.width
                ) * 100;


            project.style.background = `

                linear-gradient(

                    90deg,

                    rgba(
                        113,
                        87,
                        255,
                        ${0.03 + percentage / 2500}
                    ),

                    transparent

                )

            `;


        }
    );


    project.addEventListener(
        'mouseleave',
        () => {


            project.style.background =
                'transparent';


        }
    );


});