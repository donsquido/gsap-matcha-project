gsap.registerPlugin(ScrollTrigger);

/* HERO PARALLAX */
gsap.to(".hero", {
  backgroundPosition: "50% 30%",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

/* HERO (soft entry) */
gsap.from(".hero", {
  scale: 1.05,
  duration: 1.2,
  ease: "power2.out"
});

gsap.from(".hero h1", {
  opacity: 0,
  y: 40,
  duration: 1
});

gsap.from(".hero p", {
  opacity: 0,
  y: 20,
  delay: 0.3,
  duration: 1
});

/* IMAGE ZOOM SCROLL */
/* IMAGE ZOOM SCROLL (FIXED FOR ALL IMAGES) */
gsap.utils.toArray(".img-wrapper img").forEach((img) => {
  gsap.from(img, {
    scale: 1.2,
    scrollTrigger: {
      trigger: img,
      start: "top 85%",
      scrub: true
    }
  });
});

/* INTRO */
gsap.from(".intro .text", {
  scrollTrigger: {
    trigger: ".intro",
    start: "top 80%",
  },
  opacity: 0,
  y: 40,
  duration: 0.8
});

/* SPLIT SECTIONS */
gsap.utils.toArray(".info-section").forEach((section, i) => {
  const dir = i % 2 === 0 ? -60 : 60;

  gsap.from(section.querySelector(".text"), {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    x: dir,
    opacity: 0,
    duration: 1
  });

  gsap.from(section.querySelector(".image"), {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    x: -dir,
    opacity: 0,
    duration: 1
  });
});
gsap.from(".grid-item", {
  scrollTrigger: {
    trigger: ".image-grid",
    start: "top 80%",
  },
  opacity: 0,
  y: 40,
  stagger: 0.2,
  duration: 0.8
});

/* PRODUCTS (stagger) */
gsap.from(".product-card", {
  scrollTrigger: {
    trigger: ".products",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  stagger: 0.25,
  duration: 0.9,
  ease: "power2.out"
});

const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";

    modalImg.src = card.dataset.img;
    modalTitle.innerText = card.dataset.title;
    modalPrice.innerText = card.dataset.price;
    modalDesc.innerText = card.dataset.desc;
  });
});

/* CLOSE BUTTON */
closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  modal.style.display = "none";
});

/* prevent closing when clicking inside */
document.querySelector(".modal-content").addEventListener("click", (e) => {
  e.stopPropagation();
});

/* click outside closes */
modal.addEventListener("click", () => {
  modal.style.display = "none";
});

/* animation organic hojicha */
gsap.from(".business-supplier .image", {
  scrollTrigger: {
    trigger: ".business-supplier",
    start: "top 80%",
  },
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".matcha-recipes .recipe-card", {
  scrollTrigger: {
    trigger: ".matcha-recipes",
    start: "top 80%",
  },
  y: 80,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out"
});



const text = document.querySelector(".reveal-text");

const letters = text.textContent.split("");
text.textContent = "";

letters.forEach(letter => {
  const span = document.createElement("span");
  span.textContent = letter;
  span.style.display = "inline-block";
  span.style.opacity = 0;
  text.appendChild(span);
});

gsap.to(".reveal-text span", {
  scrollTrigger: {
    trigger: ".recipes-intro",
    start: "top 80%",
  },
  y: 0,
  opacity: 1,
  stagger: 0.05,
  duration: 0.4,
  ease: "power2.out",
  from: { y: 20 }
});