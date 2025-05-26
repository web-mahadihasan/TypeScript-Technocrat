
{

//

//* ::: utility types ::: *//


type ContactInfo = {
    name: string;
    phone: number;
    email: string;
    position?: string
}

//* ::: Pick type ::: *//

//* kono type theke amra jodi kono type k nite chai thle pick use korte hbe *//

type PickType = Pick<ContactInfo, "name" | "email">


//* ::: Omit type ::: *//

//* kono type theke amra jodi kono type k bad dite chai thle omit use korte hbe *//

type OmitType = Omit<ContactInfo, "name" | "email">


//* ::: Required type ::: *//

//* kono type vitor sb type ke jodi required korte chai thle amader required use korte hobe *//

type RequiredType = Required<ContactInfo>


//* ::: Partial type ::: *//

//* kono type vitor sb type ke jodi optional korte chai thle amader partial use korte hobe *//

type PartialType = Partial<ContactInfo>


//* ::: Readonly type ::: *//

//* kono type k jodi read only kore rakte chai thle amdr read only use korte hobe. read only sudu read kora jabe, write kora jabe na *//

type ReadonlyType = Readonly<ContactInfo>

const info2 : ReadonlyType = {
    name: "Mr x", 
    phone: 2124152,
    email: "kdgkdj@gmail.com",
    position: "Software Engineer"
}

info2.position = "Jr Developer" // it's not possible because it's readonly types.



//
}
