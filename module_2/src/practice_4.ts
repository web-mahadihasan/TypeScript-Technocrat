{
//


//* ::: Conditional type ::: *//



/*
 * Typescript e kono type jodi onno r akta type ar depended thake thle seta ke conditional type bola hoy
 * 
 * */


type A = number
type B = string

type C = A extends boolean ? boolean : B extends string ? string : any


/*
* akne A jodi extends kore boolean k thle boolean return korbe, 
* na hole second condition e jabe, b jodi extend kore string thle string return korbe.
* jodi na kore thle any return korbe, 
* tar mane holo C akta conditional type. aitar type onno type ar nirvorshil
* 
* */



//* ::: Conditional type using key of ::: *//

/*
* key of ta muloto object ar key gula k niye akta union type toiri kore
* object key gular shate jodi match koranor jnno ata use kora hoy
* */


interface Brolox {
    car: string, 
    bike: string,
    plane: string,
    bus: string
}

type CheckType<T> = T extends keyof Brolox ? true : false

type HasBus = CheckType<"bike">


/*
* akne checktype ar type ta conditional. ata
* 
* */
//
}