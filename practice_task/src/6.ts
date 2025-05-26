
{

//
    
    //* ::: Practice Task 6 ::: *//

    
    /*
    * Task 6: Spread and Rest Operators, Destructuring
    * Objective: Write a function that uses the rest operator for variable-length arguments
    * Instructions
    * Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.
    * 
    * */
    
    const six = (...rest: number[]): number => {
        return rest.reduce((a, b) => a + b, 0)
    }
    
    console.log(six(1,5,4,8,6,7,3,8,6,41,36))
    console.log(six(1,5,4,8,6,7,41,36))
    console.log(six(1,5,6,41,36))
    console.log(six(6,7,3,8,6,41,36))
//
}