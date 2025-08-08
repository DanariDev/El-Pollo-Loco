/** Liest gedrückte Tasten aus (links/rechts/sprung). */
class Keyboard {
  constructor() {
    this.LEFT = false;
    this.RIGHT = false;
    this.UP = false;
    addEventListener('keydown', (e) => this.#set(e.code, true));
    addEventListener('keyup',   (e) => this.#set(e.code, false));
  }
  #set(code, val) {
    if (code === 'ArrowLeft' || code === 'KeyA') this.LEFT = val;
    if (code === 'ArrowRight'|| code === 'KeyD') this.RIGHT = val;
    if (code === 'ArrowUp'   || code === 'Space' || code === 'KeyW') this.UP = val;
  }
}
