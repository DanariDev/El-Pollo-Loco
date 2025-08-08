/** Einstieg: Canvas holen, Keyboard & World starten. */
window.addEventListener('load', () => {
  const canvas = document.getElementById('game');
  canvas.width = GAME.WIDTH;
  canvas.height = GAME.HEIGHT;
  const keyboard = new Keyboard();
  window._keyboard = keyboard;      // für kbPressed()
  new World(canvas, keyboard);
});
