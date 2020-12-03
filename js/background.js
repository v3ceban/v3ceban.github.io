function background() {
    var scrollPosition = 0,
        hue = 0;

    window.addEventListener('scroll', () => {
        scrollPosition = window.scrollY;
        hue = Math.floor(scrollPosition / 10);
        document.getElementById("bg").style.filter = `hue-rotate(${hue}deg)`;
    });
};

background();