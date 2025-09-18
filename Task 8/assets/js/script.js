document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".img");
    const totalSlides = slides.length;

    const nextBtn = document.getElementById("next-btn");
    const previousBtn = document.getElementById("previous-btn");

    previousBtn.disabled = true;

    previousBtn.addEventListener('click', function () {
        showPreviousSlide();
    })

    nextBtn.addEventListener('click', function () {
        showNextSlide();
    })

    function showNextSlide() {
        slides[currentIndex].style.display = "none";
        currentIndex = currentIndex + 1;
        slides[currentIndex].style.display = "block";

        if (isLastSlide()) {
            nextBtn.disabled = true;
            setTimeout(() => {
                clearInterval(autoSlider);
                console.log("Interval stopped");
            }, 3000);
        }
        else {
            nextBtn.disabled = false;
        }
        if (currentIndex !== 0) {
            previousBtn.disabled = false;
        }
    }

    const autoSlider = setInterval(() => {
        showNextSlide()
    }, 5000);
    
    function showPreviousSlide() {
        slides[currentIndex].style.display = "none";
        currentIndex = currentIndex - 1;
        slides[currentIndex].style.display = "block";


        if (isFirstSlide()) {
            previousBtn.disabled = true;
        } else {
            previousBtn.disabled = false;
        }

        if (currentIndex !== totalSlides - 1) {
            nextBtn.disabled = false;
        }
    }

    function isFirstSlide() {
        return currentIndex === 0;
    }

    function isLastSlide() {
        return currentIndex === totalSlides - 1;
    }

});


