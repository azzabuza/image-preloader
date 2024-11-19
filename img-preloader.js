// LAZY LOAD IMAGE
document.addEventListener("DOMContentLoaded", function () {
const loadingPlaceholder = "PATH_IMAGE";

function processImages() {
const images = document.querySelectorAll("img:not([data-processed])");
images.forEach((img) => {
const originalSrc = img.src;
img.dataset.originalSrc = originalSrc;
img.src = loadingPlaceholder;
img.style.opacity = "0.5";
img.dataset.processed = true;

setTimeout(() => {
img.style.transition = "opacity 2s ease";
img.src = img.dataset.originalSrc;
img.style.opacity = "1";
}, 2000);
});
}

processImages();

const observer = new MutationObserver(processImages);
observer.observe(document.body, { childList: true, subtree: true });
});
