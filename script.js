// Define datos según malla imagen
const data = {
  s1: [
    { name: 'Laboratorio de Investigación Publicitaria', code: 'LIP', cat: 'LC', prereq: [] },
    { name: 'Taller de Imagen y Retoque Digital', code: 'TIRD', cat: 'HD', prereq: [] },
    { name: 'Antropología del Consumo', code: 'ANTC', cat: 'OC', prereq: [] },
    { name: 'Teoría de la Imagen y Sociedad', code: 'TIS', cat: 'OC', prereq: [] },
    { name: 'Economía de la Empresa', code: 'EE', cat: 'NE', prereq: [] },
    { name: 'Ética y Legislación', code: 'EL', cat: 'OC', prereq: [] }
  ],
  // ...
  s8: [
    { name: 'Práctica Profesional', code: 'PP', cat: 'PP', prereq: [] },
    { name: 'Electivos', code: 'ELEC', cat: 'EL', prereq: [] }
  ]
};

// categorías y colores
const colors = {
  LC: '#A8D5BA', // línea contenido y relato
  HD: '#C7E9B4', // laboratorios
  OC: '#E5F5E0', // comportamiento consumidor
  NE: '#D9EBC9', // línea negocios
  PP: '#96C295', // práctica
  EL: '#EEE'    // electivo / curso general
};

function drawLegend() {
  const legend = document.getElementById('legend');
  for (let [cat, color] of Object.entries(colors)) {
    const div = document.createElement('div');
    div.className = 'legend-item';
    div.innerHTML = `<span class="legend-color" style="background:${color}"></span>${cat}`;
    legend.appendChild(div);
  }
}

function drawMesh() {
  const mesh = document.getElementById('mesh');
  ['s1','s2','s3','s4','s5','s6','s7','s8'].forEach(sem => {
    const semestre = data[sem] || [];
    semestre.forEach(materia => {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.style.background = colors[materia.cat] || '#fff';
      cell.innerHTML = `<strong>${materia.code}</strong><br>${materia.name}`;
      mesh.appendChild(cell);
    });
    // si semestre tiene menos materias que columnas, rellenar vacíos
    const faltan = 8 - semestre.length;
    for (let i = 0; i < faltan; i++) {
      const empty = document.createElement('div');
      empty.className = 'cell';
      mesh.appendChild(empty);
    }
  });
}

window.onload = () => {
  drawLegend();
  drawMesh();
};
