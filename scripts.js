const menu_btn = document.querySelector('.header .menu-btn');
const nav_list =  document.querySelector('.header  ul');
const list_item = document.querySelectorAll('.header ul li');

menu_btn
    .addEventListener('click', () => {
        menu_btn.classList.toggle('menu-active');
        nav_list.classList.toggle('menu-active');
    }
);