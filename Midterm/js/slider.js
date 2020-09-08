function mySlider() {
    var nextButton = document.querySelector('#feel .right'),
        prevButton = document.querySelector('#feel .left'),
        slider = document.querySelector('#feel .slider'),
        translate = document.querySelectorAll('#feel .slider .slider-content')[0].offsetWidth + 20,
        direction = false;

    nextButton.addEventListener('click', function () {
        slider.style.transform = `translateX(-${translate}px)`;
        direction = true;
    });

    prevButton.addEventListener('click', function () {
        slider.lastElementChild.setAttribute('class', 'slider-content');
        slider.prepend(slider.lastElementChild);
        slider.style.transition = 'none';
        slider.style.transform = `translateX(-${translate}px)`;
        setTimeout(function () {
            slider.style.transition = 'transform 0.5s ease-in-out';
            slider.style.transform = `translateX(0px)`;
        }, 1);
        direction = false;
    });

    slider.addEventListener('transitionend', function () {
        if (direction === true) {
            slider.appendChild(slider.firstElementChild);
            slider.lastElementChild.setAttribute('class', 'slider-content animeSliderNext');
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            setTimeout(function () {
                slider.style.transition = 'transform 0.5s ease-in-out';
            }, 1);
        }
    });
}