let player;
let isPlaying = false;

function createPlayer() {
    player = new YT.Player('yt-player', {
        videoId: 'G3JppLUYUKo',
        width: 1,
        height: 1,
        playerVars: {
            autoplay: 0,
            controls: 0,
            rel: 0,
            modestbranding: 1
        }
    });
}

function onYouTubeIframeAPIReady() {
    if (document.readyState === 'complete') {
        createPlayer();
    } else {
        window.addEventListener('load', createPlayer);
    }
}

window.addEventListener('load', () => {
    const playBtn = document.getElementById('ytPlay');

    playBtn.addEventListener('click', () => {
        if (!player) {
            console.error('Player no inicializado');
            return;
        }

        if (!isPlaying) {
            player.playVideo();
            playBtn.textContent = '⏸';
        } else {
            player.pauseVideo();
            playBtn.textContent = '▶';
        }

        isPlaying = !isPlaying;
    });
});
