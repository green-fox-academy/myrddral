function sayHiFat(greeting) {
    return greeting + ' from ECMAScript 5';
  }
  console.log(sayHiFat('Hello!'));
  
  const sayHiArrow = (greeting) => `${greeting} from ECMAScript 6`;
  console.log(sayHiArrow('Hello!'));