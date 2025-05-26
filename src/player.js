import PlayerSprite from '../assets/images/player.png';

let rightPressed = false;
let leftPressed = false;

export default class Player {
  constructor(canvas, velocity) {
    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
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
    keydown = (event) => {
      if (event.code == "ArrowRight") {
        this.rightPressed = true;
      } else if (event.code == "ArrowLeft") {
        this.leftPressed = true;
      }
    }
    keyup = (event) => {
      if (event.code == "ArrowRight") {
        this.rightPressed = false;
      } else if (event.code == "ArrowLeft") {
        this.leftPressed = false;
      }  
    };
    move(){
        if(this.rightPressed){
            this.x += this.velocity;
            console.log("rightPressed " + this.rightPressed);
        }else if(this.leftPressed){
            this.x -= this.velocity;
            console.log("leftPressed " + this.leftPressed);
        }
    }
}