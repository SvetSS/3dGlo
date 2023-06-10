const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');

    const fadeInModal = () => {
        let opacity = 0;
        const fadeInInterval = setInterval(() => {
            opacity += 0.05;
            modal.style.opacity = opacity;
            modal.style.display = 'block';
            console.log(opacity);

            if (opacity >= 1) {
                clearInterval(fadeInInterval);
            }
        }, 15);
        modal.addEventListener('click', e => {
            console.log('f');
        });
    };

    const fadeOutModal = () => {
        let opacity = 1;
        const fadeOutInterval = setInterval(() => {
            opacity -= 0.05;
            modal.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(fadeOutInterval);
                modal.style.display = 'none';
            }
        }, 10);
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                modal.style.display = 'block';

            } else {
                fadeInModal();
            }
        });
    });

    modal.addEventListener('click', e => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            if (window.innerWidth < 768) {
                modal.style.display = 'none';

            } else {
                fadeOutModal();
            }
        }
    });

};
export default modal;
