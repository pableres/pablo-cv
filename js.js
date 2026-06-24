// Navegación: scroll suave en los enlaces internos + desplegable táctil

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', e => {
    const href = item.getAttribute('href');

    // El toggle del desplegable no tiene href: abre/cierra el menú (funciona en móvil)
    if (!href) {
      e.preventDefault();
      const dd = item.closest('.nav-dropdown');
      if (dd) dd.classList.toggle('open');
      return;
    }

    // Enlaces normales: scroll suave si el destino existe
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Al elegir una opción del desplegable, lo cerramos
document.querySelectorAll('.dropdown-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const dd = link.closest('.nav-dropdown');
    if (dd) dd.classList.remove('open');
  });
});

// Clic fuera del desplegable: cerrarlo
document.addEventListener('click', e => {
  if (!e.target.closest('.nav-dropdown')) {
    document.querySelectorAll('.nav-dropdown.open').forEach(dd => dd.classList.remove('open'));
  }
});
