
{

//
    
    //* ::: Practice Task 5 ::: *//

     /*
    * Task 5: Function Type
    * Objective: Write a function that reverses a string.
    * Instructions
    * Write a function reverseString that:
    *  1. Takes a single string argument
    *  2. Returns the string in reverse order
    *  3. Example
    *       i. Input: "hello"
    *       ii. Output: "olleh"
    * 
    * */

    type Book = {
        name: string;
        author: string;
        price: number
    }

    interface Magazine {
        name: string;
        relaseYear: number;
        storyLineUP: string
    }

    type BookOrMagazine = Book | Magazine

    const magazine1: Book = {
        name: "Intersting",
        author: "Mahadi",
        price: 41545
    }
    type IntersectionType = Book & Magazine

    const interSection: IntersectionType = {
        name: "How to learn typeScript",
        relaseYear: 2025,
        storyLineUP: 'Programing',
        author: "Mahadi",
        price: 654
    }

//
}