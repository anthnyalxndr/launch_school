
// eslint-disable-next-line max-lines-per-function
function minilang(str) {
  let stack = [];
  let register = 0;
  const OPERATIONS = {
    PUSH: function () {
      stack.push(register);
    },
    POP: function () {
      register = stack.pop();
    },
    MULT: function () {
      register *= stack.pop();
    },
    PRINT: function () {
      console.log(register);
    },
    ADD: function () {
      register += stack.pop();
    },
    DIV: function () {
      register = Math.floor(register / stack.pop());
    },
    REMAINDER: function () {
      register = Math.floor(register % stack.pop());
    },
    SUB: function () {
      register -= stack.pop();
    }
  };

  let arr = str.split(" ").map((el) => {
    if (!Object.is(Number(el), NaN)) return Number(el);
    return el;
  });

  for (let idx = 0; idx < arr.length; idx++) {
    let el = arr[idx];
    if (typeof el === "number") {
      register = el;
    } else OPERATIONS[el]();
  }
}

// Examples
minilang('PRINT');
// 0

// minilang("5 PUSH 3 MULT PRINT");
// 15

// minilang("5 PRINT PUSH 3 PRINT ADD PRINT");
// 5
// 3
// 8

// minilang('5 PUSH POP PRINT');
// 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

// minilang('-3 PUSH 5 SUB PRINT');
// 8

// minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
