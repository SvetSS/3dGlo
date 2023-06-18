const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    //const menuItems = menu.querySelectorAll('ul>li>a');
    const closeBtn = menu.querySelector('.close-btn');

    // console.log(menuBtn);

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };
    menu.addEventListener('click', e => {
        if (e.target === closeBtn || e.target.matches('menu>ul>li>a')) {
            menu.classList.toggle('active-menu');
        }
    });
    menuBtn.addEventListener('click', handleMenu);
};

export default menu;
