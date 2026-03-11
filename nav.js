/* nav.js – inyecta el nav y footer en cada página */

const BRAND = `Productos Lácteo <span>Contreras Chávez</span>`;
const BRAND_SHORT = `<span>Contreras Chávez</span>`;

const pages = [
  { label:'Inicio',    href:'index.html' },
  { label:'Ubicación', href:'ubicacion.html' },
  { label:'Productos', href:'productos.html' },
  { label:'Contacto',  href:'contacto.html' },
];

function buildNav() {
  const current = location.pathname.split('/').pop() || 'index.html';
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${current===p.href?'active':''}">${p.label}</a></li>`
  ).join('');
  const mLinks = pages.map(p =>
    `<a href="${p.href}" class="${current===p.href?'active':''}">${p.label}</a>`
  ).join('');

  document.body.insertAdjacentHTML('afterbegin', `
  <nav>
    <a href="index.html" class="nav-logo">
      <span>Contreras Chávez</span>
      <span>Lácteos · Valle de Juárez</span>
    </a>
    <ul class="nav-links">${links}</ul>
    <button class="hamburger" id="hamburger" aria-label="Menú" onclick="toggleMenu()">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu" id="mobile-menu">${mLinks}</div>
  `);
}

function buildFooter() {
  const navLinks = pages.map(p =>
    `<li><a href="${p.href}">${p.label}</a></li>`
  ).join('');
  document.body.insertAdjacentHTML('beforeend', `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">${BRAND}</div>
        <p>Años sirviendo a las familias de Valle de Juárez con calidad, honestidad y el mejor trato.</p>
      </div>
      <div class="footer-col">
        <h4>Navegación</h4>
        <ul>${navLinks}</ul>
      </div>
      <div class="footer-col">
        <h4>Categorías</h4>
        <ul>
          <li><a href="productos.html">Refrescos</a></li>
          <li><a href="productos.html">Abarrotes</a></li>
          <li><a href="productos.html">Vinos</a></li>
          <li><a href="productos.html">Quesos</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Productos Lácteo Contreras Chávez · Valle de Juárez, Jalisco</span>
      <span>Hecho con ❤️ en el corazón de Jalisco</span>
    </div>
  </footer>
  <div id="toast">✅ ¡Mensaje enviado! Te contactaremos pronto.</div>
  `);
}

function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobile-menu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobile-menu').classList.remove('open');
}

// Scroll reveal
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

// Close mobile menu on link click
document.addEventListener('click', e => {
  if (e.target.closest('.mobile-menu a')) closeMenu();
});

document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildFooter();
  initReveal();
});
