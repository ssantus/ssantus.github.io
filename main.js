var canvas = document.getElementById('canvas-dynamics');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

//const {Pendulum} = require('./pendulum.js');
//const {Runner} = require('./runner.js');

const pendulum = new Pendulum(1, 9.81, 1, 0.1); 
const runner = new Runner(pendulum, 0.01);

const x0 = [0, 0];
//const x0 = [Math.PI / 2, 0];
const T = 10;

let x = x0;
for(let t = 0; t < T; t += runner.dt){
  const xdot = runner.xdot(x, 0);
  x = runner.step(x, xdot);
  console.log(`x = ${x}`);
  //console.log(`x = [${x.map(xi => xi.toFixed(2)).join(', ')}]`);
}
