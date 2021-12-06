const navContainer = document.querySelector('nav.menu');

// Scroll to anchor ID using scrollTO event
const navScroll = (elem) => {
    const sectionID = elem.hash.slice(1);
    const section = document.getElementById(sectionID);

    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

// Scroll to section on link click
navContainer.addEventListener('click', function(e) {
    e.preventDefault();
    navScroll(e.target);
});

document.addEventListener("DOMContentLoaded", function(e) {
    const body = document.querySelector('body');
    body.classList.add('loaded');
});