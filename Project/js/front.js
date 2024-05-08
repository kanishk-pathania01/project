let menubar= document.querySelector('#menu-bar')
let nav= document.querySelector('.navbar')

menubar.onclick = () => {
    menubar.classList.toggle('fa-times');
    nav.classList.toggle('active');
   
}



// Array.from(document.getElementById('#aksh')).forEach(e => {
//     e.addEventListener("click", element => {
//         window.open("menu.html");
//         // playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

//     })
// })
const menuLink = document.getElementById('aksh');
menuLink.addEventListener('click', function(event) {   
    event.preventDefault();
    window.location.href = '../Project/Shopping_cart.html'; 
});
const about = document.getElementById('akshu');
about.addEventListener('click', function(event) {   
    event.preventDefault();
    window.location.href = '../Project/about.html'; 
});
const contact = document.querySelector('.contact-btn');
contact.addEventListener('click', function(event) {   
    event.preventDefault();
    window.location.href = '../Project/contact.html'; 
});
const contactLink = document.getElementById('contactLink');

contactLink.href = '../Project/contact.html';

