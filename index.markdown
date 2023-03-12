---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<!-- Hello  -->
<html>
  <head>
    <title>Triangle</title>
    <style>
      canvas {
        border: 0px solid black;
      }
    </style>
  </head>
  <body>
    <!-- <canvas id="canvas" width="400" height="400"></canvas>
    <script>
      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = '#fcc4d4'
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(200, 50);
        ctx.lineTo(350, 350);
        ctx.lineTo(50, 350);
        ctx.closePath();
        ctx.stroke();
        requestAnimationFrame(draw);
      }
      draw();
    </script> -->
    <canvas id="canvas-pyramid" width="400" height="400"></canvas>
    <script>
      var canvas = document.getElementById('canvas-pyramid');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
        ctx.fillStyle = '#ace4ec';
        ctx.fill();
      }
      function animate(timestamp, duration) {
        var timestamp = timestamp || new Date().getTime();
        var runtime = timestamp - starttime;
        var progress = runtime / duration;   
        progress = Math.min(progress, 1);
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = '#fcc4d4';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.translate(canvas.width / 2, canvas.height / 2);
        angle += 0.0005;
        ctx.rotate(progress*angle*Math.PI/180);
        drawTriangle();
        console.log(angle*Math.PI/180);
        // wait for 1 second
        // setTimeout(animate, 100);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);
        // window.requestAnimationFrame(animate);
        if (runtime < duration){ // if duration not met yet
          requestAnimationFrame(function(timestamp){ // call requestAnimationFrame again with parameters
              animate(timestamp, duration)
        })
        }
      }
      // console.log(angle);
      requestAnimationFrame(function(timestamp){
        starttime = timestamp || new Date().getTime() //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
      animate(timestamp, 100000) // 400px over 1 second
      })
    </script>
  </body>
</html>
