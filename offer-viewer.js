const offerModalElement = document.querySelector("#offerModal");
const offerPagesElement = document.querySelector("#offerPages");
const offerOpenButtons = document.querySelectorAll("[data-open-offer]");
const offerCloseButton = document.querySelector("#closeOffer");
let offerRendered = false;

function renderOffer() {
  if (offerRendered) return;
  offerPagesElement.innerHTML = "";
  for (let pageNumber = 1; pageNumber <= 4; pageNumber += 1) {
    const image = document.createElement("img");
    image.src = pageNumber === 1
      ? "documents/offre-commerciale/page-1-logo-ah.png"
      : `documents/offre-commerciale/page-${pageNumber}.png`;
    image.alt = `Offre commerciale ABDZ — page ${pageNumber} sur 4`;
    image.loading = pageNumber === 1 ? "eager" : "lazy";
    offerPagesElement.appendChild(image);
  }
  offerRendered = true;
}

function openOffer() {
  offerModalElement.hidden = false;
  document.body.classList.add("offer-is-open");
  renderOffer();
}

offerOpenButtons.forEach((button) => button.addEventListener("click", openOffer));

function closeOffer() {
  offerModalElement.hidden = true;
  document.body.classList.remove("offer-is-open");
}

offerCloseButton.addEventListener("click", closeOffer);
offerModalElement.addEventListener("click", (event) => {
  if (event.target === offerModalElement) closeOffer();
});
document.addEventListener("keydown", (event) => {
  if (!offerModalElement.hidden && event.key === "Escape") closeOffer();
});

if (window.location.hash === "#offre-commerciale") openOffer();
