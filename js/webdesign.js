function webDesign() {
    const parentElement = document.querySelectorAll(`.left`)[0],
        span = document.querySelectorAll(`.left span`)[0],
        prev = document.querySelectorAll(`.fa-caret-left`)[0],
        next = document.querySelectorAll(`.fa-caret-right`)[0],
        elements = document.querySelectorAll(`#WebDesign .left div`),
        textelements = document.querySelectorAll(`#WebDesign .right div`);

    var counter = 0;

    parentElement.addEventListener('click', () => {
        span.classList.add('fade-out');
    });

    parentElement.addEventListener('touchstart', () => {
        span.classList.add('fade-out');
    });

    parentElement.addEventListener('scroll', () => {
        span.classList.add('fade-out');
    });

    prev.addEventListener('click', () => {
        elements[counter].classList.add(`inactive`);
        textelements[counter].classList.add(`inactive`);
        counter--;
        if (counter < 0) {
            counter = elements.length - 1;
        }
        elements[counter].classList.remove(`inactive`);
        textelements[counter].classList.remove(`inactive`);
        span.classList.remove('fade-out');
        parentElement.scrollTop = 0;
    });

    next.addEventListener('click', () => {
        elements[counter].classList.add(`inactive`);
        textelements[counter].classList.add(`inactive`);
        counter++;
        if (counter == elements.length) {
            counter = 0;
        }
        elements[counter].classList.remove(`inactive`);
        textelements[counter].classList.remove(`inactive`);
        span.classList.remove('fade-out');
        parentElement.scrollTop = 0;
    });
}

webDesign();