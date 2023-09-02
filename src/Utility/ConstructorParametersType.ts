// ConstructorParameters<Type>: Extracts the parameter types of a constructor function type Type as a tuple.

class Person {
    constructor(name: string, age: number) {}
  }
  
  type PersonConstructorParams = ConstructorParameters<typeof Person>;
  // PersonConstructorParams is [string, number]
  