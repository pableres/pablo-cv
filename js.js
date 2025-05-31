// Placeholder JavaScript: smooth scrolling
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(item.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
