var canvas_traj = document.getElementById('canvas_traj');
var ctx_traj = canvas_traj.getContext('2d');
var width = canvas_traj.width;
var height = canvas_traj.height;

var canvas_anim = document.getElementById('canvas_anim');
var ctx_anim = canvas_anim.getContext('2d');
var width = canvas_anim.width;
var height = canvas_anim.height;

const pendulum = new Pendulum(5, 9.81, 60, 10); 
const runner = new Runner(pendulum, 0.0001);

//const x0 = [0.1, 0.0];
const x0 = [Math.PI / 2, 0];
const T = 2;

let x = x0;
q_array = [];
p_array = [];
t_array = [];

for (let t = 0; t < T; t += runner.dt) {
    const xdot = runner.xdot(x, 0);
    x = runner.step(x, xdot);
    q_array.push(x[0]);
    p_array.push(x[1]);
    t_array.push(t);
}

//console.log(`q = ${q_array.map(xi => xi.toFixed(5)).join(', ')}`);
//console.log(`p = ${p_array.map(xi => xi.toFixed(5)).join(', ')}`);

var q_chart = new Chart(ctx_traj, {
    type: 'line',
    data: {
        labels: t_array.map(xi => xi.toFixed(2)),
        datasets: [{
            label: 'q vs t',
            data: q_array,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 1
        },
            {
                label: 'p vs t',
                data: p_array,
                borderColor: 'rgba(132, 99, 255, 1)',
                backgroundColor: 'rgba(132, 99, 255, 0.2)',
                borderWidth: 1
            }
        ]}});
// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My Signal',
//             data: [0, 10, 5, 2, 20, 30, 45],
//             borderColor: 'rgba(255, 99, 132, 1)',
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
const fps = 60;
const interval = 1 / fps;
var iter = 0;
setInterval(() => {
  if(iter * runner.dt > T){
    x = x0;
    iter = 0;
  }
  const xdot = runner.xdot(x, 0);
  x = runner.step(x, xdot);
  ctx_anim.clearRect(0, 0, width, height);
  pendulum.draw(ctx_anim, x, width, height);
  iter++;
}, interval);
