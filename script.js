// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Hero slider (simple fade)
const slider = document.querySelector('.hero-slider');
if (slider) {
  const slides = [...slider.querySelectorAll('.slide')];
  let i = 0;
  const interval = Number(slider.dataset.interval || 5000);
  function show(idx){
    slides.forEach((s, k) => s.classList.toggle('active', k === idx));
  }
  show(0);
  if (slider.dataset.autoplay === 'true'){
    setInterval(() => { i = (i + 1) % slides.length; show(i); }, interval);
  }
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

