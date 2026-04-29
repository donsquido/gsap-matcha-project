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
