import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const KEY_REFUGE = 'videoplayer-current';
player.on('timeupdate', throttle(currentTime, 1000));
// console.log(player);
function currentTime(data) {
  localStorage.setItem(KEY_REFUGE, JSON.stringify(data.seconds));
  let time = JSON.parse(localStorage.getItem(KEY_REFUGE));
  if (time) {
    player.setCurrentTime(time);
  }
}
