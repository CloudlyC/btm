document.addEventListener('DOMContentLoaded', () => {

  // Home Carousel
  const track = document.querySelector('.cards');
  const nextBtn = document.querySelector('.nav.next');
  const prevBtn = document.querySelector('.nav.prev');
  const card = document.querySelector('.card');

  if (track && nextBtn && prevBtn && card) {
    const style = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth + parseInt(style.marginRight);

    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
  }

  // About Us Carousel
  const aboutTrack = document.querySelector('.aboutus-cards');
  const aboutNextBtn = document.querySelector('.aboutus-nav.next');
  const aboutPrevBtn = document.querySelector('.aboutus-nav.prev');
  const aboutCard = document.querySelector('.aboutus-card');

  if (aboutTrack && aboutNextBtn && aboutPrevBtn && aboutCard) {
    const aboutStyle = window.getComputedStyle(aboutCard);
    const aboutCardWidth = aboutCard.offsetWidth + parseInt(aboutStyle.marginRight);

    aboutNextBtn.addEventListener('click', () => {
      aboutTrack.scrollBy({ left: aboutCardWidth, behavior: 'smooth' });
      console.log("About Us Next hit!");
    });

    aboutPrevBtn.addEventListener('click', () => {
      aboutTrack.scrollBy({ left: -aboutCardWidth, behavior: 'smooth' });
    });
  }

  // Reviews Carousel
  const reviewsTrack = document.querySelector('.reviews-scroll');
  const reviewsNext = document.querySelector('.review-next');
  const reviewsPrev = document.querySelector('.review-prev');
  const reviewCard = document.querySelector('.review-card');

  if (reviewsTrack && reviewsNext && reviewsPrev && reviewCard) {
    const reviewStyle = window.getComputedStyle(reviewCard);
    const reviewCardWidth = reviewCard.offsetWidth + parseInt(reviewStyle.marginRight);

    reviewsNext.addEventListener('click', () => {
      reviewsTrack.scrollBy({ left: reviewCardWidth, behavior: 'smooth' });
    });

    reviewsPrev.addEventListener('click', () => {
      reviewsTrack.scrollBy({ left: -reviewCardWidth, behavior: 'smooth' });
    });
  }
});

