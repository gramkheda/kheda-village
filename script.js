const railingPhotos = ["images/railing1.jpeg","images/railing2.jpeg","images/railing3.jpeg","images/railing4.jpeg","images/railing5.jpeg","images/railing6.jpeg"];
let railingPhotoIndex = 0;function showRailingPhoto(index) {railingPhotoIndex = index;const mainImage = document.getElementById("railingMainImage");if (mainImage) {mainImage.src = railingPhotos[railingPhotoIndex];}updateRailingThumbnails();}
function changeRailingPhoto(direction) {railingPhotoIndex += direction;if (railingPhotoIndex >= railingPhotos.length) {railingPhotoIndex = 0;}
if (railingPhotoIndex < 0) {railingPhotoIndex = railingPhotos.length - 1;}const mainImage = document.getElementById("railingMainImage");if (mainImage) {mainImage.src = railingPhotos[railingPhotoIndex];}updateRailingThumbnails();}
function updateRailingThumbnails() {const thumbnails =document.querySelectorAll(".gallery-thumbnails img");thumbnails.forEach(function (thumbnail, index) {if (index === railingPhotoIndex) {thumbnail.classList.add("active");} else {thumbnail.classList.remove("active");}});}
document.addEventListener("DOMContentLoaded", function () {updateRailingThumbnails();});
const solarPhotos = ["images/solar1.jpeg","images/solar2.jpeg","images/solar3.jpeg","images/solar4.jpeg","images/solar5.jpeg","images/solar6.jpeg"];
let solarPhotoIndex = 0;function showSolarPhoto(index) {solarPhotoIndex = index;document.getElementById("solarMainImage").src =solarPhotos[solarPhotoIndex];}
function changeSolarPhoto(direction) {solarPhotoIndex += direction;if (solarPhotoIndex >= solarPhotos.length) {solarPhotoIndex = 0;}if (solarPhotoIndex < 0) {solarPhotoIndex = solarPhotos.length - 1;}document.getElementById("solarMainImage").src =solarPhotos[solarPhotoIndex];}
