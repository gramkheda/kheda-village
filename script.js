/* =========================================
   ग्राम खेड़ा — Gallery & Site Interactions
   ========================================= */

const railingPhotos = [
    "images/railing1.jpeg",
    "images/railing2.jpeg",
    "images/railing3.jpeg",
    "images/railing4.jpeg",
    "images/railing5.jpeg",
    "images/railing6.jpeg"
];

const solarPhotos = [
    "images/solar1.jpeg",
    "images/solar2.jpeg",
    "images/solar3.jpeg",
    "images/solar4.jpeg",
    "images/solar5.jpeg",
    "images/solar6.jpeg"
];

const backgroundImages = [
    "images/village1.jpeg",
    "images/village2.jpeg",
    "images/village3.jpeg"
];

let railingPhotoIndex = 0;
let solarPhotoIndex = 0;
let backgroundIndex = 0;

function setGalleryImage(imageId, photos, index) {
    const mainImage = document.getElementById(imageId);
    if (!mainImage || !photos[index]) return;

    mainImage.classList.add("is-changing");

    window.setTimeout(() => {
        mainImage.src = photos[index];
        mainImage.classList.remove("is-changing");
    }, 120);
}

function updateThumbnails(galleryName, index) {
    const thumbnails = document.querySelectorAll(
        `.gallery-thumbnails[data-gallery="${galleryName}"] img`
    );

    thumbnails.forEach((thumbnail, thumbnailIndex) => {
        thumbnail.classList.toggle("active", thumbnailIndex === index);
    });
}

function showRailingPhoto(index) {
    if (index < 0 || index >= railingPhotos.length) return;

    railingPhotoIndex = index;
    setGalleryImage("railingMainImage", railingPhotos, railingPhotoIndex);
    updateThumbnails("railing", railingPhotoIndex);
}

function changeRailingPhoto(direction) {
    railingPhotoIndex += direction;

    if (railingPhotoIndex >= railingPhotos.length) {
        railingPhotoIndex = 0;
    }

    if (railingPhotoIndex < 0) {
        railingPhotoIndex = railingPhotos.length - 1;
    }

    showRailingPhoto(railingPhotoIndex);
}

function showSolarPhoto(index) {
    if (index < 0 || index >= solarPhotos.length) return;

    solarPhotoIndex = index;
    setGalleryImage("solarMainImage", solarPhotos, solarPhotoIndex);
    updateThumbnails("solar", solarPhotoIndex);
}

function changeSolarPhoto(direction) {
    solarPhotoIndex += direction;

    if (solarPhotoIndex >= solarPhotos.length) {
        solarPhotoIndex = 0;
    }

    if (solarPhotoIndex < 0) {
        solarPhotoIndex = solarPhotos.length - 1;
    }

    showSolarPhoto(solarPhotoIndex);
}

function changeBackground() {
    const header = document.querySelector(".hero-section");
    if (!header) return;

    backgroundIndex++;

    if (backgroundIndex >= backgroundImages.length) {
        backgroundIndex = 0;
    }

    header.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,0.48), rgba(0,0,0,0.48)), url("${backgroundImages[backgroundIndex]}")`;
}

function updateNavbar() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    navbar.classList.toggle("scrolled", window.scrollY > 30);
}

function closeMobileMenu() {
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    if (!navToggle || !navMenu) return;

    navToggle.classList.remove("open");
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
}

document.addEventListener("DOMContentLoaded", () => {
    updateThumbnails("railing", railingPhotoIndex);
    updateThumbnails("solar", solarPhotoIndex);

    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("open");
            navToggle.classList.toggle("open", isOpen);
            navToggle.setAttribute("aria-expanded", String(isOpen));
        });

        navMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMobileMenu);
        });
    }

    updateNavbar();

    // Village hero background changes every 5 seconds.
    window.setInterval(changeBackground, 5000);
});

window.addEventListener("scroll", updateNavbar);
