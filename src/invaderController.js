import Invader from "./invader.js";

export default class InvaderController {
  invaderMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 2, 2, 3, 3, 2, 2, 1, 1],
    [1, 1, 1, 2, 1, 1, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
  invadersRows = [];
  constructor(canvas) {
    this.canvas = canvas;
  }
  draw(ctx) {
    this.createInvaders();
    this.drawInvaders(ctx);
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

  drawInvaders(ctx){
    this.invadersRows.flat().forEach((invader) => {
        invader.draw(ctx);
    });
  }
}
