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





