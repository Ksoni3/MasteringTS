// Required<Type>: Creates a new type by making all properties of Type required.

interface PartialUser {
    name?: string;
    age?: number;
  }
  
  type RequiredUser = Required<PartialUser>;
  // RequiredUser is { name: string; age: number; }
  