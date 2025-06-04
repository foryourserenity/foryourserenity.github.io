// Pop up
function openPopup(card) {
  const title = card.getAttribute("data-title");
  const description = card.getAttribute("data-description");
  const image = card.getAttribute("data-image");
  const link = card.getAttribute("data-link");

  document.getElementById("popup-title").textContent = title;
  document.getElementById("popup-description").textContent = description;
  document.getElementById("popup-img").src = image;

  const popupButton = document.querySelector(".popup-button");
  popupButton.onclick = function () {
    window.location.href = link;
  };

  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

document.getElementById("popup").addEventListener("click", function (e) {
  if (e.target === this) {
    closePopup();
  }
});

const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".carousel-control.prev");
const nextBtn = document.querySelector(".carousel-control.next");
let currentIndex = 0;

function showItem(index) {
  items.forEach((item, i) => {
    item.classList.remove("active");
    if (i === index) item.classList.add("active");
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
});

// Initialize the carousel
showItem(currentIndex);





