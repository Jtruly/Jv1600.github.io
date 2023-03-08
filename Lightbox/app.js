//  lightbox container Id
 let lightboxContainer = document.getElementById('lightboxContainer');

// lightbox background Id
 let lightboxBackground = document.getElementById('lightboxBackground');

//  lightbox Id
 let lightbox = document.getElementById('lightbox');

//  lightbox close Id
 let lightboxCloser = document.getElementById('lightboxCloser');

//  open lightbox function
 function openLightbox() {
  lightboxContainer.classList.add('display');
  lightbox.src = this.src;
  }
// let bean1 = document.getElementById('bean1');

// bean1.onclick = openLightbox;

// let bean2 = document.getElementById('bean2');

// bean2.onclick = openLightbox;

// let bean3 = document.getElementById('bean3');

// bean3.onclick = openLightbox;

// let bean4 = document.getElementById('bean4');

// bean4.onclick = openLightbox;

// close lightbox function
 function closelightbox() {
     lightboxContainer.classList.remove('display');
     lightbox.src = "";
 }

// Image Group
let galleryImages = document.
getElementsByClassName("bean");

// gallery loop
for(let i = 0;i < galleryImages.length; i++) {
let galleryImage = galleryImages[i];
galleryImage.onclick = openLightbox;
}

// lightbox click
lightboxBackground.onclick = closelightbox;
lightboxCloser.onclick = closelightbox;
