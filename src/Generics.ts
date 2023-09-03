// Generics

const fun = (n:number):number =>{
    return n;
}


const fun1 = <T> (n:T): T =>{
    return n;
}

type PersonType = {
    name: string,
    age: number
}

const person1: PersonType = {
    name: 'Kamal',
    age: 10
}

const ans = fun1<PersonType>(person1)
ans.name;

//two parameters

const fun2 = <T, U> (n: T, o:U):{n:T, o:U}=>{
    return {n,o}

}

const ans2 = fun2 <number, string> (20, 'Helloe')
ans2.n


//advance generics example

const ans3 = <T>(arr: T[], property: string, value: number | string): T[]=>{
    return arr;
}
 
ans3(['a','b','c'], "apple", 10 )


// A generic function that takes an array and returns the first element
function getFirstElement<T>(arr: T[]): T | undefined {
    if (arr.length === 0) {
      return undefined;
    }
    return arr[0];
  }
  
  // Using the generic function with different types of arrays
  const stringArray: string[] = ["apple", "banana", "cherry"];
  const numberArray: number[] = [1, 2, 3, 4, 5];
  
  const firstString: string | undefined = getFirstElement(stringArray);
  const firstNumber: number | undefined = getFirstElement(numberArray);
  
  console.log(firstString); // "apple"
  console.log(firstNumber); // 1
  
  // A generic function that reverses the order of elements in an array
  function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
  }
  
  // Using the generic function with different types of arrays
  const reversedStringArray: string[] = reverseArray(stringArray);
  const reversedNumberArray: number[] = reverseArray(numberArray);
  
  console.log(reversedStringArray); // ["cherry", "banana", "apple"]
  console.log(reversedNumberArray); // [5, 4, 3, 2, 1]
  

  // A generic function that swaps the values of two variables
function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
  }
  
  // Using the generic function
  const result = swap("hello", "world"); // inferred type: [string, string]
  
  console.log(result); // ["world", "hello"]
  
  // Another example with numbers
  const numberResult = swap(10, 20); // inferred type: [number, number]
  
  console.log(numberResult); // [20, 10]
  