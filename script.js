
let a = 0; 
let b = 0;
let editor = {};

function setup() {
  let w = window.innerWidth; 
  createCanvas(w < 400 ? w : 400, 250);
  
  next();
  
  editor = document.createElement('input');
  editor.type = 'number';
  editor.addEventListener('change', () => {
    validate();
  });
  document.querySelector('body').appendChild(editor);  
}

function draw() {
  background(0);
  fill(255);
  textSize(60);
  text(a + ' * ' + b, 80, 130);
  
  noLoop();
}

const validate = () => {
  textSize(80);
  fill(255);
  console.log(editor.value + ", " + a + " * " + b + " = " + (a * b));
  
  if(isCorrect()) {
    background(0, 255, 0);  
    text('Dobrze!', 60, 120);
  }else {
    background(255, 0, 0);
    text('Źle!', 80, 120);
  }
  
  window.setTimeout(() => {
    next();
    loop();
  }, 1000);
}

const isCorrect = () => {
  return editor.value == (a * b);
}

const next = () => {
  editor.value = '';
  a = floor(random(10) + 1);
  b = floor(random(10) + 1);
}