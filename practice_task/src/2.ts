{
//

    //* ::: Practice Task 2 ::: *//

    /*
    * Task 2: Functions, Optional, and Literal Types
    * Objective: Create a function with parameters and an optional literal type.
    * Instructions
    *  Define a function that takes:. 
    *   1. name (string)
    *   2. age (number)
    *   3. role (optional, with type 'admin' | 'user' | 'guest')
    * The function should log these values or perform a basic action.
    * 
    * */


    type Role = 'Admin' | 'User' | 'Guest'
    interface UserData2 {
        name: string;
        age: number;
        role: Role
    }

    const second = (user: UserData2): string => {
        return `Hey, I am ${user.name}. My age is ${user.age}. I am the ${user.role} of this pc`
    }

    const userInfo2:UserData2 = {
        name: "Mahadi Hasan",
        age: 27,
        role: 'Admin'
    }

    console.log(second(userInfo2))


//
}