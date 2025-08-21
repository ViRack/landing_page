const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

// Hide menu when scrolling down - show when scrolling up

let lastScrollTop = 0;
let nav = document.querySelector(".navbar");
const navHeight = nav.offsetHeight;
let navMenu = document.querySelector(".off-screen-menu");
let isMenuOpen = navMenu.classList.contains("active");

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ 

    // do not close navbar if side menu is open
    isMenuOpen = navMenu.classList.contains("active"); 
    if (isMenuOpen) {
    return;
   }
   
   let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop; 
   if (currentScrollTop > lastScrollTop) {
      nav.classList.add("nav-hidden")
   } else if (currentScrollTop < lastScrollTop) {
      nav.classList.remove("nav-hidden")
   } // else was horizontal scroll
   lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling


   if (this.window.scrollY <= navHeight) {
    nav.classList.remove("nav-hidden");
   }
}, false);