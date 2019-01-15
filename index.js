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

function writeImage(canvas, filename) {
  const image = canvas.toDataURL().split(';base64,').pop();

  fs.writeFileSync(filename, image, { encoding: 'base64' });
}

module.exports = {
  dom,
  createCanvas,
  writeImage,
};