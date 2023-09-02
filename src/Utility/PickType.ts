// Pick<Type, Keys>: Creates a new type by picking specific properties (Keys) from Type.

interface User {
    name: string;
    age: number;
    email: string;
  }
  
  type UserBasicInfo = Pick<User, 'name' | 'age'>;
  // UserBasicInfo is { name: string; age: number; }
  