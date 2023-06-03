import Player from '@vimeo/player';
import throttle from "lodash.throttle";
const iframe = document.querySelector('#vimeo-player');
let player = new Player(iframe);
player.on('timeupdate', throttle((event)=>{
        localStorage.setItem("videoplayer-current-time", JSON.stringify(event));
    }, 1000));
let videoTime = localStorage.getItem("videoplayer-current-time");
if(videoTime){
    let Time = JSON.parse(videoTime);
    player.setCurrentTime(Time.seconds);
    console.log(JSON.parse(videoTime));
};