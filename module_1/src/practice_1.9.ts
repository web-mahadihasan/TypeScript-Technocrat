
// Union type data in typeScrpt
{

type Position = 'junior Developer' | 'senior Deeloper'

const myPosition: Position = 'junior Developer'


type UserSchema = {
    name: string,
    age: number,
    profession: Position,
    bloodGroup: "O+" | "O-" | "A+" | "AB+"
}


// union type data te amra "|" sign use korte pari and j option gula dibo value segular moddei hote hobe 
const testUser : UserSchema = {
    name: "Mahadi Hasan",
    age: 23,
    profession: "junior Developer",
    bloodGroup: "AB+"
}


// Intersection type data. 

// intersection type data te amra & sign use kori.
//  and ja data type declear thakbe and sei type ar vitor j type gula define kora thakbe sob gula dite hobe 

type IntersectionType1 = {
    skill: string[],
    language1: "typeScript"
}

type IntersectionType2 = {
    skill: string[],
    language2: "javaScript"
}

type FinalIntersectionType = IntersectionType1 & IntersectionType2

const testIntersection: FinalIntersectionType = {
    skill: ["hello", "world"],
    language1: "typeScript",
    language2: "javaScript"
}










}
