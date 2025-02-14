// Gestion du chargement des images
document.addEventListener("DOMContentLoaded", () => {
  // Gestion du chargement progressif des images
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.classList.add("opacity-0", "transition-opacity", "duration-500");
    if (img.complete) {
      img.classList.remove("opacity-0");
    } else {
      img.addEventListener("load", () => {
        img.classList.remove("opacity-0");
      });
    }
  });

  // Animation au scroll pour les sections d'images
  const sections = document.querySelectorAll("[data-aos]");
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
        entry.target.classList.remove("opacity-0", "translate-y-10");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.classList.add("transition-all", "duration-700", "ease-out");
    observer.observe(section);
  });

  // Smooth scroll pour les liens d'ancrage
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Gestion du menu responsive (si ajouté ultérieurement)
const toggleMenu = () => {
  const nav = document.querySelector(".nav-menu");
  if (nav) {
    nav.classList.toggle("active");
  }
};

// Optimisation des performances lors du redimensionnement
let resizeTimer;
window.addEventListener("resize", () => {
  // Ajouter une classe pour désactiver les transitions pendant le redimensionnement
  document.body.classList.add("resize-transition-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-transition-stopper");
  }, 400);
});
