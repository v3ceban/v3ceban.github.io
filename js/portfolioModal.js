var modal = document.querySelectorAll('.modal')[0],
    modalImage = document.querySelector('.modal img'),
    images = document.querySelectorAll('.elementsGrid img');

for (let i = 0; i < images.length; i++) {
    const element = images[i];
    element.onclick = function () {
        modal.style.display = "grid";
        modalImage.src = element.src.replace('_small', '_large');
    }
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.ontouchend = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
