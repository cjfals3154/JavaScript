const images = ["back1.jpeg", "back2.jpeg", "back3.jpeg"];

const choesImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img")

bgImage.src = `img/${choesImage}`;

document.body.appendChild(bgImage);
