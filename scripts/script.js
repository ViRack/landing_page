const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

{
    const nav = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    let menu = document.querySelector(".off-screen-menu");
    let isMenuOpen = menu.classList.contains('active');

    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY) {
            console.log(isMenuOpen)
            nav.classList.add("nav-hidden");
            console.log("going down");
            console.log(lastScrollY)

        } else {

            nav.classList.remove("nav-hidden");
            console.log("going up");
            console.log(lastScrollY)

        }
    })

    lastScrollY = window.scrollY;
    console.log(lastScrollY)

    if (window.scrollY <= 0 || isMenuOpen) {
        nav.classList.remove("nav-hidden");
    }
}