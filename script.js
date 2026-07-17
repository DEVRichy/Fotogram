let images = [
"alaska-810433_1280.jpg",
"anime-8788959_1280.jpg",
"atmosphere-8752835_1280.png",
"blue-tit-8521052_1280.jpg",
"hurricane-92968_1280.jpg",
"lake-2896379_1280.jpg",
"moorente-8783210_1280.jpg",
"sea-2563389_1280.jpg",
"snow-bunting-6781122_1280.jpg",
"snow-leopard-cubs-8039138_1280.jpg",
"travel-8785493_1280.jpg",
"winter-1675197_1280.jpg",
];

let imageTitles = [
  "Alaska-810433_1280",
  "Anime-8788959_1280",
  "Atmosphere-8752835_1280",
  "Blue-tit-8521052_1280",
  "Hurricane-92968_1280",
  "Lake-2896379_1280",
  "Moorente-8783210_1280",
  "Sea-2563389_1280",
  "Snow-bunting-6781122_1280",
  "Snow-leopard-cubs-8039138_1280",
  "Travel-8785493_1280",
  "Winter-1675197_1280",
];

const dialogRef = document.getElementById("photoDialog");
let index = 0;

function openDialog(actualImage) {
  document.getElementById("imageTitle").textContent = imageTitles[actualImage];
  document.getElementById("selectImage").src =
    "assets/img/" + images[actualImage];
  index = actualImage;
  document.getElementById("pageCount").textContent =
    index + 1 + " / " + images.length;

  dialogRef.showModal(); 
}

function closeDialog() {
  dialogRef.close();
}

dialogRef.addEventListener("click", (event) => {
  if (event.target === dialogRef) {
    dialogRef.close();
  }
});

function nextImage() {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  openDialog(index);
}

function previousImage() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  openDialog(index);
}
