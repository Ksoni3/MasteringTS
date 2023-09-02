 type FT3 = (n: number, m: number, o?: number)=> number;

 const f3:FT3 = ( n,m,o)=>{
    return n*m*o;
 }

//  if we make one of the parmater optional, invoking that function will throw an error, so we should do:

// type FT4 = (n: number, m: number, l?: number)=> number | string;

// const f4:FT4 = ( n,m,l)=>{
//     if(typeof l === 'undefined'){
//         return n * m;

//     }
//    return n*m*l;
// }


// default parameter

type FT4 = (n: number, m: number, l: number)=> number | string;

const f4:FT4 = ( n,m,l = 50)=>{
    
   return n*m*l;
}
f4(10,20)

// this also gives error as we have not passed value for l, as it is default. So to avoid this problem, we have to make l opitonal

type FT5 = (n: number, m: number, l?: number)=> number | string;

const f5:FT5 = ( n,m,l = 50)=>{
    
   return n*m*l;
}
f5(10,20)

//with normal function:

function lol(n:number):number{
    return 45
}



