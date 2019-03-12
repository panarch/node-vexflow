const { createCanvas, writeImage } = require('./index');
const Vex = require('vexflow');

const canvas = createCanvas();

const VF = Vex.Flow;
const renderer = new VF.Renderer(canvas, VF.Renderer.Backends.CANVAS);
renderer.resize(500, 500);

const context = renderer.getContext();
context.save();
context.fillStyle = 'white';
context.fillRect(0, 0, 500, 500);
context.restore();

const stave = new VF.Stave(10, 50, 400);
stave.addClef('treble').addTimeSignature('3/4');
stave.setText('VexFlow on Node.js', VF.StaveModifier.Position.ABOVE);
stave.setContext(context).draw();

writeImage(canvas, 'sample.png');
