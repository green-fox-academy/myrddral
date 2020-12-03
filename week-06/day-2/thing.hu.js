class Thing {

    constructor(name) {
      this.name = name;
    }
  
    complete() {
      this.completed = true;
    }
  
    getName() {
      return this.name;
    }
  
    getCompleted() {
      return this.completed;
    }
  
    toString() {
      return `[${this.completed ? 'x' : ' '}] ${this.name}`;
    }
  }
  
  export { Thing };