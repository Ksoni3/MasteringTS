// Funtion with objects


const getData = ({
    name: string,
    stock: number,
    price: number,
}):void=>{
    console.log(product)

}

//this gives error as function dont know what parameters are  being passed

const getData = (product:{
    name: string,
    stock: number,
    price: number,
}):void=>{
    console.log(product)

}

//this too is not a good practice


type GetDataType = (product:{
    name: string,
    stock: number,
    price: number,
    location: string,
})=>void;


const getData2:GetDataType = (product)=>{
    console.log(product)
}



const productOne = {
    name: "iphone",
    stock: 20,
    price: 199,
}

// getData2(productOne) gives error as location is missing in product one

interface PI {
    name: string,
    stock: number,
    price: number,
    location: string,
    readonly id : 'string'
    // with readonly we cannot change its value

}

// we can also create this with type, no problem with that

type GetDataType2 = (product : PI) => void;


//Never type

const errorHandler = ():never=>{
    throw new Error();
}


type thememode = 'apple' | "ball"

const theme:thememode = 'cat'
// it gives "Cat is not assignable to type themecode"


