const hamburger = document.querySelector(".fa-bars");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => 
{
    navMenu.classList.toggle("active")
});