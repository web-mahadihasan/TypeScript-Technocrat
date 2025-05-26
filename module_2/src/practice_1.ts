
{
//


//* ::: Interface Type ::: *//

/*
 * Inter face type onketa type alias ar moto. 
 * Type alias amra premative data type ar khettre use korte pari. 
 * kintu Interface type amra premative data type e use korte pari na.
 * Interface type on non premative data type use korte hoy
 * type alias = use korte hoy, kintu Interface e = use korte hoy na
 * 
 */ 

// Example 

interface User {
    name: string,
    age: number
}

const person: User = {
    name: "Mahadi Hasan",
    age: 27 
}

//* ::: Interface with extends(as like intersection) type ::: *//

/*
 *Interface type ta extend kore User2 type toiri holo & new extended type ta dite hobe 
 *Alias e intersection (like as extends) korte amra "{&}" sign use kori.
 */

interface User2 extends User {
    profession: string
}

const person1: User2 = {
    name: "Mahadi Hasan",
    age: 27,
    profession: "Software Engineer"
}


//* ::: How to use Interface type in an array ::: *//

/*
 * Akne index gula ki type and index ar data gula ki type seta define kore dite hobe
 * Jehetu JS e array akta object ar motoi tai interface e object use kore korte hobe.
 */

interface Roll_1 {
    [index: number]: number
}

const roll_1: Roll_1 = [1, 2, 3]


//* ::: How to use Interface type in a function ::: *//

/*
 * Akne function e params ki type data thakbe, seta params ar nam ar shate dite hobe. 
 * Jehetu JS e funtion o akta object tai {} ar motoi tai interface e object use kore korte hobe.
 * Interface {} moddei likhte hoy
 */


type Add1 = (num1: number, num2: number) => number

const add1 : Add1 = (num1, num2) => num1 + num2

interface Add2 {
    (num1: number, num2: number) : number
}

const add2: Add2 = (num1, num2) => num1 +num2


//* ::: Best practice and best uses ::: *//

//* Funtion ==> alias is best. 
//* Array ==> alias is best. 
//* Objecat ==> alias/interface both can use.



//

}