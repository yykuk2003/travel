//주어진 ID와 일치하는 DOM 요소를 나타내는 element object
const menuToggleIcon = document.getElementById('menu-toggle-icon');
const navMobile = document.getElementById('nav');
const headerElement = document.getElementById('header');
//const menuToggleIcon = document.getElementById();

//Toggle navigation
const toggleMenu = () => {
    navMobile.classList.toggle('active');
    headerElement.classList.toggle('active');
}

menuToggleIcon.addEventListener('click', toggleMenu);


const headerScrollEvent = () => {
    if (this.scrollY >= 30) {
        headerElement.classList.add('active-scroll');
    } else {
        headerElement.classList.remove('active-scroll');
    }
}

window.addEventListener('scroll', headerScrollEvent)