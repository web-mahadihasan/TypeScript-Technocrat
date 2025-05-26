
{

    //
    
        //* ::: Practice Task 10 ::: *//
    
        /*
        * Task 13: Generics with Functions and Interfaces
        * Objective: Use generics to handle different types.
        * Instructions
        *  Create a generic function that.. 
        *   1. Accepts an array of any type.!
        *   2. Returns a new array with duplicate values removed
        * 
        * */


        const ten = <T> (param: T[]): T[] => {
            return [...new Set(param)]
        }
    
        console.log(ten([1, 45, 1, 3, 6, 6, 4, 4, 8, 9, 8, 5]))
    
    
//
}