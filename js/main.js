/*---------------- Menu Show ----------------*/
const navMenu = document.getElementById("navMenu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*---------------- menu hiden ----------------*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*---------------- Remove mobile menu ----------------*/
const navLink = document.querySelectorAll(".navLink");

function linkAction() {
  const navMenu = document.getElementById("navMenu");
  // When we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*---------------- Change background Image ----------------*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 30 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 30) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*---------------- Swiper Product ----------------*/

const root1 = document.querySelector(".root1");
const root2 = document.querySelector(".root2");
const root3 = document.querySelector(".root3");

const fetchData = async () => {
  try {
    const response = await fetch("https://api-storeg-emperial.vercel.app/slider");
    const data = await response.json();
    return data;
    
  } catch (error) {
    const errorProduct = document.getElementById("Product");
    errorProduct.innerHTML = `<p>Error: ${error.message}</p>`;
    return [];
  }
};

const populateRoot1 = (data) => {
  let html = "";
  data.forEach((elem) => {
    html += `<image src="${elem.id1}" alt="" />`;
  });
  root1.innerHTML = html;
};

const populateRoot2 = (data) => {
  let html = "";
  data.forEach((elem) => {
    html += `<image src="${elem.id2}" alt="" />`;
  });
  root2.innerHTML = html;
};

const populateRoot3 = (data) => {
  let html = "";
  data.forEach((elem) => {
    html += `<image src="${elem.id3}" alt="" />`;
  });
  root3.innerHTML = html;
};

fetchData().then((data) => {
  populateRoot1(data);
  populateRoot2(data);
  populateRoot3(data);
});


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*---------------- Product ----------------*/
const fetchPlaceData = async () => {
  try {
    const response = await fetch("https://api-storeg-emperial.vercel.app/places");
    const data = await response.json();

    return data;
  } catch (error) {
    const errorContainer = document.getElementById("error-container");
    errorContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    return [];
  }
};

function createPlaceCard(place) {
  const card = document.createElement("div");
  card.classList.add("place_card");

  const img = document.createElement("img");
  img.src = place.imgSrc;
  img.alt = place.title;
  img.classList.add("place_img");
  card.appendChild(img);

  const content = document.createElement("div");
  content.classList.add("place_content");

  // Card Detail

  const rating = document.createElement("span");
  rating.classList.add("place_rating");
  rating.textContent = `Rating: ${place.rating}`;
  content.appendChild(rating);

  const title = document.createElement("h3");
  title.classList.add("place_title");
  title.textContent = place.title;
  content.appendChild(title);

  const subtitle = document.createElement("p");
  subtitle.classList.add("place_subtitle");
  subtitle.textContent = place.subtitle;
  content.appendChild(subtitle);

  const price = document.createElement("span");
  price.classList.add("place_price");
  price.textContent = `Price: ${place.price}`;
  content.appendChild(price);

  card.appendChild(content);

  const button = document.createElement("button");
  button.classList.add("button", "button--flex", "place_button");
  button.innerHTML = '<i class="ri-arrow-right-line"></i>';
  card.appendChild(button);

  return card;
}

async function displayPlaceCards() {
  const placeContainer = document.querySelector(".place_container");
  const placeData = await fetchPlaceData();

  const placeCards = placeData.map((place) => createPlaceCard(place));
  placeCards.forEach((card) => placeContainer.appendChild(card));
}

window.addEventListener("DOMContentLoaded", displayPlaceCards);

/*---------------- Video ----------------*/
const videoFile = document.getElementById("video-file");
const videoButton = document.getElementById("video-button");
const videoIcon = document.getElementById("video-icon");

function playPause() {
  if (videoFile.paused) {

    videoFile.play();

    videoIcon.classList.add("ri-pause-line");
    videoIcon.classList.remove("ri-play-line");
  } else {

    videoFile.pause();

    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
  }
}
videoButton.addEventListener("click", playPause);

function finalVideo() {

  videoIcon.classList.remove("ri-pause-line");
  videoIcon.classList.add("ri-play-line");
}

videoFile.addEventListener("ended", finalVideo);

/*---------------- Show Scroll up ----------------*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*---------------- Scroll section Active link ----------------*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.navMenu a[href="#${sectionId}"]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.navMenu a[href="#${sectionId}"]`)
        .classList.remove("active-link");
    }
    
  });
}
window.addEventListener("scroll", scrollActive);



/*---------------- Scroll reveal Animation ----------------*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

sr.reveal(
  `.homeData, .homesocial-link, .homeinfo,
           
           .experienceData, .experience_overlay,
           .place_card,
           .sponsor_content,
           .footer_data, .footer_rights`,
  {
    origin: "top",
    interval: 100,
  }
);

sr.reveal(
  `.aboutData, 
           .video_description,
           .subscribe_description`,
  {
    origin: "left",
  }
);

sr.reveal(
  `.about_img-overlay, 
           .video_content,
           .subscribe_form`,
  {
    origin: "right",
    interval: 100,
  }
);

/*---------------- Dark Light Theme ----------------*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
