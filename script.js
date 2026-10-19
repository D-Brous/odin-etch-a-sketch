const DEFAULT_SKETCH_PAD_LENGTH = 16;
const promptMessage = 'Please enter the desired grid side length in pixels:';
const badInputMessage = '**Must enter a positive integer <= 100**';

function isPositiveInteger(number) {
  return /^\d+$/.test(number) && Number(number) > 0;
}

function createPixel() {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.addEventListener('mouseenter', (_) => {
    pixel.classList.add('pixel-selected')
  });
  return pixel
}

function createPixelRow() {
  const pixelRow = document.createElement('div');
  pixelRow.classList.add('pixel-row');
  return pixelRow
}

function createSketchPad(length) {
  const sketchPad = document.querySelector('#sketch-pad');
  for (let i = 0; i < length; i++) {
    const pixelRow = createPixelRow();
    sketchPad.appendChild(pixelRow);
    for (let j = 0; j < length; j++) {
      const pixel = createPixel();
      pixelRow.appendChild(pixel);
    }
  }
}

function deleteSketchPad() {
  const sketchPad = document.querySelector('#sketch-pad');
  const pixelRows = sketchPad.childNodes;
  for (const pixelRow of pixelRows) {
    pixelRow.replaceChildren();
  }
  sketchPad.replaceChildren();
}

createSketchPad(DEFAULT_SKETCH_PAD_LENGTH);
const lengthButton = document.querySelector('#display-size');
const badInput = document.querySelector('#bad-input');
lengthButton.addEventListener('click', (_) => {
  const length = prompt(promptMessage);
  if (isPositiveInteger(length) && length <= 100) {
    deleteSketchPad();
    createSketchPad(length);
    badInput.textContent = "";
  } else {
    badInput.textContent = badInputMessage;
  }
})