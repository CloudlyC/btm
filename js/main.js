document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.cards');
    const nextBtn = document.querySelector('.carousel .next');
    const prevBtn = document.querySelector('.carousel .prev');

    if (!carousel || !nextBtn || !prevBtn) return;

    function getCardWidth() {
        const card = carousel.querySelector('.card');
        const style = getComputedStyle(card);
        const gap = 20; 
        return card.offsetWidth + gap;
    }

    nextBtn.addEventListener('click', () => {
        carousel.scrollLeft += getCardWidth(); 
    });

    prevBtn.addEventListener('click', () => {
        carousel.scrollLeft -= getCardWidth(); 
    });
});






