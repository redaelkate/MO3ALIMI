const canvas = document.getElementById('main-canvas');
const smallCanvas = document.getElementById('small-canvas');
const smallMainCanvas = document.getElementById('small-main-canvas');
const resultBox = document.getElementById('result');
const letterImage = document.getElementById('letter-image');

const inputBox = canvas.getContext('2d');
const smBox = smallCanvas.getContext('2d');
const smMBox = smallMainCanvas.getContext('2d');

let isDrawing = false;
let model;

/* Load trained model */
async function init() {
  model = await tf.loadLayersModel('model-character/model.json');
  setRandomTargetLetter();
}

function setRandomTargetLetter() {
  const randomIndex = Math.floor(Math.random() * 28);
  letterImage.src = `images/${randomIndex}.png`; // Images are named with numbers from 0 to 27
  letterImage.dataset.index = randomIndex;
}

canvas.addEventListener('mousedown', event => {
  isDrawing = true;

  inputBox.strokeStyle = 'white';
  inputBox.lineWidth = '15';
  inputBox.lineJoin = inputBox.lineCap = 'round';
  inputBox.beginPath();
});

canvas.addEventListener('mousemove', event => {
  if (isDrawing) drawStroke(event.clientX, event.clientY);
});

canvas.addEventListener('mouseup', event => {
  isDrawing = false;
});

canvas.addEventListener('touchstart', start, false);
canvas.addEventListener('touchmove', move, false);
canvas.addEventListener('touchend', end, false);

function drawStroke(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;

  inputBox.lineTo(x, y);
  inputBox.stroke();
  inputBox.moveTo(x, y);
}

function predict() {
  let values = getPixelData(flipAndRotate());
  let predictions = model.predict(values).dataSync();
  return predictions;
}

function getPixelData(imgData) {
  let values = [];
  for (let i = 0; i < imgData.data.length; i += 4) {
    values.push(imgData.data[i] / 255);
  }
  values = tf.tensor(values).reshape([1, 64, 64, 1]);
  return values;
}

function updateDisplay() {
  smMBox.drawImage(inputBox.canvas, 0, 0, smallCanvas.width, smallCanvas.height);
  const imageData = smMBox.getImageData(0, 0, smallCanvas.width, smallCanvas.height);
  
  const predictions = predict();
  const bestPred = predictions.indexOf(Math.max(...predictions));
  const targetIndex = parseInt(letterImage.dataset.index);

  if (bestPred === targetIndex) {
    resultBox.innerText = 'صحيح!';
    resultBox.style.color = 'green';
  } else {
    resultBox.innerText = 'حاول مرة أخرى!';
    resultBox.style.color = 'red';
  }
}

document.getElementById('erase').addEventListener('click', erase);
document.getElementById('predict').addEventListener('click', updateDisplay);
document.getElementById('next').addEventListener('click', () => {
  erase();
  setRandomTargetLetter();
});

function flipAndRotate() {
  smBox.save();
  smBox.translate(smallCanvas.width / 2, smallCanvas.height / 2);
  smBox.rotate(270 * Math.PI / 180);
  smBox.scale(-1, 1);
  smBox.drawImage(smMBox.canvas, -smallCanvas.width / 2, -smallCanvas.height / 2);
  smBox.restore();
  return smBox.getImageData(0, 0, smallCanvas.width, smallCanvas.height);
}

function erase() {
  inputBox.fillStyle = 'black';
  inputBox.fillRect(0, 0, canvas.width, canvas.height);
  resultBox.innerText = '';
}

function start(e) {
  isDrawing = true;
  inputBox.strokeStyle = 'white';
  inputBox.lineWidth = '15';
  inputBox.lineJoin = inputBox.lineCap = 'round';
  inputBox.beginPath();
}

function move(e) {
  e.preventDefault();
  if (isDrawing) drawStroke(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
}

function end(e) {
  isDrawing = false;
}

erase();
init();
