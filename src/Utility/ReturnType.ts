// ReturnType<Type>: Extracts the return type of a function type Type.

function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  
  type GreetReturnType = ReturnType<typeof greet>;
  // GreetReturnType is string
  