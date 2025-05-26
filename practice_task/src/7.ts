
{

//
    
    //* ::: Practice Task 7 ::: *//

    /*
    * Task 7: Type Assertion and Narrowing
    * Objective: Write a function that behaves differently based on the input type
    * Create a function that accepts a parameter of type string | number.
    * The function should
    *  1. Return the length if the input is a string.
    *  2. Return the square if the input is a number.
    * 
    * */

    type Seven<T> = T extends number ? number : string
    
    const seven =<T extends number | string> (param: T): Seven<T> => {

       return (typeof param === 'string'? `Type string and length is ${param.length}` :  (param as number) * (param as number)) as Seven<T>
    }

    console.log(seven(10))
    console.log(seven('Mahadi'))
    
    
//
}