/* const hex2Item = document.querySelector('#hex2');
const hex2Img = document.querySelector('#hex2-img');

const showImage = (event) => {
  hex2Item.style.display = 'none';
  hex2Img.style.display = 'block';
  console.log(event.target.id);
};

const hideImage = (event) => {
  hex2Item.style.display = 'block';
  hex2Img.style.display = 'none';
  console.log(event.target);
};

hex2Item.addEventListener('mouseenter', showImage);
hex2Img.addEventListener('mouseleave', hideImage); */

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
