import Bullet from "./bullet";
import ShootSound from "../assets/sounds/shoot.wav";

export default class BulletController {
  constructor(canvas, maxBulletsAtTime, bulletColor, soundEnabled) {
    this.canvas = canvas;
    this.maxBulletsAtTime = maxBulletsAtTime;
    this.bulletColor = bulletColor;
    this.soundEnabled = soundEnabled;
    this.shootSound = new Audio(ShootSound);
    this.shootSound.volume = 0.1;
    this.bullets = [];
    this.timeTillNextBulletAllowed = 0;
  }

  shoot(x, y, velocity, timeTillNextBullet = 0) {
    if (
      this.timeTillNextBulletAllowed <= 0 &&
      this.bullets.length < this.maxBulletsAtTime
    ) {
      const bullet = new Bullet(x, y, velocity, this.canvas, this.bulletColor);
      this.bullets.push(bullet);
      if (this.soundEnabled) {
        this.shootSound.currentTime = 0;
        this.shootSound.play();
      }
      this.timeTillNextBulletAllowed = timeTillNextBullet;
    }
  }
  draw(ctx) {
    this.bullets = this.bullets.filter(
      (bullet) => (bullet.y + bullet.width > 0 && bullet.y + bullet.width < this.canvas.height)
    );
    if (this.timeTillNextBulletAllowed > 0) {
      this.timeTillNextBulletAllowed--;
    }
    this.bullets.forEach((bullet) => bullet.draw(ctx));
  }
  collideWith(sprite) {
    const bulletThatHitSpriteIndex = this.bullets.findIndex((bullet) =>
        bullet.collideWith(sprite)
        );
        if (bulletThatHitSpriteIndex >= 0) {
            this.bullets.splice(bulletThatHitSpriteIndex, 1);
            return true;
        }
        return false;
}
}
