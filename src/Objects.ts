// typescript with objects

const obj = {
    height: 12,
    length: 12
}

//if we try to define the type after obj, the code gets bigger. i.e

const obj1 : {
    height: number;
    length: number;
} = {
    height: 10,
    length: 10
}

// we can define the type for obj1 using type or interface:

type Obj3Type = {
    height: number;
    length: number;
    isReady: boolean;
    //if we dont give this property to our object, it gives an error
    price?: number;
    // ? makes any property optional, we dont need to define or use them in our objects
}

const obj3 : Obj3Type= {
    height: 12,
    length: 12,
    isReady: true
}


//using interface - code structure is similar to class,

interface I1{
    height: number;
    length: number;
    isReady: boolean;

}

//  we can extend other interface which we cannot do with type

type FT1 = (n:number, m:number)=> void;

interface I2 extends I1{
    price: number;
    func: (n:number, m:number)=> void;
    
    // for better code structure, we can use Type for defining funcion and use that with in iterface

    func2? : FT1;

}

const obj4 : I2 ={
    height: 12,
    length: 12,
    isReady: true,
    price: 700,
    // func: (n,m)=>{
    //     console.log(n+m)
    // we have to define the type of parameters in function
    // }
    func:(n,m)=>{
        console.log(n+m)

    }
    
}

obj4.func(20,39) // this should give output 69