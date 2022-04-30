"use strict";

$(document).ready(function() {

    // Menu burger - Button Toggle
    $('#menu-burger').click(() => {
        $('#menu').toggleClass('show');
    })

});

var scrollPos = 0;
const navbar = document.getElementById('header')
window.addEventListener('scroll', ()=>{
  if ((document.body.getBoundingClientRect()).top > scrollPos){
    navbar.classList.remove('hidden')
  }
    
  else { 
    if (scrollPos <= -60)
    navbar.classList.add('hidden')
  }
  scrollPos = (document.body.getBoundingClientRect()).top;
    
});