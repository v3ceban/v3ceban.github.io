function mobMenu() {
    var open = document.getElementsByClassName('fa-bars')[0],
        close = document.getElementsByClassName('fa-times')[0],
        modal = document.getElementsByClassName('container')[0];

    open.addEventListener('click', function () {
        modal.style.display = 'block';
        this.style.display = 'none';
        close.style.display = 'block';
    });

    close.addEventListener('click', function () {
        modal.style.display = 'none';
        this.style.display = 'none';
        open.style.display = 'block';
    });
}

mobMenu();