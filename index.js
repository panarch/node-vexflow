const fs = require('fs');
const { JSDOM } = require('jsdom');
const dom = new JSDOM(`<!DOCTYPE html></html>`);
window = dom.window;
document = dom.window.document;

function createCanvas() {
  const canvas = document.createElement('canvas');
  dom.window.document.body.appendChild(canvas);

  return canvas;
}

function _getImageData(canvas) {
  return canvas.toDataURL().split(';base64,').pop();
}

function extractImage(canvas) {
  const image = Buffer.from(
    _getImageData(canvas),
    'base64'
  );

  return image;
}

function writeImage(canvas, filename) {
  const image = _getImageData(canvas);

  fs.writeFileSync(filename, image, { encoding: 'base64' });
}

module.exports = {
  dom,
  createCanvas,
  extractImage,
  writeImage,
};
