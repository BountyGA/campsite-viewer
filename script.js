document.querySelector('.hotspot').addEventListener('click', () => {
  showModal();
});

function showModal() {
  const modal = document.getElementById("modal");
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";

  const imageList = [
    'Events hall output-1 (2).jpg',
    'Output dinning hall.jpg',
    'output Office suite.jpg',
    'output-1 Security center.jpg',
    'Admin block2.png'
  ];

  let currentIndex = 0;
  const images = [];

  imageList.forEach((img, index) => {
    const image = document.createElement("img");
    image.src = `assets/building_images/${img}`;
    image.classList.add(index === 0 ? "active" : "");
    carousel.appendChild(image);
    images.push(image);
  });

  // Navigation buttons
  const controls = document.createElement("div");
  controls.className = "carousel-controls";

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "⟨ Prev";
  prevBtn.onclick = () => {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add("active");
  };

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next ⟩";
  nextBtn.onclick = () => {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  };

  controls.appendChild(prevBtn);
  controls.appendChild(nextBtn);
  carousel.appendChild(controls);

  modal.style.display = "block";
}

document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});
