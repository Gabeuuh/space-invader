export default class Bullet {
  constructor(x, y, velocity, canvas, bulletColor) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.canvas = canvas;
    this.bulletColor = bulletColor;
    this.width = 5;
    this.height = 20;
  }

  draw(ctx) {
    this.y -= this.velocity;
    ctx.fillStyle = this.bulletColor;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}