import '../css/styles.scss';
import Space from '../assets/images/space.png';
import Player from './player';
import InvaderController from './invaderController';
import BulletController from './bulletController';



let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const playerBulletController = new BulletController(canvas, 10, "red", true);

const player = new Player(canvas,3,playerBulletController);
const invaderController = new InvaderController(canvas);


function game(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    invaderController.draw(ctx);
    player.draw(ctx);
    playerBulletController.draw(ctx);
}
setInterval(game, 1000/60);

const background = new Image();
background.src = Space;
