// ================================
// DÍA 3 — davyhara | app.js
// ================================

// 1. MENSAJE DE BIENVENIDA EN CONSOLA
console.log("davyhara.dev — cargado ✅");

// 2. MENÚ HAMBURGUESA (para móvil)
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
  console.log('Logo clickeado');
});

// 3. ANIMACIÓN AL HACER SCROLL
const secciones = document.querySelectorAll('.seccion, .gris');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

secciones.forEach(seccion => {
  seccion.style.opacity = '0';
  seccion.style.transform = 'translateY(30px)';
  seccion.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(seccion);
});

// 4. BOTÓN CON EFECTO
const btn = document.querySelector('.btn');
btn.addEventListener('mouseover', () => {
  btn.style.letterSpacing = '2px';
});
btn.addEventListener('mouseout', () => {
  btn.style.letterSpacing = 'normal';
});

// 5. AÑO AUTOMÁTICO EN FOOTER
const footer = document.querySelector('footer p');
const anio = new Date().getFullYear();
footer.textContent = `© ${anio} davyhara — Hecho con código y café ☕`;