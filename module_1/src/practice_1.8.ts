// Alias type 


{

type StudentType = {
    name: string;
    address: string;
    contact?: string;
    age: number
}

const student1: StudentType = {
    name: "Studen one",
    address: "Fulbar",
    contact: "85402145245",
    age: 30
}

const student2 : StudentType = {
    name: "Studen one",
    address: "Fulbar",
    contact: "85402145245",
    age: 30
}
const student3 : StudentType = {
    name: "Studen one",
    address: "Fulbar",
    contact: "85402145245",
    age: 30
}

console.log(student1, student2, student3)


// amara jekono data type e alias use korte parbo 

type PersonName = string

const person1 : PersonName = "Abul hossen"

// Alian in funtion 

type Add = (num1: number, num2: number) => number

const add: Add =( (num1, num2) => num1 + num2)


}