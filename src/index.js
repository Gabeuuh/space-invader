import '../css/styles.scss';
import Space from '../assets/images/space.png';

import InvaderController from './invaderController';


let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
const invaderController = new InvaderController(canvas);

function game(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    invaderController.draw(ctx);
}
setInterval(game, 1000/60);

const background = new Image();
background.src = Space;
