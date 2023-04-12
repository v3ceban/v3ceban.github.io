function webDesign() {
    const elements = document.querySelectorAll(`#WebDesign .container .scroll-wrapper`);

    function AEL(listener) {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.addEventListener(listener, () => {
                element.querySelector(`.hint-text`).classList.add('fade-out');
            });
        }
    }

    AEL('scroll');
    AEL('touchstart');
    AEL('click');
}

webDesign();