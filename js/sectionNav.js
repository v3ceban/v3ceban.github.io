function sectionNav() {
    var elements = document.querySelectorAll('.sectionNav ul li'),
        headers = document.querySelectorAll('.header'),
        bodyRect = document.body.getBoundingClientRect(),
        section1Rect = document.getElementById('WebDesign').getBoundingClientRect(),
        section1 = section1Rect.top - bodyRect.top,
        section2Rect = document.getElementById('GraphicDesign').getBoundingClientRect(),
        section2 = section2Rect.top - bodyRect.top,
        x = null;

    window.addEventListener('scroll', () => {

        x = document.documentElement.scrollTop + screen.height / 1.5;

        if (x < section1) {
            headers[0].classList.remove('active');
            headers[1].classList.remove('active');
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                element.classList.remove('inactive');
            }
        } else if (x >= section1 && x < section2) {
            headers[0].classList.add('active');
            headers[1].classList.remove('active');
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                element.classList.add('inactive');
            }
        } else if (x >= section2) {
            headers[0].classList.remove('active');
            headers[1].classList.add('active');
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                element.classList.add('inactive');
            }
        }
    });
}
sectionNav();