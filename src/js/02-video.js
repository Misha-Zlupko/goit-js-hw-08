import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_REFUGE = 'videoplayer-current';
// console.log(player);
function currentTime({ seconds }) {
  localStorage.setItem(KEY_REFUGE, seconds);
}
player.on('timeupdate', throttle(currentTime, 1000));

const time = localStorage.getItem(KEY_REFUGE);
if (time) {
  player.setCurrentTime(time);
}
