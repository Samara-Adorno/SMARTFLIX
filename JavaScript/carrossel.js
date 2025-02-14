let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide figure'); // Agora selecionando as figuras

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

// Inicializa o carrossel
showSlide(slideIndex);
