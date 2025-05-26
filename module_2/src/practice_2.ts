
{
//


//* ::: How to use Generic type in an array ::: *//


/*
 * Generic type ta generic type like Array, Object etc.
 * J ta params recive kore and array ba object k sei type hobe seta define kore.
 * Reuseable khettre amra Generic type use korte pari, ata <> vitor params ney. 
 * 
 */

type GenericArray<T> = Array<T>

const numberArr: GenericArray<number> = [1, 2, 3]
const stringArr: GenericArray<string> = ['Mr. X', 'Mr, Y']
const booleanArr: GenericArray<boolean> = [true, false, true]


//* ::: How to use Generic type tuple array in an array ::: *//

type GenericTuple<X, Y> = [X, Y]

const infor: GenericTuple<string, {age: number, email: string}> = ['Mahadi Hasan', {age: 27, email: "mehedihasan7@gmail.com"}]



//* ::: How to use Generic type object ::: *//

const genObj: GenericArray<{name: string, phone: number}> = [
    {
        name: 'Mahadi Hasan',
        phone: 48545
    },
    {
        name: "Name 2",
        phone: 74475
    },
    // can't do that, that's give error
    {
        age: 27
    }
]

//* ::: we can use Interface in Generic type ::: *//


interface User {
    name: string; 
    phone: number
}

const genAndInterface: GenericArray<User> = [
    {
        name: 'Mahadi Hasan',
        phone: 48545
    },
    {
        name: "Name 2",
        phone: 74475
    }
]

//
}