// ===== simple class =====

class Typescript {
  version: string;
  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

// ===== class with readonly property =====

// *** readonly property can be changed only in constructor ***

// example
class Car {
  readonly model: string;
  readonly numberOfWeels: number = 4;

  constructor(theModel: string) {
    this.model = theModel;
  }
}

// same action which do above class but most shortly
class ShortCar {
  readonly numberOfWeels: number = 4;

  constructor(readonly model: string) {}
}

// ===== Protected property =====

// protected property visible inside parent class and child class
// public property visible only inside parent class
class Animal {
  protected voice: string = "";
  public color: string = "black";
  constructor() {
    this.go();
  }

  go() {
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice("test");
// cat.voice : Error: visible only parent class

// ===== Abstract class =====

//abstract class don't compile

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Render");
  }
  info(): string {
    return "Info";
  }
}
