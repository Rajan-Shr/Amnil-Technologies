const images = document.querySelectorAll('.image-container img');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
        } else {
            entry.target.style.opacity = 0;
        }
    });
}, {
    threshold: 0.4
});

images.forEach(image => {
    observer.observe(image);
});