// Readonly<Type>: Creates a new type by making all properties of Type readonly.


interface User {
    name: string;
    age: number;
  }
  
  type ReadonlyUser = Readonly<User>;
  // ReadonlyUser is { readonly name: string; readonly age: number; }
  