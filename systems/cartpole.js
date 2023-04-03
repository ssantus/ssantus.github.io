//Cartpole porthamiltonian dynamics
class cartpole() {
    constructor() {
        this.m1 = 1.0; //mass of cart
        this.m2 = 0.1; //mass of pole
        this.l = 0.5; //length of pole
        this.g = 9.8; //gravity
        this.b = 0.1; //damping
        this.dt = 0.01; //time step
    }
    //function to compute the hamiltonian
    hamiltonian(x, xdot, theta, thetadot) {
        let T = 0.5 * this.m1 * xdot * xdot + 0.5 * this.m2 * (xdot * xdot + (this.l * thetadot) * (this.l * thetadot));
        let V = this.m2 * this.g * this.l * (1 - Math.cos(theta));
        return T + V;
    }
    //function to compute the derivatives of the hamiltonian
    hamiltonianDerivatives(x, xdot, theta, thetadot) {
        let dHdx = this.m1 * xdot + this.m2 * xdot;
        let dHdxdot = this.m1 * x + this.m2 * x + this.b * xdot;
        let dHdtheta = -this.m2 * this.l * thetadot * thetadot * Math.sin(theta);
        let dHdthetadot = -this.m2 * this.l * thetadot * Math.cos(theta);
        return [dHdx, dHdxdot, dHdtheta, dHdthetadot];
    }
    //function to compute the derivatives of the state
    stateDerivatives(x, xdot, theta, thetadot) {
        let dHdx = this.m1 * xdot + this.m2 * xdot;
        let dHdxdot = this.m1 * x + this.m2 * x + this.b * xdot;
        let dHdtheta = -this.m2 * this.l * thetadot * thetadot * Math.sin(theta);
        let dHdthetadot = -this.m2 * this.l * thetadot * Math.cos(theta);
        let dxdot 
