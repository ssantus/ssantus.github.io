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
  multiply(a, b){
    return a.map((ai, i) => ai * b[i]);
  }

  // calculate xdot
  xdot(x, u){
    const fx = this.system.f(x);
    const gx = this.system.g(x);
    const gxu = this.multiply(gx, u);
    return this.add(fx, gxu);
  }
  
  // euler integration
  step(x, xdot){
    const dt = this.dt;
    const xdotdt = this.multiply(xdot, dt);
  //  return this.add(x, xdotdt);
    return [0.,0.];
  }
  
  print_x(x){
    this.outputElement.text = 'x = [${x.join(', ')}]';
  }
}
