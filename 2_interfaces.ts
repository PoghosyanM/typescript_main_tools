interface Rect {
  readonly id: number | string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: 1,
  color: "#fff",
  size: {
    width: 123,
    height: 456
  }
};

const rect2: Rect = {
  id: 1,
  size: {
    width: 12,
    height: 56
  }
};

rect2.color = "#ccc";
// rect2.id = 5 --- ERROR: this property is readonly

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// ===== Inheritence =====

// redurnable value for getUser
interface Obj {
  count: number;
  isLoaded: boolean;
}

interface RectWithArea extends Rect {
  getUser: () => Obj;
}

const rect5: RectWithArea = {
  id: 2,
  size: {
    width: 5,
    height: 5
  },
  getUser(): Obj {
    return {
      count: this.size.width + this.size.height,
      isLoaded: true
    };
  }
};

// ===== Implement =====

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

// ===== set multiple type =====

interface Style {
  [key: string]: string;
}

const setStyles: Style = {
  border: "1px solid red",
  marginTop: "5px"
};
