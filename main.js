var canvas = document.getElementById('canvas-dynamics');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

//const {Pendulum} = require('./pendulum.js');
//const {Runner} = require('./runner.js');

const pendulum = new Pendulum(10, 9.81, 70, 10); 
const runner = new Runner(pendulum, 0.01);

const x0 = [0.1, 0.0];
//const x0 = [Math.PI / 2, 0];
const T = 1;

let x = x0;

// make a for loop that runs at 30 fps
//for(let t = 0; t < T; t += runner.dt){
//  const xdot = runner.xdot(x, 0);
//  console.log(`x = ${x.map(xi => xi.toFixed(5)).join(', ')}`);
//  x = runner.step(x, xdot);
//  ctx.clearRect(0, 0, width, height);
//  pendulum.draw(ctx, x, width, height);
//}

const fps = 30;
const interval = 1000 / fps;
var iter = 0;
setInterval(() => {
  if(iter * runner.dt > T){
    x = x0;
    iter = 0;
  }
  const xdot = runner.xdot(x, 0);
  console.log(`x = ${x.map(xi => xi.toFixed(5)).join(', ')}`);
  x = runner.step(x, xdot);
  ctx.clearRect(0, 0, width, height);
  pendulum.draw(ctx, x, width, height);
  iter++;
}, 1000 / fps);
