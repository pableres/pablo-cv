const data = {
  datos: [
    "Nombre: Pablo Vallejo",
    "Email: p.vallejo@example.com",
    "Teléfono: +34 600 000 000",
    "Ubicación: Canyelles, Barcelona"
  ],
  formacion: [
    "Doctorado en Psicología, Universidad XYZ (2018-2022)",
    "Máster en Investigación, Universidad ABC (2016-2018)",
    "Grado en Psicología, Universidad DEF (2012-2016)"
  ],
  competencias: [
    "Análisis estadístico",
    "Desarrollo Shiny (R)",
    "Gestión de proyectos",
    "Negociación B2B"
  ],
  idiomas: [
    "Español: Nativo",
    "Inglés: Avanzado (C1)",
    "Catalán: Fluido"
  ],
  investigacion: [
    "Estudio de conducta sexual, 2023",
    "Publicación en Journal of Sex Research, 2024",
    "Proyecto EU Horizon 2025 (en curso)"
  ]
};

const cards      = document.querySelectorAll('.card');
const overlay    = document.getElementById('overlay');
const closeBtn   = overlay.querySelector('.close-btn');
const titleEl    = document.getElementById('overlay-title');
const subcardsEl = document.getElementById('subcards');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.key;
    showOverlay(key, card.querySelector('h3').innerText);
  });
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('show');
});

function showOverlay(key, title) {
  titleEl.innerText = title;
  subcardsEl.innerHTML = '';
  data[key].forEach(text => {
    const div = document.createElement('div');
    div.className = 'subcard';
    div.innerText = text;
    subcardsEl.appendChild(div);
  });
  overlay.classList.add('show');
}
