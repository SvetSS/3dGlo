const modal = () => {

    /* const modal = document.querySelector('.popup'),
        buttons = document.querySelectorAll('.popup-btn'),
        closeBtn = document.querySelector('.popup-close'); */


    //
    /*  const handleMenu = () => {
         modal.classList.toggle('popup-content');
        
     };
 
 
     closeBtn.addEventListener('click', handleMenu);
     buttons.forEach(btn => btn.addEventListener('click', handleMenu));
     console.log('z'); 
     //---------
       <script>
    var element = document.getElementById('myElement');
    var position = 0;
    
    function animate() {
      position += 1;
      element.style.left = position + 'px';
      requestAnimationFrame(animate);
    }
    
    animate();
  </script>
     */
    //
    /* buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    }); */
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = document.querySelector('.popup-close');

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

    closeBtn.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            modal.style.display = 'none';

        } else {
            fadeOutModal();
        }

    });

    console.log('m');
};
export default modal;
