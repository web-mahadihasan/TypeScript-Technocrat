


{

    //
    
        //* ::: Practice Task 14 ::: *//
    
        /*
        * Task 14: Asynchronous TypeScript and Type Aliases
        * Objective: Simulate an asynchronous operation with TypeScript.
        * Instructions
        *  Write an asynchronous function that:
        *   1. Simulates fetching user data (containing name and age).
        *   1. Returns the data after a short delay.
        * 
        * */

        type Post = {
            userId: number;
            id: number;
            title: string;
            body: string;
        };
        

        const fetchData = async(): Promise<Post[]> => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
            const data: Post[] = await res.json();
            
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(data);
                }, 1000);
            });
        }
        console.log(fetchData())
    

//

}















https://jsonplaceholder.typicode.com/posts?_limit=5