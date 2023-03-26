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
    const {mass, length, gravity, damping} = this;
    const [q, p] = x;
    const qdot = p / (mass * length * length);
    const pdot = -mass * gravity * length * Math.sin(q);
    return [pdot,-qdot-damping*pdot];
  }
  // g(x)
  g(x){
    return [0, 1];
  }
  // u
  u(x){
    return 0;
  }
}
