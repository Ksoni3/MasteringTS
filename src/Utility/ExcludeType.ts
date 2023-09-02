// Exclude<Type, ExcludedUnion>: Creates a new type by excluding all types from Type that are assignable to ExcludedUnion.

type Numbers = 1 | 2 | 3 | 4 | 5;
type OddNumbers = Exclude<Numbers, 2 | 4>;
// OddNumbers is 1 | 3 | 5
