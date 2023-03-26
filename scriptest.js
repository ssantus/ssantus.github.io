var canvas = document.getElementById('canvas-pyramid');
var ctx = canvas.getContext('2d');
var angle = 0;
// Set the background color
ctx.fillStyle = '#fcc4d4';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawTriangle() {
   ctx.beginPath();
   ctx.moveTo(-50, 50);
   ctx.lineTo(50, 50);
   ctx.lineTo(0, -50);
   ctx.closePath();
   ctx.fillStyle = '#00FF00';
   ctx.fill();
   }
ctx.translate(canvas.width / 2, canvas.height / 2);
drawTriangle();
//function animate() {
//   ctx.clearrect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
//   ctx.fillstyle = '#fcc4d4';
//   ctx.fillrect(0, 0, canvas.width, canvas.height);
//   ctx.translate(canvas.width / 2, canvas.height / 2);
//   angle += 0.05;
//   ctx.rotate(angle * Math.PI / 180);
//   drawTriangle();
//   requestAnimationFrame(animate);
//}
//requestAnimationFrame(animate);
