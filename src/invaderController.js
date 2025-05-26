import Invader from "./invader.js";
import MovingDirection from "./movingDirection.js";

export default class InvaderController {
  invaderMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 2, 2, 3, 3, 2, 2, 1, 1],
    [1, 1, 1, 2, 1, 1, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
  invadersRows = [];
  currentDirection = MovingDirection.right;
  xVelocity = 0;
  yVelocity = 0;
  defaultXVelocity = 1;
  defaultYVelocity = 1;

  moveDownTimerDefault = 30;
  moveDownTimer = this.moveDownTimerDefault;

  constructor(canvas) {
    this.canvas = canvas;
    this.createInvaders();
  }
  draw(ctx) {
    this.decrementMoveDownTimer();
    this.drawInvaders(ctx);
    this.updateVelocityAndDirection();
    this.resetMoveDownTimer();
  }

  createInvaders() {
    this.invaderMap.forEach((row, rowIndex) => {
      this.invadersRows[rowIndex] = [];
      row.forEach((invaderNumber, invaderIndex) => {
        if (invaderIndex !== 0) {
          this.invadersRows[rowIndex].push(
            new Invader(invaderIndex * 50, rowIndex * 35, invaderNumber)
          );
        }
      });
    });
  }

  drawInvaders(ctx) {
    this.invadersRows.flat().forEach((invader) => {
      invader.draw(ctx);
      invader.move(this.xVelocity, this.yVelocity);
    });
  }

  updateVelocityAndDirection() {
    for (const invaderRow of this.invadersRows) {
      if (this.currentDirection === MovingDirection.right) {
        this.xVelocity = this.defaultXVelocity;
        this.yVelocity = 0;
        const rightMostInvader = invaderRow[invaderRow.length - 1];
        if (rightMostInvader.x + rightMostInvader.width >= this.canvas.width) {
          this.currentDirection = MovingDirection.downLeft;
          console.log("this.currentDirection " + this.currentDirection);
          break;
        }
      } else if (this.currentDirection === MovingDirection.downLeft) {
        if (this.moveDown(MovingDirection.left)) {
          break;
        }
      } else if (this.currentDirection === MovingDirection.left) {
        this.xVelocity = -this.defaultXVelocity;
        this.yVelocity = 0;
        const leftMostInvader = invaderRow[0];
        if (leftMostInvader.x <= 0) {
          this.currentDirection = MovingDirection.downRight;
          console.log("this.currentDirection " + this.currentDirection);

          break;
        }
      } else if (this.currentDirection === MovingDirection.downRight) {
        if (this.moveDown(MovingDirection.right)) {
          break;
        }
      }
    }
  }
  moveDown(newDirection) {
    this.xVelocity = 0;
    this.yVelocity = this.defaultYVelocity;

    if (this.moveDownTimer <= 0) {
      this.currentDirection = newDirection;
      console.log("this.currentDirection " + this.currentDirection);

      return true;
    }
    return false;
  }

  resetMoveDownTimer() {
    if (this.moveDownTimer <= 0) {
      this.moveDownTimer = this.moveDownTimerDefault;
    }
  }

  decrementMoveDownTimer() {
    if (
      this.currentDirection === MovingDirection.downLeft ||
      this.currentDirection === MovingDirection.downRight
    ) {
      this.moveDownTimer--;
    }
  }
}
