const track = document.querySelector('.cards');
const nextBtn = document.querySelector('.nav.next');
const prevBtn = document.querySelector('.nav.prev');

const card = document.querySelector('.card');
const style = window.getComputedStyle(card);
const cardWidth = card.offsetWidth + parseInt(style.marginRight);

// Next button scrolls right
nextBtn.addEventListener('click', () => {
  track.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

// Prev button scrolls left
prevBtn.addEventListener('click', () => {
  track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

