// Pendulum dynamics
class Pendulum{
  // Constructor
  constructor(mass, gravity, length, damping){
    this.mass = mass;
    this.gravity = gravity;
    this.length = length;
    this.damping = damping;
  }
  // f(x)
  f(x){
    const {mass, gravity, length, damping} = this;
    const [q, p] = x;
    const qdot = p / mass; 
    const pdot = -mass * gravity * length * Math.sin(q) - damping * p / mass;
    //console.log(`damping = ${damping}, p = ${p}, mass = ${mass}, pdot = ${-damping * p / mass}`);
    //console.log(`mass = ${mass}, gravity = ${gravity}, length = ${length}, q = ${q}, pdot = ${-mass * gravity * length * Math.sin(q)}`);
    return [qdot, pdot];
  }
  // g(x)
  g(x){
    return [0, 1];
  }
  // u
  u(x){
    return 0;
  }
  // draw
  draw(ctx, x, width, height){
    const {mass, length, gravity} = this;
    const [q, p] = x;
    const x0 = width / 2;
    const y0 = height / 2;
    const x1 = x0 + length * Math.sin(q);
    const y1 = y0 + length * Math.cos(q);
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x1, y1, 5, 0, 2 * Math.PI);
    ctx.fill();
  }
}
