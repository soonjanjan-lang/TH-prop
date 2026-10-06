// ===== Theme toggle (remembers choice) =====
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  const isDark = root.dataset.theme
    ? root.dataset.theme === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  const next = isDark ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// ===== Mobile menu =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

function setMenu(open) {
  navLinks.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', open);
  burger.textContent = open ? '✕' : '☰';
}
burger.addEventListener('click', () => setMenu(!navLinks.classList.contains('is-open')));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));

// ===== Nav border + back-to-top on scroll =====
const nav = document.querySelector('.nav');
const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 10);
  toTop.classList.toggle('is-visible', window.scrollY > 600);
}, { passive: true });

// ===== Highlight the nav link for the section in view =====
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.querySelectorAll('a').forEach(a =>
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id)
    );
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => sectionObserver.observe(s));

// ===== Reveal on scroll, skill bars, counters =====
function reveal(el) {
  el.classList.add('is-visible');
  el.querySelectorAll('.bar i').forEach(bar => { bar.style.width = bar.dataset.width + '%'; });
  el.querySelectorAll('[data-count]').forEach(animateCount);
}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    reveal(entry.target);
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

function animateCount(el) {
  const target = Number(el.dataset.count);
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ===== Typing effect for the role line =====
const roles = ['Academic & Researcher', 'Economist', 'Research Methodology Educator', 'Course Coordinator, BEER3043'];
const typed = document.getElementById('typed');
let roleIndex = 0, charIndex = 0, deleting = false;

function type() {
  const word = roles[roleIndex];
  typed.textContent = word.slice(0, charIndex);
  if (!deleting && charIndex < word.length) { charIndex++; setTimeout(type, 70); }
  else if (!deleting) { deleting = true; setTimeout(type, 1800); }
  else if (charIndex > 0) { charIndex--; setTimeout(type, 35); }
  else { deleting = false; roleIndex = (roleIndex + 1) % roles.length; setTimeout(type, 300); }
}
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) type();

// ===== Publication filters =====
const chips = document.querySelectorAll('.chip');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.toggle('is-active', c === chip));
    const filter = chip.dataset.filter;
    document.querySelectorAll('.pub').forEach(pub => {
      pub.classList.toggle('is-hidden', filter !== 'all' && pub.dataset.type !== filter);
    });
  });
});

// ===== "Download CV" prints the page (choose "Save as PDF") =====
document.getElementById('downloadCv').addEventListener('click', e => {
  e.preventDefault();
  document.querySelectorAll('.reveal').forEach(reveal);
  window.print();
});

// ===== Contact form: validate, then open the visitor's mail app =====
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;
  form.querySelectorAll('input, textarea').forEach(field => {
    const ok = field.checkValidity() && field.value.trim() !== '';
    field.classList.toggle('is-invalid', !ok);
    if (!ok) valid = false;
  });

  if (!valid) {
    status.textContent = 'Please fill in every field with a valid email.';
    status.className = 'form__status is-error';
    return;
  }

  const { name, email, message } = Object.fromEntries(new FormData(form));
  const to = document.querySelector('.contact__list a[href^="mailto:"]').getAttribute('href');
  const subject = encodeURIComponent('CV enquiry from ' + name);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `${to}?subject=${subject}&body=${body}`;
  status.textContent = 'Opening your email app…';
  status.className = 'form__status is-ok';
  form.reset();
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
