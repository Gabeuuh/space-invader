import PlayerSprite from "../assets/images/player.png";

export default class Player {
  constructor(canvas, velocity, BulletController) {
    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
    this.canvas = canvas;
    this.velocity = velocity;

    this.x = canvas.width / 2;
    this.y = canvas.height - 50;
    this.width = 40;
    this.height = 40;
    this.image = new Image();
    this.image.src = PlayerSprite;

    this.shootPressed = false;
    this.BulletController = BulletController;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    this.move();
    this.collideWithWalls();
    if (this.shootPressed) {
      this.BulletController.shoot(this.x + this.width / 2, this.y, 4, 10);
    }
  }

  keydown = (event) => {
    if (event.code === "ArrowRight") {
      this.rightPressed = true;
    } else if (event.code === "ArrowLeft") {
      this.leftPressed = true;
    } else if (event.code === "Space") {
      this.shootPressed = true;
    }
  };

  keyup = (event) => {
    if (event.code === "ArrowRight") {
      this.rightPressed = false;
    } else if (event.code === "ArrowLeft") {
      this.leftPressed = false;
    } else if (event.code === "Space") {
      this.shootPressed = false;
    }
  };

  move() {
    if (this.rightPressed) {
      this.x += this.velocity;
      console.log("rightPressed " + this.rightPressed);
    } else if (this.leftPressed) {
      this.x -= this.velocity;
      console.log("leftPressed " + this.leftPressed);
    }
  }

  collideWithWalls() {
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > this.canvas.width - this.width) {
      this.x = this.canvas.width - this.width;
    }
  }
}
