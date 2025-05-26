import PlayerSprite from '../assets/images/player.png';

export default class Player {
  constructor(canvas, velocity) {
    console.log(canvas.width, "CANVAS WIDTH");
    console.log(canvas.height, "CANVAS HEIGHT");
    this.canvas = canvas;
    this.velocity = velocity;

    this.x = canvas.width /2; 
    this.y = canvas.height - 50;
    this.width = 40;
    this.height = 40;
    this.image = new Image();
    this.image.src = PlayerSprite;

  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}