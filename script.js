//Show / Hide Nab Menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})
//Close Nav Menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);


//asdfasdfasdfasdfasfd
//closeBtn.addEventListener('click', closeNav);
//closeBtn.addEventListener('click', closeNav);
//closeBtn.addEventListener('click', closeNav);
//closeBtn.addEventListener('click', closeNav);
//closeBtn.addEventListener('click', closeNav);/
//closeBtn.addEventListener('click', closeNav);
//closeBtn.addEventListener('click', closeNav);
