var overlays = document.querySelectorAll('main.uiux .elementsGrid .element .video-overlay'),
    videos = document.querySelectorAll('main.uiux .elementsGrid .element video');

for (let i = 0; i < overlays.length; i++) {
    const element = overlays[i];
    element.addEventListener('click', () => {
        videos[i].addEventListener('fullscreenchange', () => {
            if (!videos[i].paused) {
                videos[i].currentTime = 0; /* Reset video */
                videos[i].pause();
            } else {
                videos[i].play();
            }
        })
        if (videos[i].requestFullscreen) {
            videos[i].requestFullscreen();
        }
        else if (videos[i].webkitRequestFullscreen) { /* Safari */
            videos[i].webkitRequestFullscreen();
        } else if (videos[i].msRequestFullscreen) { /* IE11 */
            videos[i].msRequestFullscreen();
        }
    });

    element.addEventListener('mouseover', () => {
        if (videos[i].paused) {
            videos[i].play();
        }
    });

    element.addEventListener('mouseout', () => {
        if (!videos[i].paused) {
            videos[i].currentTime = 0; /* Reset video */
            videos[i].pause();
        }
    });
}