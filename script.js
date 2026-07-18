const pages = [
  { image: null, category: "Direction artistique indépendante", title: "Aïcha Hamdi — ABDZ Creations" },
  { image: "03-12.png", category: "Projet propriétaire ABDZ", title: "Caméléon — Parfum et brevet" },
  { image: "06-12.png", category: "Projet propriétaire ABDZ", title: "Innocence — Bague manifeste" },
  { image: "04-12.png", category: "Univers créatif autonome", title: "Muses Metamorphosis" },
  { image: "02-12.png", category: "Projet propriétaire ABDZ", title: "ABDZ Magazine" },
  { image: "05-12.png", category: "Univers créatif autonome", title: "Accessoires ABDZ" },
  { image: "07-12.png", category: "Étude créative non commandée", title: "Lieux d'exception" },
  { image: "08-12.png", category: "Univers créatif autonome", title: "Studio ABDZ" },
  { image: "09-12.png", category: "Univers créatif autonome", title: "Ambassadrices ABDZ" },
  { image: "10-12.png", category: "Canal de diffusion ABDZ", title: "Vidéos et YouTube" },
  { image: "11-12.png", category: "Identité de marque ABDZ", title: "Slogans ABDZ" },
  { image: null, category: "La muse · L’aboutissement ABDZ", title: "L’Iréelle — Unreal Girl in a Real World" },
  { image: null, category: "Univers narratif · Famille IA", title: "La Famille ABDZ" },
];

const screens = Object.fromEntries(["cover", "summary", "detail"].map((id) => [id, document.querySelector(`#${id}`)]));
const summaryReturnHome = document.querySelector("#summaryReturnHome");
const profilePage = document.querySelector("#profilePage");
const ireellePage = document.querySelector("#ireellePage");
const familyPage = document.querySelector("#familyPage");
const projectFrame = document.querySelector("#projectFrame");
const pageImage = document.querySelector("#pageImage");
const cardLinks = document.querySelector("#cardLinks");
const pageLinks = document.querySelector("#pageLinks");
const counter = document.querySelector("#counter");
const projectCategory = document.querySelector("#projectCategory");
const projectTitle = document.querySelector("#projectTitle");
const interactionBadge = document.querySelector("#interactionBadge");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const videoModal = document.querySelector("#videoModal");
const portfolioVideo = document.querySelector("#portfolioVideo");
const videoSequenceCounter = document.querySelector("#videoSequenceCounter");
const siteModal = document.querySelector("#siteModal");
const siteFrame = document.querySelector("#siteFrame");
const galleryModal = document.querySelector("#galleryModal");
const galleryImage = document.querySelector("#galleryImage");
const galleryCounter = document.querySelector("#galleryCounter");
let current = 0;
let currentAccessory = 0;
let isTurningPage = false;

const accessoryImages = [1, 2, 3, 4, 5].map((number) => `images/accessoires/${number}-accessoire.png`);

const businessCardLinks = [
  { label: "Ouvrir ABDZ Magazine Issue 01", href: "https://abdz-system.github.io/abdz-magazines/ABDZ01V2/intro.html", rect: { left: 13.9, top: 10, width: 80.8, height: 11.6 } },
  { label: "Ouvrir YouTube ABDZ Creations", href: "https://www.youtube.com/@ABDZCreations", rect: { left: 71.6, top: 31, width: 25.6, height: 4.1 } },
  { label: "Ouvrir fashion19.fr", href: "https://www.fashion19.fr/", rect: { left: 71.4, top: 36.4, width: 24.5, height: 2.7 } },
  { label: "Envoyer un email à Esmeralda", href: "mailto:esmeralda@fashion19.fr", rect: { left: 71.4, top: 40.8, width: 26, height: 2.7 } },
  { label: "Appeler le 06 21 46 36 83", href: "tel:+33621463683", rect: { left: 71.4, top: 44.9, width: 25.6, height: 2.9 } },
];

const pageExternalLinks = {
  1: [{ label: "Ouvrir la vidéo Caméléon", href: "videos/cameleon.mp4", className: "video-open-link", rect: { left: 9.2, top: 88.6, width: 10.5, height: 6.2 } }],
  2: [{ label: "Ouvrir la vidéo Innocence", href: "videos/innocence.mp4", className: "video-open-link", rect: { left: 9.2, top: 88.6, width: 10.5, height: 6.2 } }],
  3: [{ label: "Ouvrir la vidéo Metamorphosis", href: "videos/metamorphosis.mp4", className: "video-open-link", rect: { left: 10.4, top: 82.8, width: 10.5, height: 6.2 } }],
  4: [{ label: "Ouvrir ABDZ Magazine", href: "https://abdz-system.github.io/abdz-magazines/ABDZ01V2/intro.html", className: "magazine-official-link", rect: { left: 37, top: 91.1, width: 34, height: 3.6 } }],
  5: [{ label: "Ouvrir la vidéo Accessoires ABDZ", href: "videos/accessoires.mp4", className: "video-open-link", rect: { left: 9.2, top: 88.6, width: 10.5, height: 6.2 } }],
  6: [{ label: "Ouvrir Le Meurice", href: "https://abdz-system.github.io/abdz-magazines/LE_MEURICE/intro.html", className: "official-page-link", rect: { left: 9.2, top: 88.6, width: 10.5, height: 6.2 } }],
  7: [{ label: "Ouvrir la vidéo Studio ABDZ", href: "videos/muse-fille.mp4", className: "video-open-link", rect: { left: 10.4, top: 82.8, width: 10.5, height: 6.2 } }],
  9: [{ label: "Ouvrir YouTube ABDZ Creations", href: "https://www.youtube.com/@ABDZCreations", className: "youtube-play-link", rect: { left: 61.8, top: 30.8, width: 22.8, height: 10.8 } }],
};

const interactionBadges = {
  1: "▶ Vidéo intégrée",
  2: "▶ Vidéo intégrée",
  3: "▶ Vidéo intégrée",
  4: "↗ Expérience interactive",
  5: "▶ Vidéo intégrée",
  6: "↗ Expérience interactive",
  7: "▶ Vidéo intégrée",
  9: "↗ Chaîne YouTube",
  11: "♫ Chanson originale · Vidéo YouTube",
};

function show(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("is-active"));
  screens[name].classList.add("is-active");
}

function closeAllMedia() {
  if (!videoModal.hidden) closeVideoModal();
  if (!siteModal.hidden) closeSiteModal();
  if (!galleryModal.hidden) closeGalleryModal();
}

function openSummary() {
  closeAllMedia();
  show("summary");
  history.replaceState({ page: "summary" }, "", "#sommaire");
}

function openCover() {
  closeAllMedia();
  show("cover");
  history.replaceState({ page: "cover" }, "", "#accueil");
}

function setRect(element, rect) {
  Object.entries(rect).forEach(([property, value]) => {
    element.style[property] = `${value}%`;
  });
}

function updatePage() {
  const item = pages[current];
  const pageNumber = String(current + 1).padStart(2, "0");
  counter.textContent = `${pageNumber} / ${pages.length}`;
  projectCategory.textContent = item.category;
  projectTitle.textContent = `${pageNumber} · ${item.title}`;
  interactionBadge.textContent = interactionBadges[current] || "";
  interactionBadge.hidden = !interactionBadges[current];
  profilePage.hidden = current !== 0;
  ireellePage.hidden = current !== 11;
  familyPage.hidden = current !== 12;
  projectFrame.hidden = current === 0 || current === 11 || current === 12;
  prevButton.hidden = current === 0 || current === 11 || current === 12;
  nextButton.hidden = current === 0 || current === 12;
  cardLinks.hidden = true;
  if (item.image) {
    pageImage.src = `images/${item.image}`;
    pageImage.alt = `${item.title} — page ${pageNumber} sur ${pages.length}`;
  }
  renderPageLinks();
}

function renderPageLinks() {
  pageLinks.innerHTML = "";
  const links = pageExternalLinks[current] || [];
  pageLinks.hidden = links.length === 0;
  links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href || "#";
    anchor.className = link.className || "";
    anchor.setAttribute("aria-label", link.label);
    setRect(anchor, link.rect);
    if (link.action === "accessory-gallery") {
      anchor.addEventListener("click", (event) => { event.preventDefault(); openAccessoryGallery(); });
    } else if (link.className === "video-open-link") {
      anchor.addEventListener("click", (event) => { event.preventDefault(); openVideo(link.href); });
    } else if (link.className === "official-page-link") {
      anchor.addEventListener("click", (event) => { event.preventDefault(); openSite(link.href); });
    } else {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }
    pageLinks.appendChild(anchor);
  });
}

function openPage(index) {
  closeAllMedia();
  current = Math.max(0, Math.min(pages.length - 1, index));
  updatePage();
  show("detail");
  history.replaceState({ page: "detail", index: current }, "", `#ligne-${String(current + 1).padStart(2, "0")}`);
}

function go(delta) {
  const next = current + delta;
  if (next >= pages.length) return openSummary();
  current = next < 0 ? pages.length - 1 : next;
  updatePage();
  history.replaceState({ page: "detail", index: current }, "", `#ligne-${String(current + 1).padStart(2, "0")}`);
}

function turnPage(delta) {
  if (isTurningPage || !screens.detail.classList.contains("is-active")) return;
  isTurningPage = true;
  screens.detail.classList.add("is-turning", delta > 0 ? "turn-next" : "turn-prev");
  window.setTimeout(() => {
    go(delta);
    screens.detail.classList.remove("is-turning", "turn-next", "turn-prev");
    isTurningPage = false;
  }, 450);
}

function openVideo(src) {
  closeAllMedia();
  videoModal.hidden = false;
  const isAccessoriesVideo = src.endsWith("accessoires.mp4");
  videoSequenceCounter.hidden = !isAccessoriesVideo;
  videoSequenceCounter.textContent = "1 / 4";
  portfolioVideo.dataset.sequenceCounter = isAccessoriesVideo ? "true" : "false";
  portfolioVideo.src = src;
  portfolioVideo.load();
  portfolioVideo.play().catch(() => {});
}

function closeVideoModal() {
  portfolioVideo.pause();
  portfolioVideo.removeAttribute("src");
  portfolioVideo.load();
  delete portfolioVideo.dataset.sequenceCounter;
  videoSequenceCounter.hidden = true;
  videoModal.hidden = true;
}

portfolioVideo.addEventListener("timeupdate", () => {
  if (portfolioVideo.dataset.sequenceCounter !== "true" || !portfolioVideo.duration) return;
  const sequence = Math.min(4, Math.floor((portfolioVideo.currentTime / portfolioVideo.duration) * 4) + 1);
  videoSequenceCounter.textContent = `${sequence} / 4`;
});

function openSite(src) {
  closeAllMedia();
  const isSong = src.includes("youtube-nocookie.com/embed/");
  siteModal.classList.toggle("is-song", isSong);
  siteFrame.title = isSong ? "I'm an Unreal Girl in a Real World — chanson officielle" : "Expérience ABDZ";
  siteFrame.src = src;
  siteModal.hidden = false;
}

function closeSiteModal() {
  siteFrame.removeAttribute("src");
  siteModal.classList.remove("is-song");
  siteModal.hidden = true;
}

function updateAccessoryGallery() {
  galleryImage.src = accessoryImages[currentAccessory];
  galleryImage.alt = `Accessoire ABDZ ${currentAccessory + 1} sur ${accessoryImages.length}`;
  galleryCounter.textContent = `${currentAccessory + 1} / ${accessoryImages.length}`;
}

function openAccessoryGallery() {
  closeAllMedia();
  currentAccessory = 0;
  updateAccessoryGallery();
  galleryModal.hidden = false;
}

function closeGalleryModal() { galleryModal.hidden = true; }
function moveAccessoryGallery(delta) {
  currentAccessory = (currentAccessory + delta + accessoryImages.length) % accessoryImages.length;
  updateAccessoryGallery();
}

document.querySelectorAll("[data-page]").forEach((button) => button.addEventListener("click", () => openPage(Number(button.dataset.page))));
businessCardLinks.forEach((link) => {
  const anchor = document.createElement("a");
  anchor.href = link.href;
  anchor.setAttribute("aria-label", link.label);
  if (!link.href.startsWith("mailto:") && !link.href.startsWith("tel:")) {
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }
  setRect(anchor, link.rect);
  cardLinks.appendChild(anchor);
});

document.querySelector("#enterButton").addEventListener("click", openSummary);
document.querySelector("#backButton").addEventListener("click", openSummary);
document.querySelector("#discoverButton").addEventListener("click", () => openPage(1));
document.querySelector("#ireelleSongButton").addEventListener("click", () => {
  openSite("https://www.youtube-nocookie.com/embed/h80dVl-EDzc?autoplay=1&rel=0&modestbranding=1");
});
prevButton.addEventListener("click", () => turnPage(-1));
nextButton.addEventListener("click", () => turnPage(1));
summaryReturnHome.addEventListener("click", openCover);
document.querySelector("#closeVideo").addEventListener("click", closeVideoModal);
document.querySelector("#closeSite").addEventListener("click", closeSiteModal);
document.querySelector("#closeGallery").addEventListener("click", closeGalleryModal);
document.querySelector("#prevGallery").addEventListener("click", () => moveAccessoryGallery(-1));
document.querySelector("#nextGallery").addEventListener("click", () => moveAccessoryGallery(1));
videoModal.addEventListener("click", (event) => { if (event.target === videoModal) closeVideoModal(); });
siteModal.addEventListener("click", (event) => { if (event.target === siteModal) closeSiteModal(); });
galleryModal.addEventListener("click", (event) => { if (event.target === galleryModal) closeGalleryModal(); });

document.addEventListener("keydown", (event) => {
  if (!videoModal.hidden && event.key === "Escape") return closeVideoModal();
  if (!siteModal.hidden && event.key === "Escape") return closeSiteModal();
  if (!galleryModal.hidden) {
    if (event.key === "Escape") closeGalleryModal();
    if (event.key === "ArrowRight") moveAccessoryGallery(1);
    if (event.key === "ArrowLeft") moveAccessoryGallery(-1);
    return;
  }
  if (!screens.detail.classList.contains("is-active")) return;
  if (event.key === "ArrowRight") turnPage(1);
  if (event.key === "ArrowLeft") turnPage(-1);
  if (event.key === "Escape") openSummary();
});

if (window.location.hash === "#accueil") openCover();
else if (window.location.hash === "#sommaire") openSummary();
else if (window.location.hash.startsWith("#ligne-")) openPage(Number(window.location.hash.replace("#ligne-", "")) - 1 || 0);
