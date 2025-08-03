const hotspotButton = document.querySelector('.hotspot');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const imageContainer = document.getElementById('image-container');

const images = [
 "Events hall output-1 (2).jpg",
    "Output dinning hall.jpg",
    "output Office suite.jpg",
    "output-1 Security center.jpg",
    "Admin block2.png",
];

function showImages() {
  imageContainer.innerHTML = ''; // Clear old images
  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    imageContainer.appendChild(img);
  });
  modal.style.display = 'block';
}

hotspotButton.addEventListener('click', () => {
  showImages();
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});
