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


const aboutBtn = select('.about-btn'); 
const contactBtn = select('.contact-btn');
const navAbout = select('.about-me-btn')
const navContact = select('.contact-me-btn')
const hamburgerBtn = select('.fa-bars')

onEvent('click', navAbout, function() {
    const aboutPage = select('.about');
    aboutPage.scrollIntoView({ block: 'end',  behavior: 'smooth' });
});

onEvent('click', navContact, function() {
    const aboutPage = select('footer');
    aboutPage.scrollIntoView({ block: 'end',  behavior: 'smooth' });
});


onEvent('click', aboutBtn, function() {
    const aboutPage = select('.about');
    aboutPage.scrollIntoView({ block: 'end',  behavior: 'smooth' });
});



onEvent('click', contactBtn, function() {
    const contactPage = select('footer');
    contactPage.scrollIntoView({ block: 'end',  behavior: 'smooth' });
});

onEvent('click', hamburgerBtn, function() {
    var x = select('.topnav');
    if (x.style.display === "block") {
      x.style.display = "none";
    } else 
      x.style.display = "block";
  });