class Background {
  constructor() {
    this.x = 0;
    this.sky    = loadImage(`${ASSETS}/5_background/layers/air.png`);
    this.clouds = loadImage(`${ASSETS}/5_background/layers/4_clouds/full.png`);
    this.ground = loadImage(`${ASSETS}/5_background/complete_background.png`);
  }
  update(kb) {
    const speed = 2;
    if (kb.LEFT)  this.x += speed;
    if (kb.RIGHT) this.x -= speed;
    if (!kb.LEFT && !kb.RIGHT) this.x -= 0.1;
  }
  draw(ctx, camX) {
    this.#drawTiled(ctx, this.sky,    camX, 0.2);
    this.#drawTiled(ctx, this.clouds, camX, 0.5);
    ctx.drawImage(this.ground, -camX, 0, GAME.LEVEL_WIDTH, GAME.HEIGHT);
  }
  #drawTiled(ctx, image, camX, factor) {
    const w = GAME.WIDTH;
    let offset = -((camX * factor) % w);
    if (offset > 0) offset -= w;
    ctx.drawImage(image, offset, 0, w, GAME.HEIGHT);
    ctx.drawImage(image, offset + w, 0, w, GAME.HEIGHT);
  }
}