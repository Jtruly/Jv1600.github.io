let lightboxContainer
document.getElementById = ('lightboxContainer');
let lightboxBackground
document.getElementById = ('lightboxBackground');
let lightbox
document.getElementById = ('lightbox');
let lightboxCloser
document.getElementById = ('lightboxCloser');

function openlightbox() {
lightboxContainer.classList.add('display');
lightbox.src = this.src;
}

let beanImage = document.getElementById = ('bean3Image')
beanImage.oneclick = openlightbox;

function closelightbox() {
    lightboxContainer.classList.remove('display');
    lightbox.src = "";
}

lightboxBackground.oneclick = closeLightbox;
lightboxCloser.oneclick = closelightbox;
