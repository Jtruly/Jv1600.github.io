
let dropdown = document.getElementById("dropdown");

let navbutton = document.getElementById("nav-button");

let arrow = document.getElementById("arrow");

function toggleDropdown() {
dropdown.classList.toggle("reveal");
arrow.classList.toggle("arrow-flip")
}
navbutton.onclick = toggleDropdown;