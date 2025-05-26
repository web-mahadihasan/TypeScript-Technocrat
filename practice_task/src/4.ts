
{

//
    
    //* ::: Practice Task 4 ::: *//

    /*
    * Task 4: Union and Intersection Types
    * Objective: Create union and intersection types using interfaces.
    * Instructions
    *  1. Define interfaces Book and Magazine.
    *  3. Create
    *       i. A type that is a union of Book and Magazine.
    *       ii. A type that is an intersection of Book and Magazine.
    * */
    
    const fourth = (str: string):string => {
        let reverse:string = "";
        for(let i:number = str.length - 1; i >= 0; i--){
            reverse += str[i]
        }
        return reverse
    }
    
    console.log(fourth('Mahadi'))
    
    
//
}