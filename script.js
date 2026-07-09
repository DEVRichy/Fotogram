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

const dialogRef = document.getElementById("photoDialog");
let index = 0;

function openDialog(actualImage) {
  document.getElementById("imageTitle").textContent = images[actualImage];
  document.getElementById("selectImage").src =
    "assets/img/" + images[actualImage];
  document.getElementById("pageCount").textContent =
    index + 1 + " / " + images.length;

  dialogRef.showModal();
  index = actualImage;
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
