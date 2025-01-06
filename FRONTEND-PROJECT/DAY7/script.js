const navbar = document.getElementsByClassName('header');
    
window.addEventListener('scroll', () => {
    if (window.scrollY >= 350) {
        navbar[0].classList.add('scrolled');
    } else {
        navbar[0].classList.remove('scrolled');
    }
});