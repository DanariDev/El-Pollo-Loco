function loadImage(src) {
  const img = new Image();
  img.src = src;
  return img;
}

function loadImages(paths) {
  return paths.map(loadImage);
}
