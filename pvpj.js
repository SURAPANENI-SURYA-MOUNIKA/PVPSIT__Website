/* video*/
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');

    // Add a class to the video container when the video is loaded
    video.addEventListener('loadeddata', function() {
        document.querySelector('.video-container').classList.add('video-loaded');
    });
});
/*video ended*/





