---
# Html template
layout: home
---
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
<canvas id="canvas_anim"></canvas>
<canvas id="canvas_traj"></canvas>
<p id="output"></p>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="systems/pendulum.js"></script>
<script src="runner.js"></script>
<script src="main.js"></script>
</body>
</html>

