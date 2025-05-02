// Basic Data Type
// Reference Type --> Object
//Learning function ---> Normal Function ---> Arrow Function
// spread operator
// rest oprator
// destructuring
// Type Alias
// union types
// ternary operator || optional chaining || nullish coalescing operator
// nullable types / unknown types

//type assertion
//interface vs type
//generic with type
//generic with interface
//function with generics
//constraints in typescript
//generic constraint with keyof operator

interface Developer<T> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartWatch: T;
}

interface SmartWatch {
  brand: string;
  model: string;
  display: string;
}

const poorDeveloper: Developer<SmartWatch> = {
  name: "Rifat",
  computer: {
    brand: "HP",
    model: "45787sd",
    releaseYear: 2021,
  },
  smartWatch: {
    brand: "Emilab",
    model: "5wre",
    display: "OLED",
  },
};

const richDeveloper: Developer<SmartWatch> = {
  name: "Rifat",
  computer: {
    brand: "HP",
    model: "45787sd",
    releaseYear: 2021,
  },
  smartWatch: {
    brand: "Emilab",
    model: "5wre",
    display: "OLED",
  },
};

const createArray = <T>(param: T): T[] => {
  return [param];
};

const res1 = createArray<string>("Bangladesh");
