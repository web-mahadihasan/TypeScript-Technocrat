// Function in typeScript 

// Normal funtion  

// Number type funtion. j ta number nibe and return o korbe number
function function1(a: number, b: number) : number {
    return a + b
}

console.log(function1(5, 500))


// Array method 

const arr : number [] = [5, 10, 20, 50]

const squire: number [] = arr.map((elem : number):number => elem * elem)


// if string array 
const strSquire: string [] = arr.map((elem : number): string => `${elem * elem} double`)

