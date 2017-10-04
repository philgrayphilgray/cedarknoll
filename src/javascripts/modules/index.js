import Flickity from "flickity";
const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".modal");
const carousel = document.querySelector(".carousel");
const button = document.querySelector(".modal__btn--close");
const imageNodes = document.querySelectorAll(".gallery__item");
const body = document.querySelector("body");
const imageSources = Array.from(imageNodes).map(img => {
  let style = img.currentStyle || window.getComputedStyle(img, false);
  let bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
  return bi;
});

imageSources.forEach(img => {
  var cell = document.createElement("div");
  var image = document.createElement("img");
  image.setAttribute("class", "carousel-image");
  image.setAttribute("src", img);
  cell.appendChild(image);
  carousel.appendChild(image);
});

const toggleModal = function(index) {
  if (modal.style.display !== "block") {
    body.classList.add("no-scroll");
    modal.style.display = "block";
    var flkty = new Flickity(".carousel");
    flkty.resize();
    flkty.select(index);
    flkty.playPlayer();
  } else {
    body.classList.remove("no-scroll");
    modal.style.display = "none";
  }
};

gallery.addEventListener(
  "click",
  function(e) {
    let currentNode = e.target;
    let parent = Array.prototype.slice.call(e.target.parentNode.children);
    let index = parent.indexOf(currentNode);
    toggleModal(index);
  },
  false
);
button.addEventListener(
  "click",
  function(e) {
    toggleModal();
  },
  false
);
