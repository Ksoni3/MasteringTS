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