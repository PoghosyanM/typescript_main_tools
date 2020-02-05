interface Person {
  name: string;
  age: number;
}

// "keyof" get keys of Person interface
type PersonKeys = keyof Person;

const keyName: PersonKeys = "name";
const keyAge: PersonKeys = "age";
// const keySurname: PersonKeys = "surname"; --- Error: we can set only 'name' and 'age'

// ===== Pick and Exclude =====

type User = {
  _id: number;
  name: string;
  surname: string;
  createdAt: Date;
};

type UserKeysUnChoosedProperties = Exclude<keyof User, "_id" | "createdAt">; // there are 'name' and 'email'
type UserKeysChoosedProperties = Pick<User, "name" | "surname">; // there are 'name' and 'email'

let unChoosed: UserKeysUnChoosedProperties = "name";
// unChoosed = '_id' --- Error

let choosed: UserKeysChoosedProperties = {
  name: "Mihran",
  surname: "Poghosyan"
  // _id : '12' --- Error
};
