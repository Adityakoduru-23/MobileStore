// navbar//
const slides = document.querySelector('.slides');
        const slide = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        const dots = document.querySelectorAll('.dot');

        let currentIndex = 0;

        function updateSlider() {
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slide.length;
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slide.length) % slide.length;
            updateSlider();
        });

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                currentIndex = parseInt(dot.getAttribute('data-index'));
                updateSlider();
            });
        });

        // Auto Slide
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slide.length;
            updateSlider();
        }, 5000);
function movePhones(direction) {
    const phoneContainer = document.querySelector('.phone');
    const phoneWidth = document.querySelector('.inphone').offsetWidth + 20; // Includes margin between items
    if (direction === 'left') {
        phoneContainer.scrollBy({ left: -phoneWidth, behavior: 'smooth' });
    } else {
        phoneContainer.scrollBy({ left: phoneWidth, behavior: 'smooth' });
    }
}