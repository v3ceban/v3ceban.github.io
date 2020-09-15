function myScroll() {
    var elements = ['feel', 'explore', 'download'],
        scroll = '',
        counter = 0,
        prevCounter = 0,
        allLinks = document.querySelectorAll('nav ul li a');
    function Scroll() {
        scroll = document.documentElement.scrollTop + 150;
        if (scroll > document.getElementById(elements[elements.length - 1]).offsetTop) {
            counter = elements.length - 1;
        } else if (counter > 0 &&
            scroll < document.getElementById(elements[counter]).offsetTop) {
            counter--;
        } else if (scroll > document.getElementById(elements[counter + 1]).offsetTop) {
            counter++;
        } else if (scroll < document.getElementById(elements[0]).offsetTop) {
            counter = -1;
        }
        if (counter != prevCounter && counter >= 0) {
            for (let i = 0; i < allLinks.length; i++) {
                allLinks[i].removeAttribute('class');
            }
            allLinks[counter].setAttribute('class', 'active-link');
            prevCounter = counter;
        } else if (counter < 0) {
            for (let i = 0; i < allLinks.length; i++) {
                allLinks[i].removeAttribute('class');
            }
        } else if (counter == 0) {
            for (let i = 0; i < allLinks.length; i++) {
                allLinks[i].removeAttribute('class');
            }
            allLinks[counter].setAttribute('class', 'active-link');
        }
    }

    window.addEventListener('load', Scroll);
    window.addEventListener('scroll', Scroll);
}

