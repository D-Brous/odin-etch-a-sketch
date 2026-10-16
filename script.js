const SKETCH_PAD_LENGTH = 16

function createPixel() {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.addEventListener('mouseenter', (_) => {
    pixel.classList.add('pixel-selected')
  });
  pixel.addEventListener('mouseleave', (_) => {
    pixel.classList.remove('pixel-selected')
  })
  return pixel
}

function createPixelRow() {
  const pixelRow = document.createElement('div');
  pixelRow.classList.add('pixel-row');
  return pixelRow
}

function createSketchPad() {
  const sketchPad = document.querySelector('#sketch-pad')
  for (let i = 0; i < SKETCH_PAD_LENGTH; i++) {
    const pixelRow = createPixelRow();
    sketchPad.appendChild(pixelRow);
    for (let j = 0; j < SKETCH_PAD_LENGTH; j++) {
      const pixel = createPixel();
      pixelRow.appendChild(pixel);
    }
  }
}

createSketchPad()