document.addEventListener("DOMContentLoaded", () => {
  const hotspot = document.querySelector(".hotspot");
  const modal = document.getElementById("modal");
  const carousel = document.getElementById("carousel");
  const closeBtn = document.querySelector(".close");

  const imageList = [
    "Events hall output-1 (2).jpg",
    "Output dinning hall.jpg",
    "output Office suite.jpg",
    "output-1 Security center.jpg",
    "Admin block2.png"
  ];

  let currentIndex = 0;
  let images = [];

  hotspot.addEventListener("click", () => {
    showModal();
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  function showModal() {
    modal.style.display = "block";
    carousel.innerHTML = "";
    images = [];

    imageList.forEach((imgSrc, index) => {
      const img = document.createElement("img");
      img.src = `assets/building_images/${imgSrc}`;
      img.alt = `Image ${index + 1}`;
      img.classList.add(index === 0 ? "active" : "");
      carousel.appendChild(img);
      images.push(img);
    });

    const controls = document.createElement("div");
    controls.className = "carousel-controls";

    const prevBtn = document.createElement("button");
    prevBtn.innerHTML = "&#10094;";
    prevBtn.classList.add("carousel-arrow", "prev");
    prevBtn.onclick = () => {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      images[currentIndex].classList.add("active");
    };

    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = "&#10095;";
    nextBtn.classList.add("carousel-arrow", "next");
    nextBtn.onclick = () => {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
    };

    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);
    carousel.appendChild(controls);
  }
});
