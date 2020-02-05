// ===== simple function args =====

function sum(a: number, b: number): number {
  return a + b;
}

sum(1, 2);

// ===== function for different params =====

interface MyPosition {
  x: number;
  y: number;
}

interface DefaultPosition extends MyPosition {
  default: string;
}

function position(): MyPosition;
function position(a: number): DefaultPosition;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }
  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() };
  }
  return { x: a, y: b };
}

console.log("Empty", position());
console.log("One param", position(10));
console.log("Two param", position(5, 10));

// function with callback
function func(callback: Function) {
  return callback();
}

console.log(func(() => "hello"));
