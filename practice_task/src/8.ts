
{

//
    
    //* ::: Practice Task 8 ::: *//


    
    /*
    * Task 9: Optional Chaining
    * Objective: Use optional chaining with nested objects.
    * Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.
    * 
    * */
    
    type CheckNesting = {
        address?: {
            city: {
                vill: string;
                thana?: string
            }
            home?: string;
            flatNo: number;
            roadNo?: number
        }
    }
    
    const checkNest : CheckNesting = {
        address: {
            city: {
                vill: "fulbari"
            },
            flatNo: 10,
            roadNo: 7
        }
    }
    
    console.log(checkNest)
    console.log(typeof checkNest)
//
}