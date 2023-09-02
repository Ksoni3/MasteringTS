// Partial<Type>: Creates a new type by making all properties of Type optional.

interface User {
    name: string;
    age: number;
  }
  
  type PartialUser = Partial<User>;
  // PartialUser is { name?: string; age?: number; }
  