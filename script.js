document.querySelector('.hotspot').addEventListener('click', () => {
  showModal();
});

function showModal() {
  const modal = document.getElementById("modal");
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";

  // List all images you want to display
  const imageList = [
    'admin_1.jpg', 'admin_2.jpg',
    'hostel_1.jpg', 'hostel_2.jpg',
    'hall_1.jpg', 'hall_2.jpg',
    // Add more image file names here
  ];

  imageList.forEach(img => {
    const image = document.createElement("img");
    image.src = `assets/building_images/${img}`;
    image.style.width = "100%";
    image.style.marginBottom = "10px";
    carousel.appendChild(image);
  });

  modal.style.display = "block";
}

document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});
