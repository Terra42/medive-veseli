// show and hide images in grid

const hexItems = document.querySelectorAll('.hex-content');
const hexImgs = document.querySelectorAll('.hex-img');

let imageDisplayed = false;

const showImage = (event) => {
  if (!imageDisplayed) {
    let idHex = `#${event.target.id}`;
    let idImg = `${idHex}-img`;

    let hexItem = document.querySelector(idHex);
    hexItem.style.display = 'none';
    let hexImg = document.querySelector(idImg);
    hexImg.style.display = 'block';
    imageDisplayed = true;
  }
};

const hideImage = (event) => {
  if (imageDisplayed) {
    let idImg = `#${event.target.id}`;
    let idHexArray = idImg.split('-');
    let idHex = idHexArray[0];

    let hexItem = document.querySelector(idHex);
    hexItem.style.display = 'block';
    let hexImg = document.querySelector(idImg);
    hexImg.style.display = 'none';
    imageDisplayed = false;
  }
};

hexItems.forEach((item) => item.addEventListener('mouseenter', showImage));
hexImgs.forEach((item) => item.addEventListener('mouseleave', hideImage));
