const slider = () => {

    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    const dotsList = document.querySelector('.portfolio-dots');

    let currentSlide = 0;
    let interval;


    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };
    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };
    slides.forEach((item, idx) => {
        let dot = document.createElement("li");

        dot.classList.add('dot');
        if (idx === 0) {
            dot.classList.add('dot-active');
        }

        dotsList.append(dot);
    });

    let dots = dotsList.querySelectorAll('.dot');
    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };
    sliderBlock.addEventListener('click', e => {
        e.preventDefault();
        if (!e.target.matches('.dot, .portfolio-btn')) {
            return;
        }

        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        if (e.target.matches('#arrow-left')) {
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
        } else if (e.target.matches('#arrow-right')) {
            currentSlide++;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }


        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    });
    sliderBlock.addEventListener('mouseenter', e => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    });
    sliderBlock.addEventListener('mouseleave', e => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(2000);
        }
    });
    startSlide(2000);

    console.log("slider");
};

export default slider;

