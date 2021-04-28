
// // // NAV CHANGE ---------------------------------------------------

// // const nav = document.querySelector('.nav');



// const hamburger = document.querySelector('.hamburger');
// const mobileMenu = document.querySelector('.mobile-menu');
// const navLink1 = document.querySelector('.mobile-link1');
// const navLink2 = document.querySelector('.mobile-link2');
// const navLink3 = document.querySelector('.mobile-link3');
// const navLink4 = document.querySelector('.mobile-link4');

// hamburger.addEventListener('click', () => {
//   mobileMenu.classList.toggle('is-active');
//   hamburger.classList.toggle('is-active');
//   html.classList.toggle('is-active');
// })

// navLink1.addEventListener('click', () => {
//   mobileMenu.classList.toggle('is-active');
//   hamburger.classList.toggle('is-active');
// })
// navLink2.addEventListener('click', () => {
//   mobileMenu.classList.toggle('is-active');
//   hamburger.classList.toggle('is-active');
// })
// navLink3.addEventListener('click', () => {
//   mobileMenu.classList.toggle('is-active');
//   hamburger.classList.toggle('is-active');
// })
// navLink4.addEventListener('click', () => {
//   mobileMenu.classList.toggle('is-active');
//   hamburger.classList.toggle('is-active');
// })




// REVIEWS TOGGLE

const html = document.querySelector('.html');
const reviews = document.querySelector('.reviews-container');
const reviewsBtn = document.querySelector('.reviews-btn');


reviewsBtn.addEventListener('click', () => {
    reviews.classList.toggle('is-active');
    html.classList.toggle('disable');
});

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 50) {
        reviewsBtn.classList.add('is-active');
    } else {
        reviewsBtn.classList.remove('is-active');
    }
};

