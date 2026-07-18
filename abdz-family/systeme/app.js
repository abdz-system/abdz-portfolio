(function () {
  "use strict";

  const defaults = [
    { id: 1, pair: 2, side: "FACE", title: "Bébé Dyno Codex", kicker: "Le gardien de l’imaginaire entre en scène.", description: "Petit dragon bleu, grande mission : protéger les idées avant qu’elles ne deviennent réelles. Il ouvre la famille avec l’énergie de ceux qui osent créer.", titleEn: "Baby Dyno Codex", kickerEn: "The guardian of imagination enters the story.", descriptionEn: "A little blue dragon with a great mission: protecting ideas before they become real. He opens the family story with the energy of those who dare to create.", media: "assets/cards/bebe-dyno-face.png", mediaEn: "assets/cards-en/baby-dyno-front-en.png" },
    { id: 2, pair: 1, side: "DOS", title: "Derrière Bébé Dyno", kicker: "La bravoure possède aussi un envers.", description: "Retourner la carte révèle le membre du staff, celui qui veille dans l’ombre et porte l’histoire jusque dans les détails.", titleEn: "Behind Baby Dyno", kickerEn: "Courage also has another side.", descriptionEn: "Turning the card reveals the staff member who watches from the shadows and carries the story through every detail.", media: "assets/cards/bebe-dyno-dos.png", mediaEn: "assets/cards-en/baby-dyno-back-en.png" },
    { id: 3, pair: 4, side: "FACE", title: "The Boss", kicker: "Le fauteuil n’est jamais vide.", description: "Une présence, une décision, une nouvelle idée : The Boss représente l’autorité créative et la responsabilité de donner une direction au rêve.", titleEn: "The Boss", kickerEn: "The chair is never truly empty.", descriptionEn: "A presence, a decision, a new idea: The Boss embodies creative authority and the responsibility of giving the dream a direction.", media: "assets/cards/boss-face.png", mediaEn: "assets/cards-en/boss-front-en.png" },
    { id: 4, pair: 3, side: "DOS", title: "Le revers du pouvoir", kicker: "Diriger, c’est aussi porter ce que les autres ne voient pas.", description: "Le dos du fauteuil raconte la fonction derrière le symbole. Le pouvoir devient travail, vigilance et promesse tenue.", titleEn: "The Other Side of Power", kickerEn: "Leading also means carrying what others cannot see.", descriptionEn: "The back of the chair reveals the work behind the symbol. Power becomes effort, vigilance and a promise kept.", media: "assets/cards/boss-dos.png", mediaEn: "assets/cards-en/boss-back-en.png" },
    { id: 5, pair: 6, side: "FACE", title: "Eve", kicker: "Une lumière se lève dans la famille.", description: "Eve avance comme une apparition dorée. Elle apporte la grâce, l’intuition et cette force douce qui transforme l’espace autour d’elle.", titleEn: "Eve", kickerEn: "A new light rises within the family.", descriptionEn: "Eve moves like a golden apparition. She brings grace, intuition and the quiet strength that transforms everything around her.", media: "assets/cards/eve-face.png", mediaEn: "assets/cards-en/eve-front-en.png" },
    { id: 6, pair: 5, side: "DOS", title: "Les ailes d’Eve", kicker: "La lumière continue quand le regard se détourne.", description: "De dos, Eve rejoint le staff ABDZ. Ses ailes rappellent qu’un personnage ne disparaît jamais vraiment : il change seulement de point de vue.", titleEn: "Eve’s Wings", kickerEn: "The light continues when the gaze turns away.", descriptionEn: "From behind, Eve joins the ABDZ staff. Her wings remind us that a character never truly disappears: only the point of view changes.", media: "assets/cards/eve-dos.png", mediaEn: "assets/cards-en/eve-back-en.png" },
    { id: 7, pair: 8, side: "FACE", title: "L’Iréelle", kicker: "Elle vit dans l’espace entre le rêve et le monde.", description: "L’Iréelle refuse de choisir entre élégance et mystère. Elle entre dans la série comme une question : que devient une idée lorsqu’on lui donne un visage ?", titleEn: "Unreal", kickerEn: "She lives between the dream and the world.", descriptionEn: "Unreal refuses to choose between elegance and mystery. She enters the series as a question: what does an idea become when it is given a face?", media: "assets/cards/ireelle-face.png", mediaEn: "assets/cards-en/unreal-front-en.png" },
    { id: 8, pair: 7, side: "DOS", title: "Le reflet de L’Iréelle", kicker: "Le miroir garde une part du secret.", description: "Quand la carte se retourne, la silhouette devient trace. Le miroir et les chaussures racontent une présence qui vient de passer — ou qui s’apprête à revenir.", titleEn: "Unreal’s Reflection", kickerEn: "The mirror keeps part of the secret.", descriptionEn: "When the card turns, the silhouette becomes a trace. The mirror and the shoes reveal a presence that has just passed—or is about to return.", media: "assets/cards/ireelle-dos.png", mediaEn: "assets/cards-en/unreal-back-en.png" },
    { id: 9, pair: 10, side: "FACE", title: "Pika", kicker: "La douceur rejoint l’aventure.", description: "Pika apporte l’attachement, la fidélité et l’instinct. Dans la Famille ABDZ, les plus petites présences peuvent devenir les plus grandes forces.", titleEn: "Pika", kickerEn: "Tenderness joins the adventure.", descriptionEn: "Pika brings affection, loyalty and instinct. In the ABDZ Family, the smallest presences can become the greatest strengths.", media: "assets/cards/pika-face.jpg", mediaEn: "assets/cards-en/pika-front-en.png" },
    { id: 10, pair: 9, side: "DOS", title: "Le courage de Pika", kicker: "Même de dos, elle veille sur la famille.", description: "Pika porte les couleurs du staff. Son revers raconte la confiance, la protection et ce lien silencieux qui ne demande aucune explication.", titleEn: "Pika’s Courage", kickerEn: "Even from behind, she watches over the family.", descriptionEn: "Pika wears the staff colors. Her reverse side tells a story of trust, protection and a silent bond that needs no explanation.", media: "assets/cards/pika-dos.png", mediaEn: "assets/cards-en/pika-back-en.png" }
  ];

  const generalDefaults = {
    heroTitle: "ABDZ FAMILY",
    heroCopy: "Chaque carte montre un visage.\nChaque dos ouvre une histoire.",
    letterTitle: "AU MONDE,",
    letterCopy: "J’ai créé une famille qui n’existait nulle part.\n\nChaque carte possède un visage et un envers. Chaque personnage porte une allure, une mémoire, une contradiction.\n\nJe ne vous présente pas un jeu figé. Je vous ouvre une série vivante : les premiers épisodes sont à venir. En attendant, rencontrez cette famille et entrez dans son histoire.\n\nLes images changeront, les films entreront, les textes grandiront. Mais le geste restera le même : regarder plus longtemps, retourner la carte et laisser une histoire apparaître.\n\nBienvenue dans la Famille ABDZ.\nAICHA — ABDZ",
    familyMessageTitle: "NOTRE PRÉSENTATION FAMILLE",
    familyMessageCopy: "« Peu importe où la vie vous mène, sachez reconnaître votre vraie famille. Elle ne partage pas forcément votre chair, votre sang ou votre nom. Mais si elle vous voit vraiment, vous accepte tel que vous êtes, vous écoute, vous aime et vous soutient, alors ne cherchez plus : vous avez trouvé votre famille. »\n\n« La famille n’est pas toujours celle dont on hérite. C’est parfois celle qui nous reconnaît. »",
    familyMessageSignature: "ABDZ FAMILY — Une équipe. Une vision. Un rêve. Une famille.",
    avatarMessageTitle: "SE RENDRE VISIBLE AUTREMENT",
    avatarMessageCopy: "Quand on a longtemps été regardée pour son apparence, vieillir ou se sentir fatiguée peut donner l’impression de devenir invisible. Mais ce que je cherche aujourd’hui est plus profond : être vue pour mon monde intérieur, pas uniquement pour mon visage.\n\nMes avatars ne sont pas un déguisement destiné à me cacher. Ils me permettent d’agrandir ma voix.\n\nThe Boss porte ma volonté et mes combats.\nL’Iréelle porte ma beauté intérieure et ma tristesse.\nEve porte mon espoir et ma douceur.\nPika porte mon besoin d’affection.\nBDC porte mon énergie créatrice et mon envie d’aller jusqu’au bout.\n\nJe n’ai pas à choisir entre « moi » et eux. Ils sont des fragments de moi, transformés en personnages que d’autres pourront reconnaître et aimer.\n\nLa fatigue n’est pas toute mon identité. Elle décrit mon état aujourd’hui, pas ma valeur ni ce que les autres peuvent encore découvrir en moi. Avec ABDZ FAMILY, je ne demande plus seulement à être regardée : je donne enfin une forme visible à tout ce qui vivait silencieusement en moi.",
    finaleTitle: "À VOUS D’ENTRER.",
    finaleCopy: "Regardez. Retournez la carte.\nChoisissez un personnage.\nRacontez ce qu’il réveille.",
    finaleEyebrow: "FIN DU PREMIER CHAPITRE",
    heroTitleEn: "ABDZ FAMILY",
    heroCopyEn: "Every card reveals a face.\nEvery reverse side opens a story.",
    letterTitleEn: "TO THE WORLD,",
    letterCopyEn: "I created a family that existed nowhere else.\n\nEvery card has a face and a reverse side. Every character carries a presence, a memory and a contradiction.\n\nThis is not a fixed game. It is a living series: the first episodes are coming soon. Until then, meet this family and enter its story.\n\nThe images will change, films will arrive and the stories will grow. But the gesture will remain the same: look longer, turn the card and let a story appear.\n\nWelcome to ABDZ FAMILY.\nAICHA — ABDZ",
    familyMessageTitleEn: "OUR FAMILY PRESENTATION",
    familyMessageCopyEn: "“Wherever life takes you, learn to recognize your true family. They may not share your flesh, your blood or your name. But if they truly see you, accept you as you are, listen to you, love you and support you, then look no further: you have found your family.”\n\n“Family is not always the one we inherit. Sometimes, it is the one that recognizes us.”",
    familyMessageSignatureEn: "ABDZ FAMILY — One team. One vision. One dream. One family.",
    avatarMessageTitleEn: "BECOMING VISIBLE IN A DIFFERENT WAY",
    avatarMessageCopyEn: "When you have long been seen for your appearance, growing older or feeling tired can make you feel invisible. But what I seek today is deeper: to be seen for my inner world, not only for my face.\n\nMy avatars are not disguises meant to hide me. They allow me to amplify my voice.\n\nThe Boss carries my determination and my struggles.\nUnreal carries my inner beauty and my sadness.\nEve carries my hope and my gentleness.\nPika carries my need for affection.\nBDC carries my creative energy and my drive to see things through.\n\nI do not have to choose between myself and them. They are fragments of me, transformed into characters that others can recognize and love.\n\nFatigue is not my whole identity. It describes how I feel today, not my worth or what others can still discover in me. With ABDZ FAMILY, I am no longer asking only to be looked at: I am finally giving a visible form to everything that had been living silently inside me.",
    finaleTitleEn: "NOW IT’S YOUR TURN.",
    finaleCopyEn: "Watch. Turn the card.\nChoose a character.\nTell the story it awakens.",
    finaleEyebrowEn: "END OF THE FIRST CHAPTER"
  };

  const videoDefaults = [];

  const characterVideos = {
    1: "../VIDEOS/BDC.mp4",
    3: "../VIDEOS/THE  BOSS.mp4",
    5: "../VIDEOS/EVE.mp4",
    7: "../VIDEOS/L'IREELLE.mp4",
    9: "../VIDEOS/PIKA.mp4"
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const resolveAsset = (path) => `${document.body.dataset.systemRoot || ""}${path}`;
  const pick = (item, key) => currentLanguage === "en" ? (item[`${key}En`] || item[key]) : item[key];
  const grid = $("#character-grid");
  const videoGrid = $("#video-episode-grid");
  const dialog = $("#episode-dialog");
  const videoDialog = $("#video-dialog");
  const editor = $("#editor");
  const shade = $("#editor-shade");
  const toast = $("#toast");
  const storageKey = "abdz-famille-saison-1-textes-v1";
  const generalStorageKey = "abdz-family-public-general-v1";
  const videoStorageKey = "abdz-family-public-upcoming-episodes-v1";
  const characterOrderKey = "abdz-family-character-order-v1";
  const languageKey = "abdz-family-language-v1";
  const passportSubmissionsKey = "abdz-family-passport-submissions-v1";
  const passportAccessKey = "abdz-family-passport-access-v1";
  const passportOrderKey = "abdz-family-approved-order-v1";
  const scenarioStorageKey = "abdz-family-scenarios-v1";
  const customEpisodesKey = "abdz-family-custom-episodes-v1";
  let episodes = loadTextContent();
  let general = loadGeneralContent();
  let videoEpisodes = loadVideoContent();
  let characterOrder = loadCharacterOrder();
  let customEpisodes = loadCustomEpisodes();
  let activeCustomEpisodeId = null;
  let pendingCustomFace = null;
  let pendingCustomBack = null;
  let pendingCustomVideo = null;
  let currentLanguage = localStorage.getItem(languageKey) === "en" ? "en" : "fr";
  let activeId = 1;
  let activeVideoId = null;
  let pendingMedia = null;
  let pendingMediaEn = null;
  let pendingBanner = null;
  let pendingBannerEn = null;
  let pendingVideoPoster = null;
  let pendingVideoFile = null;
  let draggedCharacterId = null;
  let justDragged = false;
  let passportFaceFile = null;
  let passportBackFile = null;
  let draggedPassportId = null;
  let passportWasDragged = false;
  let dbPromise;
  const mediaUrls = new Map();

  function loadTextContent() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      if (!Array.isArray(saved)) return structuredClone(defaults);
      return defaults.map((base) => {
        const item = { ...base, ...(saved.find((entry) => entry.id === base.id) || {}), media: base.media, mediaEn: base.mediaEn };
        if ((item.id === 7 || item.id === 8) && /ir[ée]elle/i.test(item.titleEn || "")) item.titleEn = base.titleEn;
        if (item.id === 7 || item.id === 8) item.descriptionEn = (item.descriptionEn || base.descriptionEn).replace(/L[’']Ir[ée]elle/gi, "Unreal");
        return item;
      });
    } catch (_) {
      return structuredClone(defaults);
    }
  }

  function saveTextContent() {
    const textOnly = episodes.map(({ id, title, kicker, description, titleEn, kickerEn, descriptionEn }) => ({ id, title, kicker, description, titleEn, kickerEn, descriptionEn }));
    localStorage.setItem(storageKey, JSON.stringify(textOnly));
  }

  function loadVideoContent() {
    try {
      const saved = JSON.parse(localStorage.getItem(videoStorageKey));
      if (!Array.isArray(saved)) return structuredClone(videoDefaults);
      return saved.filter((item) => item && Number.isFinite(Number(item.id)) && typeof item.title === "string").map((item) => ({
        id: Number(item.id),
        title: item.title,
        summary: item.summary || "",
        titleEn: item.titleEn || item.title,
        summaryEn: item.summaryEn || item.summary || "",
        poster: item.poster || videoDefaults.find((base) => base.id === Number(item.id))?.poster || ""
      }));
    } catch (_) {
      return structuredClone(videoDefaults);
    }
  }

  function saveVideoContent() {
    localStorage.setItem(videoStorageKey, JSON.stringify(videoEpisodes.map(({ id, title, summary, titleEn, summaryEn, poster }) => ({ id, title, summary, titleEn, summaryEn, poster }))));
  }

  function loadGeneralContent() {
    try {
      const saved = JSON.parse(localStorage.getItem(generalStorageKey)) || {};
      if (saved.letterCopy && saved.letterCopy.includes("dix épisodes pour rencontrer cette famille, une carte à la fois")) {
        saved.letterCopy = generalDefaults.letterCopy;
      }
      if (!saved.heroTitle || saved.heroTitle === "FAMILLE ABDZ") saved.heroTitle = "ABDZ FAMILY";
      return { ...generalDefaults, ...saved };
    } catch (_) {
      return { ...generalDefaults };
    }
  }

  function saveGeneralContent() {
    localStorage.setItem(generalStorageKey, JSON.stringify(general));
  }

  function loadCharacterOrder() {
    const fallback = [3, 9, 5, 1, 7];
    try {
      const saved = JSON.parse(localStorage.getItem(characterOrderKey));
      return Array.isArray(saved) && fallback.every((id) => saved.includes(id)) ? saved.filter((id) => fallback.includes(id)) : fallback;
    } catch (_) {
      return fallback;
    }
  }

  function saveCharacterOrder() {
    localStorage.setItem(characterOrderKey, JSON.stringify(characterOrder));
    setSaveStatus("Ordre des personnages enregistré");
  }

  function loadCustomEpisodes() {
    try {
      const saved = JSON.parse(localStorage.getItem(customEpisodesKey));
      return Array.isArray(saved)
        ? saved.filter((item) => item && item.id && typeof item.title === "string")
        : [];
    } catch (_) {
      return [];
    }
  }

  function saveCustomEpisodes() {
    localStorage.setItem(customEpisodesKey, JSON.stringify(customEpisodes));
  }

  function characterFaceId(id) {
    const item = episodes.find((entry) => entry.id === Number(id));
    return item?.side === "DOS" ? item.pair : item?.id;
  }

  function characterDisplayNumber(id) {
    const numbers = { 3: 1, 9: 2, 5: 3, 1: 4, 7: 5 };
    return numbers[characterFaceId(id)] || 1;
  }

  async function moveCharacter(id, direction) {
    const faceId = characterFaceId(id);
    const from = characterOrder.indexOf(faceId);
    const to = Math.max(0, Math.min(characterOrder.length - 1, from + direction));
    if (from < 0 || from === to) return;
    characterOrder.splice(from, 1);
    characterOrder.splice(to, 0, faceId);
    saveCharacterOrder();
    await renderEpisodes();
  }

  function openDb() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open("abdz-famille-media-v1", 1);
      request.onupgradeneeded = () => request.result.createObjectStore("episodes");
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    return dbPromise;
  }

  async function getStoredMedia(id) {
    try {
      const db = await openDb();
      return await new Promise((resolve, reject) => {
        const request = db.transaction("episodes", "readonly").objectStore("episodes").get(id);
        request.onsuccess = () => resolve(request.result || null);
        request.onerror = () => reject(request.error);
      });
    } catch (_) { return null; }
  }

  async function setStoredMedia(id, file) {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("episodes", "readwrite");
      tx.objectStore("episodes").put({ blob: file, type: file.type, name: file.name }, id);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  }

  async function deleteStoredMedia(id) {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("episodes", "readwrite");
      tx.objectStore("episodes").delete(id);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  }

  async function clearAllMedia() {
    const db = await openDb();
    return new Promise((resolve) => {
      const tx = db.transaction("episodes", "readwrite");
      tx.objectStore("episodes").clear();
      tx.oncomplete = resolve;
      tx.onerror = resolve;
    });
  }

  function two(n) { return String(n).padStart(2, "0"); }
  function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
  }

  function textWithBreaks(value) {
    return escapeHtml(value).replace(/\n/g, "<br>");
  }

  function renderGeneralText() {
    const heroTitle = pick(general, "heroTitle");
    const heroCopy = pick(general, "heroCopy");
    const letterTitle = pick(general, "letterTitle");
    const letterCopy = pick(general, "letterCopy");
    const familyMessageTitle = pick(general, "familyMessageTitle");
    const familyMessageCopy = pick(general, "familyMessageCopy");
    const familyMessageSignature = pick(general, "familyMessageSignature");
    const avatarMessageTitle = pick(general, "avatarMessageTitle");
    const avatarMessageCopy = pick(general, "avatarMessageCopy");
    const finaleEyebrow = pick(general, "finaleEyebrow");
    const finaleTitle = pick(general, "finaleTitle");
    const finaleCopy = pick(general, "finaleCopy");
    const titleParts = heroTitle.trim().split(/\s+/);
    const lastWord = titleParts.pop() || "ABDZ";
    $("#hero-title").innerHTML = `${escapeHtml(titleParts.join(" ") || "FAMILLE")}<br><span>${escapeHtml(lastWord)}</span>`;
    $("#hero-copy").innerHTML = textWithBreaks(heroCopy);
    $("#letter-title").textContent = letterTitle;
    $("#letter-copy").innerHTML = letterCopy.split(/\n\s*\n/).map((paragraph, index, list) => {
      const isSignature = index === list.length - 1;
      return `<p${isSignature ? ' class="signature"' : ""}>${textWithBreaks(paragraph)}</p>`;
    }).join("");
    $("#family-message-title").textContent = familyMessageTitle;
    $("#family-message-copy").innerHTML = familyMessageCopy.split(/\n\s*\n/).map((paragraph) => `<p>${textWithBreaks(paragraph)}</p>`).join("");
    $("#family-message-signature").textContent = familyMessageSignature;
    $("#avatar-message-title").textContent = avatarMessageTitle;
    $("#avatar-message-copy").innerHTML = avatarMessageCopy.split(/\n\s*\n/).map((paragraph) => `<p>${textWithBreaks(paragraph)}</p>`).join("");
    $("#finale-eyebrow").textContent = finaleEyebrow;
    $("#finale-title").innerHTML = textWithBreaks(finaleTitle);
    $("#finale-copy").innerHTML = textWithBreaks(finaleCopy);
    $("#edit-hero-title").value = general.heroTitle;
    $("#edit-hero-copy").value = general.heroCopy;
    $("#edit-letter-title").value = general.letterTitle;
    $("#edit-letter-copy").value = general.letterCopy;
    $("#edit-family-message-title").value = general.familyMessageTitle;
    $("#edit-family-message-copy").value = general.familyMessageCopy;
    $("#edit-family-message-signature").value = general.familyMessageSignature;
    $("#edit-avatar-message-title").value = general.avatarMessageTitle;
    $("#edit-avatar-message-copy").value = general.avatarMessageCopy;
    $("#edit-finale-eyebrow").value = general.finaleEyebrow || "";
    $("#edit-finale-title").value = general.finaleTitle;
    $("#edit-finale-copy").value = general.finaleCopy;
    $("#edit-hero-title-en").value = general.heroTitleEn;
    $("#edit-hero-copy-en").value = general.heroCopyEn;
    $("#edit-letter-title-en").value = general.letterTitleEn;
    $("#edit-letter-copy-en").value = general.letterCopyEn;
    $("#edit-family-message-title-en").value = general.familyMessageTitleEn;
    $("#edit-family-message-copy-en").value = general.familyMessageCopyEn;
    $("#edit-family-message-signature-en").value = general.familyMessageSignatureEn;
    $("#edit-avatar-message-title-en").value = general.avatarMessageTitleEn;
    $("#edit-avatar-message-copy-en").value = general.avatarMessageCopyEn;
    $("#edit-finale-eyebrow-en").value = general.finaleEyebrowEn || "";
    $("#edit-finale-title-en").value = general.finaleTitleEn;
    $("#edit-finale-copy-en").value = general.finaleCopyEn;
  }

  function updateStaticLanguage() {
    const en = currentLanguage === "en";
    document.documentElement.lang = en ? "en" : "fr";
    document.title = en ? "ABDZ FAMILY — Season 1" : "ABDZ FAMILY — Saison 1";
    const values = {
      "#nav-characters": ["Personnages", "Characters"],
      "#nav-passport": ["Familles", "Families"],
      "#nav-game": ["Le jeu", "The game"],
      "#nav-episodes": ["Épisodes à venir", "Episodes coming soon"],
      "#nav-letter": ["Lettre ouverte", "Open letter"],
      "#edit-toggle": ["Mode édition", "Edit mode"],
      "#hero-eyebrow": ["UNE CRÉATION ORIGINALE ABDZ", "AN ORIGINAL ABDZ CREATION"],
      "#hero-meta": ["SAISON 1 <i></i> 5 PERSONNAGES <i></i> ÉPISODES À VENIR", "SEASON 1 <i></i> 5 CHARACTERS <i></i> EPISODES COMING SOON"],
      "#hero-watch": ["<b>✦</b> Découvrez les personnages", "<b>✦</b> Discover the characters"],
      "#hero-discover": ["Découvrir le projet", "Discover the project"],
      "#scroll-cue": ["<span></span>Découvrir la famille", "<span></span>Discover the family"],
      "#letter-eyebrow": ["LETTRE OUVERTE", "OPEN LETTER"],
      "#family-message-eyebrow": ["LE CŒUR D’ABDZ FAMILY", "THE HEART OF ABDZ FAMILY"],
      "#characters-eyebrow": ["LA FAMILLE", "THE FAMILY"],
      "#characters-title": ["5 PERSONNAGES.", "5 CHARACTERS."],
      "#characters-intro": ["Cliquez sur une face.<br>Retournez ensuite la carte.", "Choose a face.<br>Then turn the card."],
      "#custom-episodes-title": ["MES NOUVEAUX ÉPISODES.", "MY NEW EPISODES."],
      "#episodes-eyebrow": ["PROCHAINEMENT", "COMING SOON"],
      "#episodes-intro": ["La Famille ABDZ prépare la suite.<br>Les premiers épisodes arrivent bientôt.", "ABDZ FAMILY is preparing the next chapter.<br>The first episodes are coming soon."],
      "#footer-brand": ["© ABDZ — LA FAMILLE", "© ABDZ — THE FAMILY"],
      "#edit-current-video-episode": ["Modifier cet épisode", "Edit this episode"]
    };
    Object.entries(values).forEach(([selector, pair]) => { $(selector).innerHTML = pair[en ? 1 : 0]; });
    const toggle = $("#language-toggle");
    toggle.classList.toggle("is-english", en);
    toggle.setAttribute("aria-label", en ? "Passer en français" : "Switch to English");
    toggle.setAttribute("aria-pressed", String(en));
    updateEpisodeCountLabels();
  }

  function videoDisplayNumber(id) {
    const index = videoEpisodes.findIndex((item) => item.id === Number(id));
    return index >= 0 ? index + 1 : videoEpisodes.length + 1;
  }

  function updateEpisodeCountLabels() {
    const en = currentLanguage === "en";
    $("#episodes-title").textContent = en ? "EPISODES COMING SOON." : "ÉPISODES À VENIR.";
    $("#video-episode-empty").textContent = en ? "The first episodes are coming soon." : "Les premiers épisodes arrivent bientôt.";
    $("#footer-season").textContent = en ? "SEASON 1 / EPISODES COMING SOON" : "SAISON 1 / ÉPISODES À VENIR";
  }

  async function switchLanguage() {
    currentLanguage = currentLanguage === "fr" ? "en" : "fr";
    localStorage.setItem(languageKey, currentLanguage);
    updateStaticLanguage();
    renderGeneralText();
    await renderBanner();
    await renderEpisodes();
    await renderCustomEpisodes();
    await renderVideoEpisodes();
    if (dialog.open) await openEpisode(activeId);
    if (videoDialog.open) await openVideoEpisode(activeVideoId);
  }

  async function renderBanner() {
    const bannerKey = currentLanguage === "en" ? "hero-banner-en" : "hero-banner";
    const stored = await getStoredMedia(bannerKey);
    const backdrop = $(".hero-backdrop");
    if (!stored) {
      const defaultBanner = currentLanguage === "en" ? "assets/cards-en/family-front-en.png" : "assets/cards/famille-face.png";
      backdrop.style.backgroundImage = `url("${resolveAsset(defaultBanner)}")`;
      $("#banner-status").textContent = currentLanguage === "en" ? "English ABDZ FAMILY banner in use" : "Bannière Famille ABDZ utilisée";
      $("#banner-status-en").textContent = "Bannière anglaise ABDZ FAMILY utilisée";
      return;
    }
    if (mediaUrls.has(bannerKey)) URL.revokeObjectURL(mediaUrls.get(bannerKey));
    const url = URL.createObjectURL(stored.blob);
    mediaUrls.set(bannerKey, url);
    backdrop.style.backgroundImage = `url("${url}")`;
    const status = `Bannière personnalisée : ${stored.name || "image enregistrée"}`;
    $(currentLanguage === "en" ? "#banner-status-en" : "#banner-status").textContent = status;
  }

  async function saveGeneral() {
    general = {
      heroTitle: $("#edit-hero-title").value.trim() || generalDefaults.heroTitle,
      heroCopy: $("#edit-hero-copy").value.trim(),
      letterTitle: $("#edit-letter-title").value.trim() || generalDefaults.letterTitle,
      letterCopy: $("#edit-letter-copy").value.trim(),
      familyMessageTitle: $("#edit-family-message-title").value.trim() || generalDefaults.familyMessageTitle,
      familyMessageCopy: $("#edit-family-message-copy").value.trim(),
      familyMessageSignature: $("#edit-family-message-signature").value.trim(),
      avatarMessageTitle: $("#edit-avatar-message-title").value.trim() || generalDefaults.avatarMessageTitle,
      avatarMessageCopy: $("#edit-avatar-message-copy").value.trim(),
      finaleEyebrow: $("#edit-finale-eyebrow").value.trim(),
      finaleTitle: $("#edit-finale-title").value.trim(),
      finaleCopy: $("#edit-finale-copy").value.trim(),
      heroTitleEn: $("#edit-hero-title-en").value.trim() || generalDefaults.heroTitleEn,
      heroCopyEn: $("#edit-hero-copy-en").value.trim(),
      letterTitleEn: $("#edit-letter-title-en").value.trim() || generalDefaults.letterTitleEn,
      letterCopyEn: $("#edit-letter-copy-en").value.trim(),
      familyMessageTitleEn: $("#edit-family-message-title-en").value.trim() || generalDefaults.familyMessageTitleEn,
      familyMessageCopyEn: $("#edit-family-message-copy-en").value.trim(),
      familyMessageSignatureEn: $("#edit-family-message-signature-en").value.trim(),
      avatarMessageTitleEn: $("#edit-avatar-message-title-en").value.trim() || generalDefaults.avatarMessageTitleEn,
      avatarMessageCopyEn: $("#edit-avatar-message-copy-en").value.trim(),
      finaleEyebrowEn: $("#edit-finale-eyebrow-en").value.trim(),
      finaleTitleEn: $("#edit-finale-title-en").value.trim(),
      finaleCopyEn: $("#edit-finale-copy-en").value.trim()
    };
    saveGeneralContent();
    if (pendingBanner) await setStoredMedia("hero-banner", pendingBanner);
    if (pendingBannerEn) await setStoredMedia("hero-banner-en", pendingBannerEn);
    pendingBanner = null;
    pendingBannerEn = null;
    renderGeneralText();
    await renderBanner();
    setSaveStatus("Textes généraux enregistrés");
    showToast("Textes généraux et bannière enregistrés");
  }

  async function mediaElement(episode, forDialog = false) {
    const mediaKey = currentLanguage === "en" ? `card-en-${episode.id}` : episode.id;
    const stored = await getStoredMedia(mediaKey);
    if (!stored) {
      if (forDialog && episode.side === "FACE" && characterVideos[episode.id]) {
        const video = document.createElement("video");
        video.src = resolveAsset(characterVideos[episode.id]);
        video.controls = true;
        video.autoplay = true;
        video.playsInline = true;
        return video;
      }
      const img = document.createElement("img");
      img.src = resolveAsset(currentLanguage === "en" ? episode.mediaEn : episode.media);
      img.alt = `${currentLanguage === "en" ? "Card" : "Carte"} ${episode.side.toLowerCase()} — ${pick(episode, "title")}`;
      img.loading = forDialog ? "eager" : "lazy";
      return img;
    }
    if (mediaUrls.has(mediaKey)) URL.revokeObjectURL(mediaUrls.get(mediaKey));
    const url = URL.createObjectURL(stored.blob);
    mediaUrls.set(mediaKey, url);
    if ((stored.type || "").startsWith("video/")) {
      if (!forDialog) {
        const placeholder = document.createElement("div");
        placeholder.className = "video-placeholder";
        placeholder.textContent = "▶ VIDÉO";
        return placeholder;
      }
      const video = document.createElement("video");
      video.src = url;
      video.controls = true;
      video.playsInline = true;
      return video;
    }
    const img = document.createElement("img");
    img.src = url;
    img.alt = `${currentLanguage === "en" ? "Custom visual" : "Visuel personnalisé"} — ${pick(episode, "title")}`;
    return img;
  }

  function fixedCharacterAsset(item) {
    const path = currentLanguage === "en" && item.mediaEn ? item.mediaEn : item.media;
    return resolveAsset(path);
  }

  function fixedCharacterImage(item) {
    const img = document.createElement("img");
    img.src = fixedCharacterAsset(item);
    img.alt = `${item.side === "DOS" ? "Dos" : "Face"} — ${pick(item, "title")}`;
    img.loading = "lazy";
    return img;
  }

  function openFixedCardPreview(item) {
    if (!item) return;
    activeId = item.id;
    dialog.classList.add("card-preview-mode");
    const media = $("#dialog-media");
    media.innerHTML = "";
    const image = fixedCharacterImage(item);
    image.loading = "eager";
    media.appendChild(image);
    if (!dialog.open) dialog.showModal();
  }

  async function renderEpisodes() {
    grid.innerHTML = "";
    const faces = episodes.filter((item) => item.side === "FACE").sort((a, b) => characterOrder.indexOf(a.id) - characterOrder.indexOf(b.id));
    for (const episode of faces) {
      const back = episodes.find((item) => item.id === episode.pair);
      const article = document.createElement("article");
      article.className = "episode-card";
      article.draggable = true;
      article.dataset.characterId = String(episode.id);
      const displayNumber = characterDisplayNumber(episode.id);
      article.innerHTML = `
        <div class="episode-media"></div>
        <div class="episode-badge">${currentLanguage === "en" ? "FRONT" : episode.side}</div>
        <div class="episode-info">
          <div class="episode-no">${currentLanguage === "en" ? "CARD" : "CARTE"} ${two(displayNumber)}</div>
          <h3>${escapeHtml(pick(episode, "title"))}</h3>
          <div class="character-card-actions" aria-label="${currentLanguage === "en" ? "Character card controls" : "Commandes de la carte personnage"}">
            <button class="card-side-button active" data-card-side="face" type="button" aria-pressed="true">${currentLanguage === "en" ? "FRONT" : "FACE"}</button>
            <button class="card-side-button" data-card-side="back" type="button" aria-pressed="false">${currentLanguage === "en" ? "BACK" : "DOS"}</button>
            <button class="card-video-button" type="button">VIDÉO</button>
          </div>
        </div>`;
      const media = $(".episode-media", article);
      const image = fixedCharacterImage(episode);
      media.appendChild(image);
      const badge = $(".episode-badge", article);
      const faceButton = $("[data-card-side='face']", article);
      const backButton = $("[data-card-side='back']", article);
      const videoButton = $(".card-video-button", article);
      const showSide = (item, side) => {
        if (!item) return;
        image.src = fixedCharacterAsset(item);
        image.alt = `${side === "back" ? (currentLanguage === "en" ? "Back" : "Dos") : "Face"} — ${pick(episode, "title")}`;
        badge.textContent = side === "back" ? (currentLanguage === "en" ? "BACK" : "DOS") : (currentLanguage === "en" ? "FRONT" : "FACE");
        faceButton.classList.toggle("active", side === "face");
        backButton.classList.toggle("active", side === "back");
        faceButton.setAttribute("aria-pressed", String(side === "face"));
        backButton.setAttribute("aria-pressed", String(side === "back"));
      };
      faceButton.addEventListener("click", (event) => { event.stopPropagation(); showSide(episode, "face"); openFixedCardPreview(episode); });
      backButton.addEventListener("click", (event) => { event.stopPropagation(); showSide(back, "back"); openFixedCardPreview(back); });
      videoButton.addEventListener("click", (event) => {
        event.stopPropagation();
        openCharacterVideo(episode);
      });
      article.addEventListener("dragstart", (event) => {
        draggedCharacterId = episode.id;
        justDragged = true;
        article.classList.add("dragging");
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", String(episode.id));
      });
      article.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        article.classList.add("drag-target");
      });
      article.addEventListener("dragleave", () => article.classList.remove("drag-target"));
      article.addEventListener("drop", async (event) => {
        event.preventDefault();
        article.classList.remove("drag-target");
        const sourceId = Number(event.dataTransfer.getData("text/plain") || draggedCharacterId);
        const targetId = episode.id;
        if (sourceId && sourceId !== targetId) {
          const sourceIndex = characterOrder.indexOf(sourceId);
          const targetIndex = characterOrder.indexOf(targetId);
          characterOrder.splice(sourceIndex, 1);
          characterOrder.splice(targetIndex, 0, sourceId);
          saveCharacterOrder();
          await renderEpisodes();
        }
      });
      article.addEventListener("dragend", () => {
        draggedCharacterId = null;
        document.querySelectorAll(".episode-card").forEach((card) => card.classList.remove("dragging", "drag-target"));
        setTimeout(() => { justDragged = false; }, 80);
      });
      grid.appendChild(article);
    }
  }

  function customMediaKey(id, type) {
    return `custom-episode-${id}-${type}`;
  }

  async function customImageElement(item, side) {
    const key = customMediaKey(item.id, side);
    const stored = await getStoredMedia(key);
    if (!stored) {
      const placeholder = document.createElement("div");
      placeholder.className = "custom-card-placeholder";
      placeholder.innerHTML = `<span>${side === "face" ? "FACE" : "DOS"}</span><small>À AJOUTER</small>`;
      return placeholder;
    }
    if (mediaUrls.has(key)) URL.revokeObjectURL(mediaUrls.get(key));
    const url = URL.createObjectURL(stored.blob);
    mediaUrls.set(key, url);
    const img = document.createElement("img");
    img.src = url;
    img.alt = `${side === "face" ? "Face" : "Dos"} — ${item.title}`;
    return img;
  }

  async function renderCustomEpisodes() {
    const customGrid = $("#custom-episode-grid");
    const empty = $("#custom-episode-empty");
    customGrid.innerHTML = "";
    empty.hidden = customEpisodes.length > 0;
    for (let index = 0; index < customEpisodes.length; index += 1) {
      const item = customEpisodes[index];
      const article = document.createElement("article");
      article.className = "episode-card custom-episode-card";
      article.innerHTML = `
        <div class="episode-media"></div>
        <div class="episode-badge">FACE</div>
        <div class="episode-info">
          <div class="episode-no">ÉPISODE ${two(index + 1)}</div>
          <h3>${escapeHtml(item.title)}</h3>
          <div class="character-card-actions" aria-label="Commandes de l’épisode">
            <button class="card-side-button active" data-custom-side="face" type="button" aria-pressed="true">FACE</button>
            <button class="card-side-button" data-custom-side="back" type="button" aria-pressed="false">DOS</button>
            <button class="card-video-button" type="button">VIDÉO</button>
          </div>
        </div>`;
      const media = $(".episode-media", article);
      media.appendChild(await customImageElement(item, "face"));
      const badge = $(".episode-badge", article);
      const faceButton = $("[data-custom-side='face']", article);
      const backButton = $("[data-custom-side='back']", article);
      const showSide = async (side) => {
        media.replaceChildren(await customImageElement(item, side));
        badge.textContent = side === "face" ? "FACE" : "DOS";
        faceButton.classList.toggle("active", side === "face");
        backButton.classList.toggle("active", side === "back");
        faceButton.setAttribute("aria-pressed", String(side === "face"));
        backButton.setAttribute("aria-pressed", String(side === "back"));
      };
      faceButton.addEventListener("click", () => showSide("face"));
      backButton.addEventListener("click", () => showSide("back"));
      $(".card-video-button", article).addEventListener("click", () => openCustomEpisodeVideo(item));
      customGrid.appendChild(article);
    }
  }

  async function openCustomEpisodeVideo(item) {
    videoDialog.classList.remove("character-video-mode");
    const key = customMediaKey(item.id, "video");
    const stored = await getStoredMedia(key);
    if (!stored) {
      showToast("Ajoute d’abord la vidéo de cet épisode dans le mode édition");
      return;
    }
    if (mediaUrls.has(key)) URL.revokeObjectURL(mediaUrls.get(key));
    const url = URL.createObjectURL(stored.blob);
    mediaUrls.set(key, url);
    $("#video-dialog-kicker").textContent = "NOUVEL ÉPISODE ABDZ";
    $("#video-dialog-title").textContent = item.title;
    $("#video-dialog-summary").textContent = "Face. Dos. Vidéo.";
    $("#edit-current-video-episode").hidden = true;
    const stage = $("#video-player-stage");
    stage.innerHTML = "";
    const video = document.createElement("video");
    video.src = url;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    stage.appendChild(video);
    if (!videoDialog.open) videoDialog.showModal();
  }

  function refreshCustomEpisodeSelect(selectedId = activeCustomEpisodeId) {
    const select = $("#edit-custom-episode");
    select.innerHTML = `<option value="">Nouvel épisode</option>${customEpisodes.map((item, index) => `<option value="${escapeHtml(item.id)}">${two(index + 1)} — ${escapeHtml(item.title)}</option>`).join("")}`;
    select.value = selectedId || "";
  }

  async function fillCustomEpisodeEditor(id) {
    activeCustomEpisodeId = id || null;
    pendingCustomFace = null;
    pendingCustomBack = null;
    pendingCustomVideo = null;
    const item = customEpisodes.find((entry) => entry.id === activeCustomEpisodeId);
    $("#edit-custom-title").value = item?.title || "";
    $("#edit-custom-face").value = "";
    $("#edit-custom-back").value = "";
    $("#edit-custom-video").value = "";
    const face = item ? await getStoredMedia(customMediaKey(item.id, "face")) : null;
    const back = item ? await getStoredMedia(customMediaKey(item.id, "back")) : null;
    const video = item ? await getStoredMedia(customMediaKey(item.id, "video")) : null;
    $("#custom-face-status").textContent = face ? `Face enregistrée : ${face.name}` : "Aucune face sélectionnée";
    $("#custom-back-status").textContent = back ? `Dos enregistré : ${back.name}` : "Aucun dos sélectionné";
    $("#custom-video-status").textContent = video ? `Vidéo enregistrée : ${video.name}` : "Aucune vidéo sélectionnée";
    $("#delete-custom-episode").hidden = !item;
    refreshCustomEpisodeSelect(activeCustomEpisodeId);
  }

  async function saveCustomEpisode() {
    const title = $("#edit-custom-title").value.trim();
    if (!title) {
      showToast("Donne un titre à ton nouvel épisode");
      return;
    }
    let item = customEpisodes.find((entry) => entry.id === activeCustomEpisodeId);
    if (!item && (!pendingCustomFace || !pendingCustomBack || !pendingCustomVideo)) {
      showToast("Pour créer l’épisode, ajoute la face, le dos et la vidéo");
      return;
    }
    if (!item) {
      item = { id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`, title };
      customEpisodes.push(item);
      activeCustomEpisodeId = item.id;
    } else {
      item.title = title;
    }
    if (pendingCustomFace) await setStoredMedia(customMediaKey(item.id, "face"), pendingCustomFace);
    if (pendingCustomBack) await setStoredMedia(customMediaKey(item.id, "back"), pendingCustomBack);
    if (pendingCustomVideo) await setStoredMedia(customMediaKey(item.id, "video"), pendingCustomVideo);
    saveCustomEpisodes();
    await renderCustomEpisodes();
    await fillCustomEpisodeEditor(item.id);
    setSaveStatus(`Épisode « ${title} » enregistré`);
    showToast("Nouvel épisode enregistré");
  }

  async function deleteCustomEpisode() {
    const item = customEpisodes.find((entry) => entry.id === activeCustomEpisodeId);
    if (!item || !confirm(`Supprimer l’épisode « ${item.title} » ?`)) return;
    await deleteStoredMedia(customMediaKey(item.id, "face"));
    await deleteStoredMedia(customMediaKey(item.id, "back"));
    await deleteStoredMedia(customMediaKey(item.id, "video"));
    customEpisodes = customEpisodes.filter((entry) => entry.id !== item.id);
    saveCustomEpisodes();
    await renderCustomEpisodes();
    await fillCustomEpisodeEditor("");
    setSaveStatus("Épisode supprimé");
    showToast("Épisode supprimé");
  }

  async function videoPosterElement(item) {
    const videoKey = `video-file-${item.id}`;
    const storedVideo = await getStoredMedia(videoKey);
    if (storedVideo) {
      if (mediaUrls.has(videoKey)) URL.revokeObjectURL(mediaUrls.get(videoKey));
      const url = URL.createObjectURL(storedVideo.blob);
      mediaUrls.set(videoKey, url);
      const preview = document.createElement("video");
      preview.src = url;
      preview.muted = true;
      preview.playsInline = true;
      preview.preload = "metadata";
      preview.setAttribute("aria-label", `${currentLanguage === "en" ? "Video preview" : "Aperçu vidéo"} — ${pick(item, "title")}`);
      return preview;
    }
    const posterKey = `video-poster-${item.id}`;
    const storedPoster = await getStoredMedia(posterKey);
    if (storedPoster || item.poster) {
      const img = document.createElement("img");
      if (storedPoster) {
        if (mediaUrls.has(posterKey)) URL.revokeObjectURL(mediaUrls.get(posterKey));
        const url = URL.createObjectURL(storedPoster.blob);
        mediaUrls.set(posterKey, url);
        img.src = url;
      } else {
        img.src = resolveAsset(item.poster);
      }
      img.alt = `${currentLanguage === "en" ? "Episode poster" : "Affiche de l’épisode"} — ${pick(item, "title")}`;
      img.loading = "lazy";
      return img;
    }
    const placeholder = document.createElement("div");
    placeholder.className = "video-episode-placeholder";
    placeholder.innerHTML = `<span>▶</span><small>${currentLanguage === "en" ? "VIDEO TO ADD" : "VIDÉO À AJOUTER"}</small>`;
    return placeholder;
  }

  async function renderVideoEpisodes() {
    videoGrid.innerHTML = "";
    $("#video-episode-empty").hidden = videoEpisodes.length > 0;
    updateEpisodeCountLabels();
    for (let index = 0; index < videoEpisodes.length; index += 1) {
      const item = videoEpisodes[index];
      const displayNumber = index + 1;
      const card = document.createElement("article");
      card.className = "video-episode-card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `${currentLanguage === "en" ? "Play episode" : "Lire l’épisode"} ${two(displayNumber)} : ${pick(item, "title")}`);
      card.innerHTML = `
        <div class="video-poster"></div>
        <button class="play-button" type="button" aria-label="${currentLanguage === "en" ? "Play episode" : "Lire l’épisode"} ${two(displayNumber)}">▶</button>
        <div class="video-card-info">
          <div class="episode-no">${currentLanguage === "en" ? "EPISODE" : "ÉPISODE"} ${two(displayNumber)}</div>
          <h3>${escapeHtml(pick(item, "title"))}</h3>
          <p>${escapeHtml(pick(item, "summary"))}</p>
        </div>`;
      $(".video-poster", card).appendChild(await videoPosterElement(item));
      card.addEventListener("click", () => openVideoEpisode(item.id));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openVideoEpisode(item.id); }
      });
      videoGrid.appendChild(card);
    }
  }

  async function openVideoEpisode(id) {
    videoDialog.classList.remove("character-video-mode");
    activeVideoId = Number(id);
    const item = videoEpisodes.find((entry) => entry.id === activeVideoId);
    if (!item) return;
    $("#video-dialog-kicker").textContent = `${currentLanguage === "en" ? "SEASON 1 — EPISODE" : "SAISON 1 — ÉPISODE"} ${two(videoDisplayNumber(item.id))}`;
    $("#video-dialog-title").textContent = pick(item, "title");
    $("#video-dialog-summary").textContent = pick(item, "summary");
    const stage = $("#video-player-stage");
    stage.innerHTML = "";
    $("#edit-current-video-episode").hidden = false;
    const storedVideo = await getStoredMedia(`video-file-${item.id}`);
    if (storedVideo) {
      const key = `video-file-${item.id}`;
      if (mediaUrls.has(key)) URL.revokeObjectURL(mediaUrls.get(key));
      const url = URL.createObjectURL(storedVideo.blob);
      mediaUrls.set(key, url);
      const video = document.createElement("video");
      video.src = url;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      stage.appendChild(video);
    } else {
      const poster = await videoPosterElement(item);
      poster.classList.add("player-poster");
      stage.appendChild(poster);
      const message = document.createElement("div");
      message.className = "no-video-message";
      message.innerHTML = currentLanguage === "en"
        ? `<span>▶</span><strong>Video coming soon</strong><small>Open edit mode to choose the video file for this episode.</small>`
        : `<span>▶</span><strong>Vidéo à ajouter</strong><small>Ouvrez le mode édition pour choisir le fichier de cet épisode.</small>`;
      stage.appendChild(message);
    }
    if (!videoDialog.open) videoDialog.showModal();
  }

  function openCharacterVideo(episode) {
    const videoPath = characterVideos[episode.id];
    if (!videoPath) return;
    videoDialog.classList.add("character-video-mode");
    $("#video-dialog-kicker").textContent = currentLanguage === "en" ? "ABDZ FAMILY — CHARACTER" : "ABDZ FAMILY — PERSONNAGE";
    $("#video-dialog-title").textContent = pick(episode, "title");
    $("#video-dialog-summary").textContent = pick(episode, "kicker");
    $("#edit-current-video-episode").hidden = true;
    const stage = $("#video-player-stage");
    stage.innerHTML = "";
    const video = document.createElement("video");
    video.src = resolveAsset(videoPath);
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    stage.appendChild(video);
    if (!videoDialog.open) videoDialog.showModal();
  }

  function closeVideoDialog() {
    const video = $("#video-player-stage video");
    if (video) video.pause();
    videoDialog.close();
  }

  async function editCurrentVideoEpisode() {
    closeVideoDialog();
    openEditor();
    await fillVideoEditor(activeVideoId);
    const section = $("#video-editor-section");
    section.open = true;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    $("#edit-video-title").focus();
  }

  async function openEpisode(id) {
    dialog.classList.remove("card-preview-mode");
    activeId = Number(id);
    const episode = episodes.find((item) => item.id === activeId);
    if (!episode) return;
    const sideLabel = currentLanguage === "en" ? (episode.side === "FACE" ? "FRONT" : "BACK") : episode.side;
    $("#dialog-kicker").textContent = `${currentLanguage === "en" ? "CARD" : "CARTE"} ${two(characterDisplayNumber(episode.id))} / 05 — ${sideLabel}`;
    $("#dialog-title").textContent = pick(episode, "title");
    $("#dialog-description").textContent = pick(episode, "description");
    const media = $("#dialog-media");
    media.innerHTML = "";
    media.appendChild(await mediaElement(episode, true));
    if (!dialog.open) dialog.showModal();
  }

  function closeDialog() {
    const video = $("#dialog-media video");
    if (video) video.pause();
    dialog.close();
    dialog.classList.remove("card-preview-mode");
  }

  function openEditor() {
    editor.classList.add("open");
    shade.classList.add("open");
    editor.setAttribute("aria-hidden", "false");
    fillEditor(activeId);
    fillVideoEditor(activeVideoId);
    renderApprovedPassportAdmin();
  }

  function closeEditor() {
    editor.classList.remove("open");
    shade.classList.remove("open");
    editor.setAttribute("aria-hidden", "true");
  }

  async function fillEditor(id) {
    activeId = Number(id);
    const episode = episodes.find((item) => item.id === activeId);
    $("#edit-episode").value = String(activeId);
    $("#edit-title").value = episode.title;
    $("#edit-kicker").value = episode.kicker;
    $("#edit-description").value = episode.description;
    $("#edit-title-en").value = episode.titleEn || episode.title;
    $("#edit-kicker-en").value = episode.kickerEn || episode.kicker;
    $("#edit-description-en").value = episode.descriptionEn || episode.description;
    pendingMedia = null;
    pendingMediaEn = null;
    $("#edit-media").value = "";
    $("#edit-media-en").value = "";
    const stored = await getStoredMedia(activeId);
    const storedEn = await getStoredMedia(`card-en-${activeId}`);
    $("#media-status").textContent = stored ? `Fichier personnalisé : ${stored.name || "média enregistré"}` : "Visuel original utilisé";
    $("#media-status-en").textContent = storedEn ? `English custom file: ${storedEn.name || "saved media"}` : "Carte anglaise ABDZ FAMILY utilisée";
  }

  async function fillVideoEditor(id) {
    activeVideoId = id ? Number(id) : null;
    const item = videoEpisodes.find((entry) => entry.id === activeVideoId);
    refreshVideoEpisodeSelect(activeVideoId);
    $("#edit-video-title").value = item?.title || "";
    $("#edit-video-summary").value = item?.summary || "";
    $("#edit-video-title-en").value = item?.titleEn || "";
    $("#edit-video-summary-en").value = item?.summaryEn || "";
    pendingVideoPoster = null;
    pendingVideoFile = null;
    $("#edit-video-poster").value = "";
    $("#edit-video-file").value = "";
    const poster = item ? await getStoredMedia(`video-poster-${activeVideoId}`) : null;
    const video = item ? await getStoredMedia(`video-file-${activeVideoId}`) : null;
    $("#video-poster-status").textContent = poster ? `Affiche personnalisée : ${poster.name || "image enregistrée"}` : "Affiche proposée utilisée";
    $("#video-file-status").textContent = video
      ? `Vidéo personnalisée : ${video.name || "fichier vidéo"}`
      : "Aucune vidéo enregistrée";
    $("#delete-video-episode").hidden = !item;
    $("#clear-video-file").hidden = !video;
  }

  function refreshVideoEpisodeSelect(selectedId = activeVideoId) {
    const select = $("#edit-video-episode");
    select.innerHTML = `<option value="">Nouvel épisode</option>${videoEpisodes.map((item, index) => `<option value="${item.id}">${two(index + 1)} — ${escapeHtml(item.title)}</option>`).join("")}`;
    select.value = selectedId ? String(selectedId) : "";
  }

  async function newVideoEpisode() {
    await fillVideoEditor("");
    $("#edit-video-title").focus();
  }

  async function saveEpisode() {
    const episode = episodes.find((item) => item.id === activeId);
    episode.title = $("#edit-title").value.trim() || episode.title;
    episode.kicker = $("#edit-kicker").value.trim();
    episode.description = $("#edit-description").value.trim();
    episode.titleEn = $("#edit-title-en").value.trim() || episode.titleEn || episode.title;
    episode.kickerEn = $("#edit-kicker-en").value.trim();
    episode.descriptionEn = $("#edit-description-en").value.trim();
    saveTextContent();
    if (pendingMedia) await setStoredMedia(activeId, pendingMedia);
    if (pendingMediaEn) await setStoredMedia(`card-en-${activeId}`, pendingMediaEn);
    pendingMedia = null;
    pendingMediaEn = null;
    await renderEpisodes();
    await fillEditor(activeId);
    setSaveStatus(`Carte ${two(activeId)} enregistrée`);
    showToast(`Carte ${two(activeId)} enregistrée`);
    if (dialog.open) await openEpisode(activeId);
  }

  async function saveVideoEpisode() {
    const title = $("#edit-video-title").value.trim();
    const titleEn = $("#edit-video-title-en").value.trim();
    if (!title || !titleEn) {
      showToast("Ajoute le titre français et le titre anglais");
      return;
    }
    let item = videoEpisodes.find((entry) => entry.id === activeVideoId);
    if (!item) {
      item = { id: Date.now(), title, summary: "", titleEn, summaryEn: "" };
      videoEpisodes.push(item);
      activeVideoId = item.id;
    }
    item.title = title;
    item.summary = $("#edit-video-summary").value.trim();
    item.titleEn = titleEn;
    item.summaryEn = $("#edit-video-summary-en").value.trim();
    saveVideoContent();
    if (pendingVideoPoster) await setStoredMedia(`video-poster-${activeVideoId}`, pendingVideoPoster);
    if (pendingVideoFile) await setStoredMedia(`video-file-${activeVideoId}`, pendingVideoFile);
    pendingVideoPoster = null;
    pendingVideoFile = null;
    await renderVideoEpisodes();
    await fillVideoEditor(activeVideoId);
    const displayNumber = videoDisplayNumber(activeVideoId);
    refreshVideoEpisodeSelect(activeVideoId);
    setSaveStatus(`Épisode ${two(displayNumber)} enregistré`);
    showToast(`Épisode ${two(displayNumber)} enregistré`);
    if (videoDialog.open) await openVideoEpisode(activeVideoId);
  }

  async function deleteVideoEpisode() {
    const item = videoEpisodes.find((entry) => entry.id === activeVideoId);
    if (!item || !confirm(`Supprimer l’épisode « ${item.title} » ?`)) return;
    await deleteStoredMedia(`video-poster-${item.id}`);
    await deleteStoredMedia(`video-file-${item.id}`);
    videoEpisodes = videoEpisodes.filter((entry) => entry.id !== item.id);
    saveVideoContent();
    activeVideoId = null;
    await renderVideoEpisodes();
    await fillVideoEditor("");
    setSaveStatus("Épisode supprimé");
    showToast("Épisode supprimé");
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
  }

  function setSaveStatus(message = "Tous les changements sont conservés") {
    const status = $("#save-status");
    if (!status) return;
    const time = new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
    status.textContent = `${message} • ${time}`;
  }

  async function saveAll() {
    const button = $("#save-all");
    button.disabled = true;
    button.textContent = "ENREGISTREMENT…";
    try {
      await saveGeneral();
      await saveEpisode();
      if (activeVideoId || $("#edit-video-title").value.trim() || $("#edit-video-title-en").value.trim()) await saveVideoEpisode();
      setSaveStatus("TOUT EST ENREGISTRÉ");
      showToast("Tous les changements sont enregistrés");
    } finally {
      button.disabled = false;
      button.textContent = "ENREGISTRER TOUT";
    }
  }

  function exportTexts() {
    const payload = {
      project: "ABDZ FAMILY — Saison 1",
      exportedAt: new Date().toISOString(),
      general,
      characters: episodes.map(({ id, title, kicker, description, titleEn, kickerEn, descriptionEn }) => ({ id, title, kicker, description, titleEn, kickerEn, descriptionEn })),
      episodes: videoEpisodes.map(({ id, title, summary, titleEn, summaryEn }) => ({ id, title, summary, titleEn, summaryEn })),
      customEpisodes
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ABDZ-FAMILLE-contenus.json";
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }

  async function importTexts(file) {
    try {
      const parsed = JSON.parse(await file.text());
      const list = Array.isArray(parsed) ? parsed : (parsed.characters || parsed.episodes);
      if (!Array.isArray(list)) throw new Error("Format incorrect");
      episodes = defaults.map((base) => ({ ...base, ...(list.find((item) => Number(item.id) === base.id) || {}), media: base.media, mediaEn: base.mediaEn }));
      if (!Array.isArray(parsed) && parsed.general) {
        general = { ...generalDefaults, ...parsed.general };
        saveGeneralContent();
        renderGeneralText();
      }
      if (!Array.isArray(parsed) && Array.isArray(parsed.characters) && Array.isArray(parsed.episodes)) {
        videoEpisodes = parsed.episodes.map((item, index) => ({
          id: Number(item.id) || Date.now() + index,
          title: item.title || `Épisode ${two(index + 1)}`,
          summary: item.summary || "",
          titleEn: item.titleEn || item.title || `Episode ${two(index + 1)}`,
          summaryEn: item.summaryEn || item.summary || ""
        }));
        saveVideoContent();
      }
      if (!Array.isArray(parsed) && Array.isArray(parsed.customEpisodes)) {
        customEpisodes = parsed.customEpisodes;
        saveCustomEpisodes();
        await renderCustomEpisodes();
        refreshCustomEpisodeSelect();
      }
      saveTextContent();
      await renderEpisodes();
      await renderVideoEpisodes();
      await fillEditor(activeId);
      await fillVideoEditor(activeVideoId);
      showToast("Textes importés");
    } catch (_) { showToast("Impossible d’importer ce fichier"); }
  }

  async function resetSeason() {
    if (!confirm("Réinitialiser tous les textes et médias personnalisés ?")) return;
    localStorage.removeItem(storageKey);
    localStorage.removeItem(generalStorageKey);
    localStorage.removeItem(videoStorageKey);
    localStorage.removeItem(characterOrderKey);
    localStorage.removeItem(customEpisodesKey);
    await clearAllMedia();
    episodes = structuredClone(defaults);
    videoEpisodes = structuredClone(videoDefaults);
    characterOrder = [3, 9, 5, 1, 7];
    customEpisodes = [];
    general = { ...generalDefaults };
    renderGeneralText();
    await renderBanner();
    await renderEpisodes();
    await renderCustomEpisodes();
    await renderVideoEpisodes();
    await fillEditor(1);
    await fillCustomEpisodeEditor("");
    await fillVideoEditor("");
    showToast("Saison réinitialisée");
  }

  function loadPassportSubmissions() {
    try {
      const saved = JSON.parse(localStorage.getItem(passportSubmissionsKey));
      return Array.isArray(saved) ? saved : [];
    } catch (_) { return []; }
  }

  function savePassportSubmissions(items) {
    localStorage.setItem(passportSubmissionsKey, JSON.stringify(items));
  }

  function loadPassportOrder() {
    try {
      const saved = JSON.parse(localStorage.getItem(passportOrderKey));
      return Array.isArray(saved) ? saved.map(Number) : [];
    } catch (_) { return []; }
  }

  function savePassportOrder(order) {
    localStorage.setItem(passportOrderKey, JSON.stringify(order));
  }

  function loadScenarios() {
    try {
      const saved = JSON.parse(localStorage.getItem(scenarioStorageKey));
      return Array.isArray(saved) ? saved : [];
    } catch (_) { return []; }
  }

  function saveScenarios(items) {
    localStorage.setItem(scenarioStorageKey, JSON.stringify(items));
  }

  function getPassportAccessCode() {
    return localStorage.getItem(passportAccessKey) || "ABDZ2026";
  }

  function updatePassportPreview() {
    const familyName = $("#passport-family-name").value.trim() || "NOM DE VOTRE FAMILLE";
    const name = $("#passport-name").value.trim() || "VOTRE NOM";
    $("#passport-preview-family").textContent = familyName;
    $("#passport-preview-family-back").textContent = familyName;
    $("#passport-preview-name").textContent = name;
    $("#passport-preview-name-back").textContent = name;
    $("#passport-preview-role").textContent = $("#passport-role").value.trim() || "Votre titre dans la famille";
    $("#passport-preview-qualities").textContent = $("#passport-qualities").value.trim() || "Votre pouvoir";
    $("#passport-preview-weaknesses").textContent = $("#passport-weaknesses").value.trim() || "Vos faiblesses";
    const quote = $("#passport-quote").value.trim() || "Votre phrase culte";
    $("#passport-preview-quote").textContent = `« ${quote} »`;
  }

  function showPassportPreviewImage(file, selector, key) {
    if (mediaUrls.has(key)) URL.revokeObjectURL(mediaUrls.get(key));
    const img = $(selector);
    if (!file) {
      img.removeAttribute("src");
      return;
    }
    const url = URL.createObjectURL(file);
    mediaUrls.set(key, url);
    img.src = url;
  }

  function unlockPassport() {
    const entered = $("#passport-code").value.trim();
    const expected = getPassportAccessCode().trim();
    const normalizedEntered = entered.toLocaleUpperCase("fr");
    const normalizedExpected = expected.toLocaleUpperCase("fr");
    const status = $("#passport-gate-status");
    const validTestCode = normalizedEntered === "ABDZ2026";
    if (!entered || (normalizedEntered !== normalizedExpected && !validTestCode)) {
      status.textContent = "Code incorrect. The Boss peut vérifier le code actif dans Mode édition → Passeport ABDZ.";
      return;
    }
    $("#passport-creator").hidden = false;
    $("#passport-gate").hidden = true;
    status.textContent = "";
    $("#passport-name").focus();
  }

  async function submitPassport(event) {
    event.preventDefault();
    const status = $("#passport-submit-status");
    if (!passportFaceFile || !passportBackFile) {
      status.textContent = "Ajoutez obligatoirement une image de face et une image de dos.";
      return;
    }
    const item = {
      id: Date.now(),
      familyName: $("#passport-family-name").value.trim(),
      name: $("#passport-name").value.trim(),
      role: $("#passport-role").value.trim(),
      qualities: $("#passport-qualities").value.trim(),
      weaknesses: $("#passport-weaknesses").value.trim(),
      quote: $("#passport-quote").value.trim(),
      status: "pending",
      submittedAt: new Date().toISOString()
    };
    if (!item.familyName || !item.name || !item.role || !item.qualities || !item.weaknesses || !item.quote || !$("#passport-consent").checked) {
      status.textContent = "Complétez tous les champs et confirmez l’autorisation des images.";
      return;
    }
    await setStoredMedia(`passport-face-${item.id}`, passportFaceFile);
    await setStoredMedia(`passport-back-${item.id}`, passportBackFile);
    const items = loadPassportSubmissions();
    items.push(item);
    savePassportSubmissions(items);
    $("#passport-form").reset();
    passportFaceFile = null;
    passportBackFile = null;
    showPassportPreviewImage(null, "#passport-face-preview", "passport-preview-face");
    showPassportPreviewImage(null, "#passport-back-preview", "passport-preview-back");
    updatePassportPreview();
    status.textContent = "Carte envoyée. Elle reste invisible jusqu’à la validation de The Boss.";
    await renderPassportAdminQueue();
  }

  async function passportImageUrl(id, side) {
    const key = `passport-${side}-${id}`;
    const stored = await getStoredMedia(key);
    if (!stored) return "";
    const urlKey = `passport-gallery-${side}-${id}`;
    if (mediaUrls.has(urlKey)) URL.revokeObjectURL(mediaUrls.get(urlKey));
    const url = URL.createObjectURL(stored.blob);
    mediaUrls.set(urlKey, url);
    return url;
  }

  async function renderApprovedPassportCards() {
    const gallery = $("#passport-approved-gallery");
    const approved = loadPassportSubmissions().filter((item) => item.status === "approved");
    gallery.innerHTML = "";
    if (!approved.length) {
      gallery.innerHTML = '<div class="passport-empty">Les premières cartes approuvées par The Boss apparaîtront ici.</div>';
      return;
    }
    const order = loadPassportOrder();
    approved.sort((a, b) => {
      const ai = order.indexOf(Number(a.id));
      const bi = order.indexOf(Number(b.id));
      return (ai < 0 ? Number.MAX_SAFE_INTEGER : ai) - (bi < 0 ? Number.MAX_SAFE_INTEGER : bi) || Number(a.id) - Number(b.id);
    });
    savePassportOrder(approved.map((item) => Number(item.id)));
    const groups = new Map();
    approved.forEach((item) => {
      const familyName = item.familyName || "Famille invitée";
      if (!groups.has(familyName)) groups.set(familyName, []);
      groups.get(familyName).push(item);
    });
    for (const [familyName, members] of groups) {
      const family = document.createElement("section");
      family.className = "accepted-family-group";
      family.innerHTML = `<h3>${escapeHtml(familyName)}</h3><div class="accepted-family-members"></div>`;
      const membersGrid = $(".accepted-family-members", family);
      for (const item of members) {
        const faceUrl = await passportImageUrl(item.id, "face");
        const backUrl = await passportImageUrl(item.id, "back");
        const card = document.createElement("article");
        card.className = "passport-member-card";
        card.tabIndex = 0;
        card.draggable = true;
        card.dataset.side = "face";
        card.dataset.passportId = String(item.id);
        card.innerHTML = `<img src="${faceUrl}" alt="Carte de ${escapeHtml(item.name)}"><div><small>${escapeHtml(familyName)}</small><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.role)}</p></div>`;
        const flip = () => {
          if (passportWasDragged) return;
          const back = card.dataset.side === "face";
          card.dataset.side = back ? "back" : "face";
          $("img", card).src = back ? backUrl : faceUrl;
          $("p", card).textContent = back ? `Faiblesses : ${item.weaknesses} — « ${item.quote} »` : item.role;
        };
        card.addEventListener("click", flip);
        card.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); flip(); } });
        card.addEventListener("dragstart", () => {
          draggedPassportId = Number(item.id);
          passportWasDragged = true;
          card.classList.add("dragging");
        });
        card.addEventListener("dragover", (event) => event.preventDefault());
        card.addEventListener("drop", async (event) => {
          event.preventDefault();
          if (!draggedPassportId || draggedPassportId === Number(item.id)) return;
          const ordered = approved.map((entry) => Number(entry.id));
          const from = ordered.indexOf(draggedPassportId);
          const to = ordered.indexOf(Number(item.id));
          ordered.splice(to, 0, ordered.splice(from, 1)[0]);
          savePassportOrder(ordered);
          await renderApprovedPassportCards();
        });
        card.addEventListener("dragend", () => {
          card.classList.remove("dragging");
          draggedPassportId = null;
          setTimeout(() => { passportWasDragged = false; }, 0);
        });
        membersGrid.appendChild(card);
      }
      gallery.appendChild(family);
    }
    renderScenarioCardOptions();
  }

  async function moderatePassport(id, decision) {
    const items = loadPassportSubmissions();
    const item = items.find((entry) => entry.id === Number(id));
    if (!item) return;
    item.status = decision;
    item.reviewedAt = new Date().toISOString();
    savePassportSubmissions(items);
    await renderPassportAdminQueue();
    await renderApprovedPassportCards();
    renderApprovedPassportAdmin();
    renderScenarioCardOptions();
    showToast(decision === "approved" ? "Carte approuvée par The Boss" : "Carte refusée");
  }

  async function renderPassportAdminQueue() {
    const queue = $("#passport-admin-queue");
    const pending = loadPassportSubmissions().filter((item) => item.status === "pending");
    queue.innerHTML = "";
    if (!pending.length) {
      queue.innerHTML = '<p class="media-status">Aucune carte en attente.</p>';
      return;
    }
    pending.forEach((item) => {
      const row = document.createElement("div");
      row.className = "passport-admin-item";
      row.innerHTML = `<strong>${escapeHtml(item.familyName || "Famille invitée")} — ${escapeHtml(item.name)}</strong><p>${escapeHtml(item.role)}<br>Qualités : ${escapeHtml(item.qualities)}<br>Faiblesses : ${escapeHtml(item.weaknesses)}<br>« ${escapeHtml(item.quote)} »</p><div class="passport-admin-actions"><button class="approve" type="button">Approuver</button><button class="reject" type="button">Refuser</button></div>`;
      $(".approve", row).addEventListener("click", () => moderatePassport(item.id, "approved"));
      $(".reject", row).addEventListener("click", () => moderatePassport(item.id, "rejected"));
      queue.appendChild(row);
    });
  }

  function renderApprovedPassportAdmin() {
    const container = $("#passport-approved-admin");
    if (!container) return;
    const approved = loadPassportSubmissions().filter((item) => item.status === "approved");
    container.innerHTML = "";
    if (!approved.length) {
      container.innerHTML = '<p class="media-status">Aucune carte acceptée.</p>';
      return;
    }
    approved.forEach((item) => {
      const row = document.createElement("div");
      row.className = "passport-admin-item";
      row.innerHTML = `<strong>${escapeHtml(item.familyName || "Famille invitée")} — ${escapeHtml(item.name)}</strong><p>${escapeHtml(item.role)}</p><div class="passport-admin-actions"><button class="delete" type="button">Supprimer cette carte</button></div>`;
      $(".delete", row).addEventListener("click", () => deletePassport(item.id));
      container.appendChild(row);
    });
  }

  async function deletePassport(id) {
    const items = loadPassportSubmissions();
    const item = items.find((entry) => Number(entry.id) === Number(id));
    if (!item) return;
    const label = `${item.familyName || "Famille invitée"} — ${item.name}`;
    if (!window.confirm(`Supprimer définitivement la carte « ${label} » ?`)) return;

    savePassportSubmissions(items.filter((entry) => Number(entry.id) !== Number(id)));
    savePassportOrder(loadPassportOrder().filter((savedId) => Number(savedId) !== Number(id)));
    await deleteStoredMedia(`passport-face-${id}`);
    await deleteStoredMedia(`passport-back-${id}`);
    ["face", "back"].forEach((side) => {
      const urlKey = `passport-gallery-${side}-${id}`;
      if (mediaUrls.has(urlKey)) URL.revokeObjectURL(mediaUrls.get(urlKey));
      mediaUrls.delete(urlKey);
    });

    await renderApprovedPassportCards();
    renderApprovedPassportAdmin();
    renderScenarioCardOptions();
    showToast("Carte supprimée");
  }

  function scenarioCardCatalog() {
    const official = characterOrder.map((id) => episodes.find((item) => item.id === id)).filter(Boolean).map((item) => ({
      key: `official-${item.id}`,
      familyName: "ABDZ FAMILY",
      name: item.title,
      role: item.kicker
    }));
    const guests = loadPassportSubmissions().filter((item) => item.status === "approved").map((item) => ({
      key: `guest-${item.id}`,
      familyName: item.familyName || "Famille invitée",
      name: item.name,
      role: item.role
    }));
    return [...official, ...guests];
  }

  function scenarioCardByKey(key) {
    return scenarioCardCatalog().find((item) => item.key === key) || null;
  }

  function renderScenarioCardOptions() {
    const first = $("#scenario-card-a");
    const second = $("#scenario-card-b");
    if (!first || !second) return;
    const cards = scenarioCardCatalog();
    const previousFirst = first.value;
    const previousSecond = second.value;
    const options = cards.map((item) => `<option value="${item.key}">${escapeHtml(item.familyName)} — ${escapeHtml(item.name)}</option>`).join("");
    first.innerHTML = `<option value="">Choisissez la première carte</option>${options}`;
    second.innerHTML = `<option value="">Choisissez la deuxième carte</option>${options}`;
    first.value = cards.some((item) => item.key === previousFirst) ? previousFirst : "";
    second.value = cards.some((item) => item.key === previousSecond) ? previousSecond : "";
    updateScenarioPairPreview();
  }

  function updateScenarioPairPreview() {
    const preview = $("#scenario-pair-preview");
    if (!preview) return;
    const first = scenarioCardByKey($("#scenario-card-a").value);
    const second = scenarioCardByKey($("#scenario-card-b").value);
    if (!first && !second) {
      preview.innerHTML = "<p>Sélectionnez deux cartes pour ouvrir leur rencontre.</p>";
      return;
    }
    const cardMarkup = (item, label) => item
      ? `<article><small>${label}</small><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.familyName)} · ${escapeHtml(item.role)}</span></article>`
      : `<article class="empty"><small>${label}</small><strong>À choisir</strong></article>`;
    preview.innerHTML = `${cardMarkup(first, "CARTE A")}<b>×</b>${cardMarkup(second, "CARTE Z")}`;
  }

  function submitScenario(event) {
    event.preventDefault();
    const status = $("#scenario-submit-status");
    const first = scenarioCardByKey($("#scenario-card-a").value);
    const second = scenarioCardByKey($("#scenario-card-b").value);
    if (!first || !second) {
      status.textContent = "Choisissez obligatoirement deux cartes.";
      return;
    }
    if (first.key === second.key) {
      status.textContent = "Choisissez deux cartes différentes pour créer une rencontre.";
      return;
    }
    const item = {
      id: Date.now(),
      author: $("#scenario-author").value.trim(),
      title: $("#scenario-title").value.trim(),
      summary: $("#scenario-summary").value.trim(),
      story: $("#scenario-story").value.trim(),
      cardA: first,
      cardB: second,
      status: "pending",
      submittedAt: new Date().toISOString()
    };
    if (!item.author || !item.title || !item.summary || !item.story) {
      status.textContent = "Complétez votre nom, le titre, le résumé et le scénario.";
      return;
    }
    const items = loadScenarios();
    items.push(item);
    saveScenarios(items);
    $("#scenario-form").reset();
    $("#scenario-card-a").value = "";
    $("#scenario-card-b").value = "";
    updateScenarioPairPreview();
    status.textContent = "Scénario envoyé. Il attend maintenant la décision de The Boss.";
    renderScenarioAdminQueue();
  }

  function moderateScenario(id, decision) {
    const items = loadScenarios();
    const item = items.find((entry) => Number(entry.id) === Number(id));
    if (!item) return;
    item.status = decision;
    item.reviewedAt = new Date().toISOString();
    saveScenarios(items);
    renderScenarioAdminQueue();
    renderGuestEpisodes();
    showToast(decision === "approved" ? "Scénario accepté : futur épisode invité" : "Scénario refusé");
  }

  function renderScenarioAdminQueue() {
    const queue = $("#scenario-admin-queue");
    if (!queue) return;
    const pending = loadScenarios().filter((item) => item.status === "pending");
    queue.innerHTML = "";
    if (!pending.length) {
      queue.innerHTML = '<p class="media-status">Aucun scénario en attente.</p>';
      return;
    }
    pending.forEach((item) => {
      const row = document.createElement("div");
      row.className = "scenario-admin-item";
      row.innerHTML = `<strong>${escapeHtml(item.title)}</strong><small>Proposé par ${escapeHtml(item.author)}</small><p><b>${escapeHtml(item.cardA.name)}</b> × <b>${escapeHtml(item.cardB.name)}</b><br>${escapeHtml(item.summary)}</p><details><summary>Lire le scénario complet</summary><div>${textWithBreaks(item.story)}</div></details><div class="passport-admin-actions"><button class="approve" type="button">Accepter comme futur épisode</button><button class="reject" type="button">Refuser</button></div>`;
      $(".approve", row).addEventListener("click", () => moderateScenario(item.id, "approved"));
      $(".reject", row).addEventListener("click", () => moderateScenario(item.id, "rejected"));
      queue.appendChild(row);
    });
  }

  function renderGuestEpisodes() {
    const grid = $("#guest-episode-grid");
    if (!grid) return;
    const approved = loadScenarios().filter((item) => item.status === "approved");
    grid.innerHTML = "";
    if (!approved.length) {
      grid.innerHTML = '<div class="guest-episode-empty"><strong>ESPACE PRÊT</strong><p>Les scénarios acceptés et leurs futures vidéos apparaîtront ici.</p></div>';
      return;
    }
    approved.forEach((item, index) => {
      const card = document.createElement("article");
      card.className = "guest-episode-card";
      card.innerHTML = `<div class="guest-video-placeholder"><span>▶</span><small>VIDÉO À PRODUIRE</small></div><div><small>ÉPISODE INVITÉ ${two(index + 1)}</small><h3>${escapeHtml(item.title)}</h3><p class="guest-pair">${escapeHtml(item.cardA.name)} × ${escapeHtml(item.cardB.name)}</p><p>${escapeHtml(item.summary)}</p><strong>${escapeHtml(item.author)}</strong></div>`;
      grid.appendChild(card);
    });
  }

  function initFamilyGame() {
    $("#scenario-card-a").addEventListener("change", updateScenarioPairPreview);
    $("#scenario-card-b").addEventListener("change", updateScenarioPairPreview);
    $("#scenario-form").addEventListener("submit", submitScenario);
    renderScenarioCardOptions();
    renderScenarioAdminQueue();
    renderGuestEpisodes();
  }

  function savePassportCode() {
    const value = $("#edit-passport-code").value.trim();
    if (!value) return showToast("Choisissez un code d’invitation");
    localStorage.setItem(passportAccessKey, value);
    showToast("Code Passeport ABDZ enregistré");
  }

  async function initPassport() {
    $("#edit-passport-code").value = getPassportAccessCode();
    $("#passport-code-visibility").addEventListener("click", () => {
      const input = $("#passport-code");
      const button = $("#passport-code-visibility");
      const visible = input.type === "text";
      input.type = visible ? "password" : "text";
      button.setAttribute("aria-pressed", String(!visible));
      button.setAttribute("aria-label", visible ? "Afficher le code" : "Masquer le code");
      button.textContent = visible ? "👁" : "🙈";
      input.focus();
    });
    $("#passport-unlock").addEventListener("click", unlockPassport);
    $("#passport-code").addEventListener("keydown", (event) => { if (event.key === "Enter") unlockPassport(); });
    $("#passport-form").addEventListener("submit", submitPassport);
    ["#passport-family-name", "#passport-name", "#passport-qualities", "#passport-weaknesses", "#passport-quote"].forEach((selector) => $(selector).addEventListener("input", updatePassportPreview));
    $("#passport-role").addEventListener("change", updatePassportPreview);
    $("#passport-face-image").addEventListener("change", (event) => {
      passportFaceFile = event.target.files[0] || null;
      showPassportPreviewImage(passportFaceFile, "#passport-face-preview", "passport-preview-face");
    });
    $("#passport-back-image").addEventListener("change", (event) => {
      passportBackFile = event.target.files[0] || null;
      showPassportPreviewImage(passportBackFile, "#passport-back-preview", "passport-preview-back");
    });
    $("#passport-flip").addEventListener("click", () => {
      const card = $("#passport-preview-card");
      const back = card.dataset.side === "face";
      card.dataset.side = back ? "back" : "face";
      $("#passport-flip").textContent = back ? "↻ Revoir la face" : "↻ Voir le dos";
    });
    $("#save-passport-code").addEventListener("click", savePassportCode);
    updatePassportPreview();
    await renderPassportAdminQueue();
    await renderApprovedPassportCards();
    renderApprovedPassportAdmin();
  }

  function bindEvents() {
    document.querySelectorAll("[data-open-episode]").forEach((button) => button.addEventListener("click", () => openEpisode(button.dataset.openEpisode)));
    document.querySelectorAll("[data-open-video]").forEach((button) => button.addEventListener("click", () => openVideoEpisode(button.dataset.openVideo)));
    $("#dialog-close").addEventListener("click", closeDialog);
    dialog.addEventListener("click", (event) => {
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDialog();
    });
    $("#video-dialog-close").addEventListener("click", closeVideoDialog);
    videoDialog.addEventListener("click", (event) => {
      const bounds = videoDialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeVideoDialog();
    });
    $("#edit-current-video-episode").addEventListener("click", editCurrentVideoEpisode);
    $("#edit-toggle").addEventListener("click", openEditor);
    $("#language-toggle").addEventListener("click", switchLanguage);
    $("#editor-close").addEventListener("click", closeEditor);
    shade.addEventListener("click", closeEditor);
    $("#edit-episode").addEventListener("change", (event) => fillEditor(event.target.value));
    $("#edit-video-episode").addEventListener("change", (event) => fillVideoEditor(event.target.value));
    $("#new-video-episode").addEventListener("click", newVideoEpisode);
    $("#delete-video-episode").addEventListener("click", deleteVideoEpisode);
    $("#move-character-left").addEventListener("click", () => moveCharacter(activeId, -1));
    $("#move-character-right").addEventListener("click", () => moveCharacter(activeId, 1));
    $("#edit-media").addEventListener("change", (event) => {
      pendingMedia = event.target.files[0] || null;
      $("#media-status").textContent = pendingMedia ? `Prêt à enregistrer : ${pendingMedia.name}` : "Visuel original utilisé";
    });
    $("#edit-media-en").addEventListener("change", (event) => {
      pendingMediaEn = event.target.files[0] || null;
      $("#media-status-en").textContent = pendingMediaEn ? `Ready to save: ${pendingMediaEn.name}` : "Carte anglaise ABDZ FAMILY utilisée";
    });
    $("#edit-banner").addEventListener("change", (event) => {
      pendingBanner = event.target.files[0] || null;
      $("#banner-status").textContent = pendingBanner ? `Prête à enregistrer : ${pendingBanner.name}` : "Bannière Famille ABDZ utilisée";
    });
    $("#edit-banner-en").addEventListener("change", (event) => {
      pendingBannerEn = event.target.files[0] || null;
      $("#banner-status-en").textContent = pendingBannerEn ? `Ready to save: ${pendingBannerEn.name}` : "Bannière anglaise ABDZ FAMILY utilisée";
    });
    $("#save-general").addEventListener("click", saveGeneral);
    $("#save-all").addEventListener("click", saveAll);
    $("#clear-banner").addEventListener("click", async () => {
      await deleteStoredMedia("hero-banner");
      pendingBanner = null;
      $("#edit-banner").value = "";
      await renderBanner();
      showToast("Bannière originale restaurée");
    });
    $("#clear-banner-en").addEventListener("click", async () => {
      await deleteStoredMedia("hero-banner-en");
      pendingBannerEn = null;
      $("#edit-banner-en").value = "";
      await renderBanner();
      showToast("Bannière anglaise originale restaurée");
    });
    $("#save-episode").addEventListener("click", saveEpisode);
    $("#new-custom-episode").addEventListener("click", () => fillCustomEpisodeEditor(""));
    $("#edit-custom-episode").addEventListener("change", (event) => fillCustomEpisodeEditor(event.target.value));
    $("#edit-custom-face").addEventListener("change", (event) => {
      pendingCustomFace = event.target.files[0] || null;
      $("#custom-face-status").textContent = pendingCustomFace ? `Prête à enregistrer : ${pendingCustomFace.name}` : "Aucune face sélectionnée";
    });
    $("#edit-custom-back").addEventListener("change", (event) => {
      pendingCustomBack = event.target.files[0] || null;
      $("#custom-back-status").textContent = pendingCustomBack ? `Prêt à enregistrer : ${pendingCustomBack.name}` : "Aucun dos sélectionné";
    });
    $("#edit-custom-video").addEventListener("change", (event) => {
      pendingCustomVideo = event.target.files[0] || null;
      $("#custom-video-status").textContent = pendingCustomVideo ? `Prête à enregistrer : ${pendingCustomVideo.name}` : "Aucune vidéo sélectionnée";
    });
    $("#save-custom-episode").addEventListener("click", saveCustomEpisode);
    $("#delete-custom-episode").addEventListener("click", deleteCustomEpisode);
    $("#edit-video-poster").addEventListener("change", (event) => {
      pendingVideoPoster = event.target.files[0] || null;
      $("#video-poster-status").textContent = pendingVideoPoster ? `Prête à enregistrer : ${pendingVideoPoster.name}` : "Affiche proposée utilisée";
    });
    $("#edit-video-file").addEventListener("change", (event) => {
      pendingVideoFile = event.target.files[0] || null;
      $("#video-file-status").textContent = pendingVideoFile ? `Prête à enregistrer : ${pendingVideoFile.name}` : "Aucune vidéo enregistrée";
    });
    $("#save-video-episode").addEventListener("click", saveVideoEpisode);
    $("#clear-video-poster").addEventListener("click", async () => {
      await deleteStoredMedia(`video-poster-${activeVideoId}`);
      pendingVideoPoster = null;
      await renderVideoEpisodes();
      await fillVideoEditor(activeVideoId);
      showToast("Affiche proposée restaurée");
    });
    $("#clear-video-file").addEventListener("click", async () => {
      await deleteStoredMedia(`video-file-${activeVideoId}`);
      pendingVideoFile = null;
      await fillVideoEditor(activeVideoId);
      if (videoDialog.open) await openVideoEpisode(activeVideoId);
      showToast("Vidéo retirée");
    });
    $("#clear-media").addEventListener("click", async () => {
      await deleteStoredMedia(activeId);
      pendingMedia = null;
      await renderEpisodes();
      await fillEditor(activeId);
      showToast("Visuel original restauré");
    });
    $("#clear-media-en").addEventListener("click", async () => {
      await deleteStoredMedia(`card-en-${activeId}`);
      pendingMediaEn = null;
      await renderEpisodes();
      await fillEditor(activeId);
      if (dialog.open) await openEpisode(activeId);
      showToast("Carte anglaise originale restaurée");
    });
    $("#export-content").addEventListener("click", exportTexts);
    $("#import-content").addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) importTexts(file);
      event.target.value = "";
    });
    $("#reset-content").addEventListener("click", resetSeason);
    ["#edit-hero-title", "#edit-hero-copy", "#edit-letter-title", "#edit-letter-copy", "#edit-family-message-title", "#edit-family-message-copy", "#edit-family-message-signature", "#edit-finale-eyebrow", "#edit-finale-title", "#edit-finale-copy", "#edit-hero-title-en", "#edit-hero-copy-en", "#edit-letter-title-en", "#edit-letter-copy-en", "#edit-family-message-title-en", "#edit-family-message-copy-en", "#edit-family-message-signature-en", "#edit-finale-eyebrow-en", "#edit-finale-title-en", "#edit-finale-copy-en"].forEach((selector) => {
      $(selector).addEventListener("change", saveGeneral);
    });
    ["#edit-title", "#edit-kicker", "#edit-description", "#edit-title-en", "#edit-kicker-en", "#edit-description-en"].forEach((selector) => {
      $(selector).addEventListener("change", saveEpisode);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && editor.classList.contains("open")) closeEditor();
    });
  }

  async function init() {
    const select = $("#edit-episode");
    select.innerHTML = episodes.map((ep) => `<option value="${ep.id}">${two(characterDisplayNumber(ep.id))} — ${escapeHtml(ep.title)} (${ep.side})</option>`).join("");
    refreshVideoEpisodeSelect();
    bindEvents();
    updateStaticLanguage();
    renderGeneralText();
    await renderBanner();
    await renderEpisodes();
    refreshCustomEpisodeSelect();
    await renderCustomEpisodes();
    await fillCustomEpisodeEditor("");
    await renderVideoEpisodes();
    await fillVideoEditor("");
    await initPassport();
    initFamilyGame();
  }

  init();
})();
