// selecting elements
let imageContainer = document.querySelector(".image-container");
let images = document.querySelectorAll(".image");
let lightBox = document.querySelector(".lightbox");
let popupCloseBtn = document.querySelector(".close");
let popupOpener = document.querySelector(".popup-opener");

// event listeners
imageContainer.addEventListener("click", e => {
  console.log(e.target);
});

popupOpener.addEventListener("click", () => {
  lightBox.classList.toggle("hidden");
});

popupCloseBtn.addEventListener("click", () => {
  lightBox.classList.toggle("hidden");
});
 