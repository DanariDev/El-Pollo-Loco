/**
 * Repräsentiert den spielbaren Charakter (Pepe) mit Animationen und Steuerung.
 */
class Character {
  /**
   * Erstellt eine neue Charakter-Instanz.
   * @param {number} x - Startposition auf der X-Achse (Pixel).
   * @param {number} groundY - Y-Position des Bodens, auf dem der Charakter steht.
   */
  constructor(x, groundY) {
    this.x = x;
    this.y = groundY;
    this.vy = 0;
    this.width = 90;
    this.height = 120;
    this.onGround = true;

    const idleIdx = Array.from({ length: 10 }, (_, i) => i + 1);
    const walkIdx = [21, 22, 23, 24, 25, 26];
    const jumpIdx = [31, 32, 33, 34, 35, 36, 37, 38, 39];

    this.frames = {
      idle: loadImages(idleIdx.map(n => `${ASSETS}/2_character_pepe/1_idle/idle/I-${n}.png`)),
      walk: loadImages(walkIdx.map(n => `${ASSETS}/2_character_pepe/2_walk/W-${n}.png`)),
      jump: loadImages(jumpIdx.map(n => `${ASSETS}/2_character_pepe/3_jump/J-${n}.png`)),
    };

    this.state = 'idle';
    this.frame = 0;
    this.ticks = 0;
  }

  /**
   * Aktualisiert die Spiellogik des Charakters.
   * @param {Keyboard} kb - Aktuelle Eingaben der Tastatur.
   */
  update(kb) {
    if (kb.LEFT)  this.x -= GAME.SPEED;
    if (kb.RIGHT) this.x += GAME.SPEED;

    if (kb.UP && this.onGround) {
      this.vy = -GAME.JUMP;
      this.onGround = false;
    }

    this.vy += 0.6;
    this.y += this.vy;

    if (this.y > GAME.GROUND_Y) {
      this.y = GAME.GROUND_Y;
      this.vy = 0;
      this.onGround = true;
    }

    const moving = kb.LEFT || kb.RIGHT;
    if (!this.onGround) this.state = 'jump';
    else if (moving)    this.state = 'walk';
    else                this.state = 'idle';

    this.#animate();
  }

  /**
   * Animation-Frame wechseln.
   * @private
   */
  #animate() {
    const speed = this.state === 'walk' ? 6 : (this.state === 'jump' ? 5 : 8);
    if (++this.ticks >= speed) {
      this.ticks = 0;
      const arr = this.frames[this.state];
      this.frame = (this.frame + 1) % arr.length;
    }
  }

  /**
   * Zeichnet den Charakter.
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} [camX=0] - Kamera-Offset.
   */
  draw(ctx, camX = 0) {
    const img = this.frames[this.state][this.frame];
    ctx.drawImage(img, this.x - camX, this.y - this.height, this.width, this.height);
  }
}
