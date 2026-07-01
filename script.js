document.getElementById('year').textContent = new Date().getFullYear();

const heroImg = document.querySelector('.hero__img');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroImg && !prefersReducedMotion) {
  let ticking = false;

  const applyParallax = () => {
    const offset = window.scrollY * 0.35;
    heroImg.style.transform = `translateY(${offset}px)`;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(applyParallax);
      ticking = true;
    }
  });
}

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('is-open');
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navMenu.classList.remove('is-open'));
});

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = '¡Gracias! Recibimos tu mensaje y te contactaremos a la brevedad.';
  contactForm.reset();
});
