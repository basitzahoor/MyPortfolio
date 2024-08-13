// JavaScript to handle dynamic appearance of arrows
document.addEventListener('DOMContentLoaded', function () {
    const arrows = document.querySelectorAll('.arrow');
    const delay = 300; // Delay in milliseconds between arrows appearing
    arrows.forEach((arrow, index) => {
        setTimeout(() => {
            arrow.style.opacity = '1';
            arrow.style.transform = 'translate(0)';
        }, index * delay);
    });
});
