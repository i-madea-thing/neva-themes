'use strict';

//todo: make light mode available to all pages , Linux Icons ASCII


// back to top button
const backtotop = document.querySelector('.backtotop');
function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
// appear back to top when scroll else hide
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    backtotop.classList.add('show');
  } else {
    backtotop.classList.remove('show');
  }
}
);


// document.getElementById('lightbtn').addEventListener('click', function () {

//     const css = document.getElementById('csstheme');
//     const lightmdbtn = document.getElementById('lightbtn');
    
//     if (lightmdbtn.innerHTML === '🌙') {
//         css.setAttribute('href', 'css/lightstyle.css');
//         lightmdbtn.innerHTML = '☀️';
//     } else {
//         css.setAttribute('href', 'css/darkstyle.css');
//         lightmdbtn.innerHTML = '🌙';
//     }
// });