function Hamburger() {
    var btn = document.getElementsByClassName('hamburger')[0],
        menu = document.getElementsByClassName('otherPages')[0],
        social = document.getElementsByClassName('social')[0];

    btn.addEventListener('click', () => {
        btn.classList.toggle('is-active');
        if (btn.classList.contains('is-active') == true) {
            menu.style.display = 'flex';
            social.style.display = 'flex';
            menu.classList.add('slide');
            social.classList.add('slide');
            menu.classList.remove('slide-back');
            social.classList.remove('slide-back');
        } else {
            menu.classList.add('slide-back');
            social.classList.add('slide-back');
            menu.classList.add('slide');
            social.classList.add('slide');
            setTimeout(() => {
                menu.style.display = 'none';
                social.style.display = 'none';
            }, 300);
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 968) {
            menu.style.display = 'flex';
            social.style.display = 'flex';
            menu.classList.remove('slide');
            social.classList.remove('slide');
            menu.classList.remove('slide-back');
            social.classList.remove('slide-back');
            btn.classList.add('is-active');
        } else {
            menu.style.display = 'none';
            social.style.display = 'none';
            btn.classList.remove('is-active');
        }
    })
}

Hamburger();