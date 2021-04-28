import { Stack } from "./buildStack";
// higher value means higher prec
const prec = (char: any) => {
  switch (char) {
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
      return 2;
    case "^":
      return 3;
    default:
      return -1;
  }
};
let stack = new Stack();

export const convert = (exp: string) => {
  let res = "";
  let regex = /^[A-Za-z]+$/;
  for (let i = 0; i < exp.length; i++) {
    let char = exp[i];
    if (char.match(regex)) {
      res += char;
    } else if (char === "(") {
      //push it to the stack
      stack.push(char);
    } else if (char === ")") {
      //pop untill we found  "("
      while (!stack.isEmpty() && stack.peek() !== "(") {
        res += stack.pop();
      }
      stack.pop();
    } else {
      // an operator is encountered
      while (!stack.isEmpty() && prec(char) <= prec(stack.peek())) {
        res += stack.pop();
      }
      stack.push(char);
    }
  }
  while (!stack.isEmpty()) {
    if (stack.peek() === "(") {
      return "d";
    }
    res += stack.pop();
  }
  return res;
};
