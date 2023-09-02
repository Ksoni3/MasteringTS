// Type Assertions with TypeScript

'as'

const btn = document.getElementById("btn");
btn.onclick
// this gives error as btn could possibly be null. to solve this;

// first way using (!) not null
const btn1 = document.getElementById("btn")!;
btn1.onclick

// second way

const btn2 = document.getElementById("btn") as HTMLElement;
const img = <HTMLImageElement>document.getElementById("img1");
// img.src : we can access src now  

const form = document.getElementById('myform') as HTMLFormElement;
const myInput = document.querySelector("form > input") as HTMLInputElement;

form.onsubmit = (e:SubmitEvent)=>{
    e.preventDefault()
    console.log(typeof myInput.value)
    const num:number = Number(myInput.value);
    return num + 20

}

 



