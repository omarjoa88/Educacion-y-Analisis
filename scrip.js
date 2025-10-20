document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropbtn");
    if (!button) return;

    // En móviles: abrir/cerrar al tocar "Proyectos"
    button.addEventListener("click", (e) => {
      e.preventDefault(); // evita que el enlace salte a #proyectos
      dropdown.classList.toggle("open");
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.proyectos-track');
  const prev = document.querySelector('.proy-prev');
  const next = document.querySelector('.proy-next');

  if (!track) return;

  // cantidad de desplazamiento: ancho de una tarjeta más gap
  function getScrollAmount() {
    const card = track.querySelector('.proyecto-tarjeta');
    if (!card) return track.clientWidth * 0.8;
    const style = window.getComputedStyle(track);
    const gap = parseInt(style.columnGap || style.gap || 30, 10) || 30;
    return Math.round(card.getBoundingClientRect().width + gap);
  }

  prev.addEventListener('click', () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });

  // Habilitar arrastrar con el mouse (drag-to-scroll)
  let isDown = false, startX, scrollLeft;
  track.addEventListener('pointerdown', (e) => {
    isDown = true;
    track.setPointerCapture(e.pointerId);
    startX = e.clientX;
    scrollLeft = track.scrollLeft;
    track.style.cursor = 'grabbing';
  });
  track.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    const dx = e.clientX - startX;
    track.scrollLeft = scrollLeft - dx;
  });
  track.addEventListener('pointerup', (e) => {
    isDown = false;
    track.style.cursor = '';
  });
  track.addEventListener('pointerleave', () => { isDown = false; track.style.cursor = ''; });

  // Habilitar navegación por teclado (flechas izquierda/derecha)
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' }); e.preventDefault(); }
    if (e.key === 'ArrowLeft')  { track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' }); e.preventDefault(); }
  });

  // Desactivar flechas si está al inicio o al final
  function updateButtons() {
    prev.disabled = track.scrollLeft <= 10;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 10;
  }
  track.addEventListener('scroll', updateButtons);
  window.addEventListener('resize', updateButtons);
  updateButtons();
});