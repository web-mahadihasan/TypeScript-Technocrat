
{

//

    //* ::: Practice Task 9 ::: *//

    /*
    * Task 10: Nullish Coalescing
    * Objective: Handle null and undefined values using nullish coalescing.
    * Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined.
    * 
    * */

    
    type IsNullish = null | undefined

    const nine = (val: IsNullish | string): string => {
        return val ?? "Guest"
    }

    console.log(nine("Mahadi"))
    console.log(nine(null))
    
//
}