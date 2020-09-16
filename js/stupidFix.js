function widthReload() {
    var currentWidth = undefined,
        initWidth = screen.width;
    window.onresize = function () {
        currentWidth = screen.width;
        if (initWidth >= 900 && currentWidth <= 900) {
            location.reload();
        }
        if (initWidth <= 900 && currentWidth >= 900) {
            location.reload();
        }
    }
}

widthReload();