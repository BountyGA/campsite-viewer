document.querySelectorAll('.hotspot').forEach(button => {
  button.addEventListener('click', () => {
    const building = button.dataset.building;
    showModal(building);
  });
});

function showModal(buildingName) {
  const modal = document.getElementById("modal");
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";

  const images = {
    admin: ['admin_1.jpg', 'admin_2.jpg'],
    hostel: ['hostel_1.jpg', 'hostel_2.jpg'],
    // add more building mappings
  };

  (images[buildingName] || []).forEach(img => {
    const image = document.createElement("img");
    image.src = `assets/building_images/${img}`;
    carousel.appendChild(image);
  });

  modal.style.display = "block";
}

document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});
