var emblaNode = document.getElementById("embla");
var options = {
    startIndex: 1,
    selected: 'active',
}
var plugins = [EmblaCarouselClassNames(options)];

var embla = EmblaCarousel(emblaNode, options, plugins);

embla.on('scroll', () => {
    var images = document.querySelectorAll('.embla__slide'),
        texts = document.querySelectorAll('#GraphicDesign .right div');

    if (images[0].classList.contains('active')) {
        texts[0].classList.remove('inactive');
        texts[1].classList.add('inactive');
        texts[2].classList.add('inactive');
    } else if (images[1].classList.contains('active')) {
        texts[1].classList.remove('inactive');
        texts[0].classList.add('inactive');
        texts[2].classList.add('inactive');
    } else if (images[2].classList.contains('active')) {
        texts[2].classList.remove('inactive');
        texts[0].classList.add('inactive');
        texts[1].classList.add('inactive');
    }
});
