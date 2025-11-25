// Input animation and interactivity
document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('main input');
    const logo = document.querySelector('main img');

    // Animate logo fade in
    logo.style.opacity = 0;
    logo.style.transition = 'opacity 1.5s ease';
    setTimeout(() => {
        logo.style.opacity = 1;
    }, 200);

    // Change input background on focus
    input.addEventListener('focus', () => {
        input.style.backgroundColor = '#fff5f5'; // Light red tint
    });

    input.addEventListener('blur', () => {
        input.style.backgroundColor = 'white';
    });
});
