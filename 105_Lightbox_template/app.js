let lightboxContainer
document.getElementById = ('lightboxContainer');
let lightboxBackground
document.getElementById = ('lightboxBackground');
let lightbox
document.getElementById = ('lightbox');
let lightboxCloser
document.getElementById = ('lightboxCloser');

function openLightbox() {
lightboxContainer.classList.add('display');
lightbox.src = this.src;
}

let bean1 = document.getElementById = ('bean1');

bean1.onclick = openLightbox;

let bean2 = document.getElementById = ('bean2');

bean2.onclick = openLightbox;

let bean3 = document.getElementById = ('bean3');

bean3.onclick = openLightbox;

let bean4 = document.getElementById = ('bean4');

bean4.onclick = openLightbox;

function closelightbox() {
    lightboxContainer.classList.remove('display');
    lightbox.src = "";
}

lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closelightbox;
