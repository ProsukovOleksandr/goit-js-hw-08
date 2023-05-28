import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
console.log(iframe);
let player = new Player(iframe);
player.on('timeupdate', throttle((event)=>{
        localStorage.setItem("videoplayer-current-time", JSON.stringify(event));
    }, 1000));
let videoTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(JSON.parse(videoTime).seconds);
console.log(JSON.parse(videoTime));

