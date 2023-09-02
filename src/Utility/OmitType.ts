// Omit<Type, Keys>: Creates a new type by omitting specific properties (Keys) from Type.

interface User {
    name: string;
    age: number;
    email: string;
  }
  
  type UserWithoutEmail = Omit<User, 'email'>;
  // UserWithoutEmail is { name: string; age: number; }
  