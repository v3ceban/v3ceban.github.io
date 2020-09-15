myScroll();
mySlider();
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
        'google_translate_element');
}

function mobMenu() {
    var openBtn = document.getElementById('open'),
        closeBtn = document.getElementById('close'),
        menu = document.getElementById('mobileMenu');

    openBtn.addEventListener('click', function () {
        this.classList.add('flip-2-hor-top-1');
        this.classList.remove('flip-2-hor-top-1--back');

        closeBtn.classList.remove('flip-2-hor-top-1');
        closeBtn.classList.add('flip-2-hor-top-1--back');

        menu.style.display = 'flex';
        menu.classList.add('fade-in-bck');
    });

    closeBtn.addEventListener('click', function () {
        this.classList.add('flip-2-hor-top-1');
        this.classList.remove('flip-2-hor-top-1--back');

        openBtn.classList.remove('flip-2-hor-top-1');
        openBtn.classList.add('flip-2-hor-top-1--back');

        menu.style.display = 'none';
        menu.classList.remove('fade-in-bck');
    });

    menu.addEventListener('click', function () {
        this.style.display = 'none';
        menu.classList.remove('fade-in-bck');

        closeBtn.classList.add('flip-2-hor-top-1');
        closeBtn.classList.remove('flip-2-hor-top-1--back');

        openBtn.classList.remove('flip-2-hor-top-1');
        openBtn.classList.add('flip-2-hor-top-1--back');
    });
}

mobMenu();