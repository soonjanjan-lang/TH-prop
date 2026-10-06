// ===== Theme: follows the system until the visitor chooses =====
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const isDark = () => (root.dataset.theme ? root.dataset.theme === 'dark' : prefersDark.matches);

function labelTheme() {
  themeToggle.setAttribute('aria-label', isDark() ? 'Switch to light theme' : 'Switch to dark theme');
}

themeToggle.addEventListener('click', () => {
  const next = isDark() ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
  labelTheme();
});
prefersDark.addEventListener('change', labelTheme);
labelTheme();

// ===== Sections menu (small screens) =====
const nav = document.getElementById('nav');
const menuToggle = document.getElementById('menuToggle');
const navLinks = [...nav.querySelectorAll('a')];

function setMenu(open) {
  nav.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close sections menu' : 'Open sections menu');
  menuToggle.querySelector('path').setAttribute('d', open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16');
}

menuToggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
navLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav.classList.contains('is-open')) {
    setMenu(false);
    menuToggle.focus();
  }
});
document.addEventListener('click', e => {
  if (nav.classList.contains('is-open') && !e.target.closest('.head')) setMenu(false);
});

// ===== Running head marks the section being read =====
const titlePage = document.querySelector('.title');
const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      if (link.getAttribute('href') === '#' + entry.target.id) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-40% 0px -55% 0px' });

[titlePage, ...navLinks.map(link => document.querySelector(link.getAttribute('href')))]
  .filter(Boolean)
  .forEach(section => spy.observe(section));

// ===== Figure 1: Lottie scatter plot, fitted line drawn on arrival =====
const fig = document.getElementById('fig1');
const plot = document.getElementById('figPlot');
const replay = document.getElementById('replay');
let figure = null;

if (window.lottie && window.FIGURE_1) {
  figure = window.lottie.loadAnimation({
    container: plot,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: window.FIGURE_1,
    rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
  });

  const showFinal = () => figure.goToAndStop(figure.totalFrames - 1, true);

  figure.addEventListener('DOMLoaded', () => {
    if (reduceMotion.matches) {
      showFinal();
      return;
    }
    const watch = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      figure.goToAndPlay(0, true);
      watch.disconnect();
    }, { threshold: 0.4 });
    watch.observe(plot);
  });

  replay.addEventListener('click', () => {
    if (reduceMotion.matches) showFinal();
    else figure.goToAndPlay(0, true);
  });
  window.addEventListener('beforeprint', showFinal);
} else {
  fig.classList.add('fig--static');
  replay.hidden = true;
}

// ===== Save as PDF: the print stylesheet turns the page into the CV =====
document.getElementById('saveCv').addEventListener('click', () => window.print());

// ===== Table 4: column specification filters the publications =====
const specCols = [...document.querySelectorAll('.spec__col')];
const pubRows = [...document.querySelectorAll('#pubRows tr[data-type]')];
const emptyRow = document.querySelector('#pubRows .empty');
const pubCount = document.getElementById('pubCount');

specCols.forEach(col => {
  col.addEventListener('click', () => {
    const filter = col.dataset.filter;
    specCols.forEach(c => c.setAttribute('aria-pressed', String(c === col)));

    let shown = 0;
    pubRows.forEach(row => {
      const match = filter === 'all' || row.dataset.type === filter;
      if (match && row.hidden && !reduceMotion.matches) {
        row.classList.remove('is-entering');
        void row.offsetWidth; // restart the entrance
        row.classList.add('is-entering');
      }
      row.hidden = !match;
      if (match) shown++;
    });

    emptyRow.hidden = shown > 0;
    pubCount.textContent = `Showing ${shown} of ${pubRows.length} ${pubRows.length === 1 ? 'entry' : 'entries'}.`;
  });
});

// ===== Correspondence form: check each field, then hand off to the mail app =====
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const authorEmail = document.getElementById('authorEmail');
const fields = [...form.querySelectorAll('input, textarea')];

const fieldErrors = {
  name: 'Please add your name.',
  email: 'Please add an email address I can reply to, such as name@university.edu.',
  message: 'Please write a short message.',
};

function checkField(field) {
  const value = field.value.trim();
  let error = '';
  if (!value) error = fieldErrors[field.name];
  else if (field.type === 'email' && !field.checkValidity()) error = fieldErrors.email;

  field.setAttribute('aria-invalid', error ? 'true' : 'false');
  document.getElementById('e-' + field.name).textContent = error;
  return !error;
}

fields.forEach(field => {
  field.addEventListener('blur', () => { if (field.value.trim()) checkField(field); });
  field.addEventListener('input', () => { if (field.getAttribute('aria-invalid') === 'true') checkField(field); });
});

function setStatus(text, isError) {
  status.textContent = text;
  status.classList.toggle('is-error', isError);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const firstInvalid = fields.map(field => (checkField(field) ? null : field)).find(Boolean);
  if (firstInvalid) {
    setStatus('Please fix the highlighted fields.', true);
    firstInvalid.focus();
    return;
  }

  // Remove data-placeholder from #authorEmail in index.html once the real address is in.
  if (authorEmail.hasAttribute('data-placeholder')) {
    setStatus('The author’s email address is not published yet, so this message cannot be sent. Please try again soon.', true);
    return;
  }

  const { name, email, message } = Object.fromEntries(new FormData(form));
  const to = authorEmail.getAttribute('href').replace(/^mailto:/, '');
  const subject = encodeURIComponent(`CV enquiry from ${name.trim()}`);
  const body = encodeURIComponent(`${message.trim()}\n\n${name.trim()} (${email.trim()})`);
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  setStatus('Your email app should now open with the message ready to send.', false);
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
