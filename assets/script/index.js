'use strict';

// Utility Functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
 }
    

function select(selector, parent = document) {
    return parent.querySelector(selector);
 }

 function selectAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
 }


 function create(element, parent = document) {
   return parent.createElement(element);
 }

 function log(content) {
   console.log(content);
 }

/*****************************************
        Variables
*****************************************/
const aboutBtn = select('.about-btn'); 
const contactBtn = select('.contact-btn');
const navAbout = select('.about-me-btn')
const navContact = select('.contact-me-btn')
const hamburgerBtn = select('.fa-bars')

/*****************************************
        Scroll to about
*****************************************/
onEvent('click', navAbout, function() {
    const aboutPage = select('.about');
    aboutPage.scrollIntoView({ block: 'end',  behavior: 'smooth' });
});

/*****************************************
        Scroll to contact
*****************************************/
onEvent('click', navContact, function() {
    const aboutPage = select('footer');
    aboutPage.scrollIntoView({ block: 'end',  behavior: 'smooth' });
});

/*****************************************
        Scroll to about
*****************************************/
onEvent('click', aboutBtn, function() {
    const aboutPage = select('.about');
    aboutPage.scrollIntoView({ block: 'end',  behavior: 'smooth' });
});

/*****************************************
        Scroll to footer
*****************************************/
onEvent('click', contactBtn, function() {
    const contactPage = select('footer');
    contactPage.scrollIntoView({ block: 'end',  behavior: 'smooth' });
});

/*****************************************
        Hamburger icon
*****************************************/
onEvent('click', hamburgerBtn, function() {
    let x = select('.topnav');
    if (x.style.display === "block") {
      x.style.display = "none";
    } else 
      x.style.display = "block";
  });