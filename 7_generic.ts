const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5];
const arrayOfStrings: Array<string> = ["Hello", "World"];

// <T> adjusts to certain content that is in this array

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);
