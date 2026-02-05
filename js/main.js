const track = document.querySelector('.cards');
const nextBtn = document.querySelector('.nav.next');
const prevBtn = document.querySelector('.nav.prev');

const card = document.querySelector('.card');
const style = window.getComputedStyle(card);
const cardWidth = card.offsetWidth + parseInt(style.marginRight);

const reviewsTrack = document.querySelector('.reviews-scroll');
const reviewsNext = document.querySelector('.review-next');
const reviewsPrev = document.querySelector('.review-prev');

const reviewCard = document.querySelector('.review-card');
const reviewStyle = window.getComputedStyle(reviewCard);
const reviewCardWidth = reviewCard.offsetWidth + parseInt(reviewStyle.marginRight);

// Next button scrolls right
nextBtn.addEventListener('click', () => {
  track.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

// Prev button scrolls left
prevBtn.addEventListener('click', () => {
  track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});


// Scroll right
reviewsNext.addEventListener('click', () => {
    reviewsTrack.scrollBy({left: reviewCardWidth, behavior: 'smooth'});
});

// Scroll left
reviewsPrev.addEventListener('click', () => {
    reviewsTrack.scrollBy({left: -reviewCardWidth, behavior: 'smooth'});
});

