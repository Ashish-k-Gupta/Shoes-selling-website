const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");



//when sommeone clicks the hamburger button
navToggle.addEventListener("click", () => {
// if the nav is closed, open it
const visiblity = nav.getAttribute("data-visible")
console.log(visiblity)

// if the nav is open, close it

})


















// const bar = document.getElementById('bar');
// const close = document.getElementById('close');
// const nav = document.getElementById('navbar');

// if (bar){
//     bar.addEventListener('click', () => {
//         nav.classList.add('active');
//     })
// }
// if (close){
//     close.addEventListener('click', () => {
//         nav.classList.remove('active');
//     })
// }