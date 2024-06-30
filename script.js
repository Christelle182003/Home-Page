document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('#hbg');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function() {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
    });