//boolean
const isFetching: boolean = true;

//string
const str: string = "string";

// string in array
const stringArray: number[] = [1, 2, 3, 4, 5];
const stringArray2: Array<number> = [1, 2, 3, 4, 5];

// array
const contact: [string, number] = ["1", 2];

// any
let someValue: any = 12;
someValue = "12";

// function args
function foo(name: string): void {
  console.log("name", name);
}
foo("Hello");

// ---Never--- when output is error or infinite action
function someError(message: string): never {
  throw new Error(message);
}
someError("Some Error");

function infiniteAction(): never {
  while (true) {}
}

// custom type
type ID = string | number;

const id1: ID = 1;
const id2: ID = "1";

// null and undefined
type someType = string | null | undefined;
