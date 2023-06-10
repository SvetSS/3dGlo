const menu = () => {
    const menuBtn = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn');
    //menuItems = document.querySelectorAll('ul>li>a');

    const handleMenu = event => {
        event.preventDefault();

        if (event.target === menuBtn || event.target === closeBtn || event.target.parentNode.parentNode === menu) {
            menu.classList.toggle('active-menu');
        }
    };

    document.addEventListener('click', handleMenu);
};


//console.log('z');

export default menu;
