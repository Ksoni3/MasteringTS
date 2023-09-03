// Record<Keys, Type>: Creates an object type with keys from Keys and values of Type.

type Car = 'sedan' | 'suv' | 'truck';
type CarInventory = Record<Car, number>;
// CarInventory is { sedan: number; suv: number; truck: number; }
