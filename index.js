var target = new Date('2018-03-29 15:00:00');
var clock = document.querySelector('.clock');

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('gandalf', {
        videoId: 'T9RFb8xXZlk',
        playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            loop: 1,
            showinfo: 0
        },
    });
}

function padZero(value) {
    return ('00' + value).slice(-2);
}

var ticker = setInterval(function () {
    var left = target - Date.now();
    var duration = moment.duration(left);

    if (left < 0) {
        clock.classList = 'hide';
        document.querySelector('#gandalf').classList = '';
        player.playVideo();
        clearInterval(ticker);
        return;
    }

    var days = Math.floor(duration.as('days'))

    if (days > 1) {
        clock.textContent = `${days} days`;
    } else {
        clock.textContent = `${padZero(duration.get('hours'))}:${padZero(duration.get('minutes'))}:${padZero(duration.get('seconds'))}`;
    }
}, 100);