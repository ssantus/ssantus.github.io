// Common functions
// calculate xdot
function xdot(f, g, x, u){
  const fx = f(x);
  const gx = g(x);
  const gxu = multiply(gx, u);
  return add(fx, gxu);
}

// euler integration
function step(x, xdot){
  const dt = 0.01;
  const xdotdt = multiply(xdot, dt);
  return add(x, xdotdt);
}

function add(a, b){
  return a.map((ai, i) => ai + b[i]);
}

function multiply(a, b){
  return a.map(ai => ai * b[i]);
}

export (xdot, step);
