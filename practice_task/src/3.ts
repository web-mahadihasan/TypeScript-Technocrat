
{

//
    
    //* ::: Practice Task 3 ::: *//

    /*
    * Task 3: Object Types, Type Alias, & Literal Types
    * Objective: Define a structured Person object using Type Aliases.
    * Instructions
    *  Define a Person type alias. 
    *  properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.
    * 
    * */

    type ThirsUser = {
        name: string;
        address: string;
        hairColor: string;
        eyeColor: string;
        income: number;
        expense: number;
        hobbies: string[];
        familyMembers?: string[];
        job: string;
        skills?: string[];
        maritalStatus: string;
        friends?: string[]
    }
    
    const person1: ThirsUser = {
        name: "Alice",
        address: "123 Main St",
        hairColor: "Black",
        eyeColor: "Brown",
        income: 5000,
        expense: 2000,
        hobbies: ["Reading", "Hiking"],
        familyMembers: ["Bob", "Carol"],
        job: "Software Engineer",
        skills: ["TypeScript", "React"],
        maritalStatus: "Single",
        friends: ["Dave", "Eve"]
      };
      
      const person2: ThirsUser = {
        name: "John",
        address: "456 Oak Ave",
        hairColor: "Blonde",
        eyeColor: "Blue",
        income: 4500,
        expense: 1500,
        hobbies: ["Cycling"],
        familyMembers: ["Jane"],
        job: "Teacher",
        skills: ["Communication", "Planning"],
        maritalStatus: "Married"
        // No friends listed
      };
      
      const person3: ThirsUser = {
        name: "Sara",
        address: "789 Pine Rd",
        hairColor: "Black",
        eyeColor: "Brown",
        income: 3000,
        expense: 1200,
        hobbies: ["Painting", "Gaming"],
        job: "Designer",
        maritalStatus: "Single"
        // Missing optional fields: familyMembers, friends, skills
      };

      const third = (user: ThirsUser): ThirsUser => {
        return user
      }
      console.log(third(person1))
      console.log(third(person2))
      console.log(third(person3))
    
//
}