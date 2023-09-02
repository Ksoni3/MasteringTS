// Parameters<Type>: Extracts the parameter types of a function type Type as a tuple.

function multiply(a: number, b: number): number {
    return a * b;
  }
  
  type MultiplyParams = Parameters<typeof multiply>;
  // MultiplyParams is [number, number]
  