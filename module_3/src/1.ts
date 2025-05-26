
{
//

    //* ::: Module 3, OPP(class & object) ::: *//

    /* 
    * With code duplication we can create class
    * Class is blue print of obejct. 
    * we can make object using class. 
    *
    * */
   

    class testClass {
        constructor(public name: string, public age: number, public knowTypeScript: boolean) {
        }
        combainOutput () {
            console.log(`your name is ${this.name} & age ${this.age}. you ${this.knowTypeScript ? "Know" : "don't know"} TypeScript`)
        }
    }

    const test1 = new testClass('Mahadi',  27, true)
    const test2 = new testClass('Shirin khan',  26, false)

    console.log( )

    console.log(test1)
    test1.combainOutput()
   
    console.log( )
   
    console.log(test2)
    test2.combainOutput()

    console.log( )
//
}