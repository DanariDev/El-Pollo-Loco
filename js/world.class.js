class World {
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;

    this.bg = new Background();
    this.character = new Character(80, GAME.GROUND_Y);
    this.cameraX = 0;

    this.#loop();
  }
  #update() {
    this.character.update(this.keyboard);

    this.character.x = Math.max(0, Math.min(
      this.character.x, GAME.LEVEL_WIDTH - this.character.width
    ));

    const target = this.character.x - GAME.WIDTH / 2;
    this.cameraX = Math.max(0, Math.min(target, GAME.LEVEL_WIDTH - GAME.WIDTH));

    this.bg.update(this.keyboard);
  }
  #draw() {
    this.ctx.clearRect(0, 0, GAME.WIDTH, GAME.HEIGHT);
    this.bg.draw(this.ctx, this.cameraX);
    this.character.draw(this.ctx, this.cameraX);
  }
  #loop() {
    this.#update();
    this.#draw();
    requestAnimationFrame(() => this.#loop());
  }
}
