// Common functions
class Runner{
  // Constructor
  constructor(system, dt, outputElement){
    this.system = system;
    this.dt = dt;
    this.outputElement = outputElement;
  }

  add(a, b){
    return a.map((ai, i) => ai + b[i]);
  }
  scalar_mult(a, b){
    return a.map((ai, i) => ai * b);
  }

  // calculate xdot
  xdot(x, u){
    const fx = this.system.f(x);
    const gx = this.system.g(x);
    const gxu = this.scalar_mult(gx, u);
    return this.add(fx, gxu);
  }
  
  // euler integration
  step(x, xdot, u){
    const dt = this.dt;
    const xdotdt = this.scalar_mult(xdot, dt);
    return this.add(x, xdotdt);
  }
  
  print_x(x){
    this.outputElement.text = 'x = [${x.join(', ')}]';
  }
}
