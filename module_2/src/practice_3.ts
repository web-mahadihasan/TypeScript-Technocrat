
{
//

//* ::: Generic type with Funtion ::: *//


const createGenericFunction = <T>(param: T): T[] => {
    return [param]
}

//* We can reuse alias or interface type *//
type User = {
    id: number;
    name: string
}

const genericWithfun = createGenericFunction(<User>{id: 1541, name: 'Mahadi'})


//
}