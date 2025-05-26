"use strict";
// Number type data 
const a = 10;
console.log(a);
// String type data 
const b = "hello world";
//  typescript e data type declear korle seta k bola hy explicit data type.
// typescript e data type declear na krole seta k bola hoy inplicit data tpe. j ta typescript nije assume kore ney
// Boolean type data 
let c = true;
// Undefined data type
const d = undefined;
// Null type data type 
const e = null;
// This is any type. because amra type use kori naai, any type use kora ucit na 
const f = "any";
// Array 
// String type array 
const g = ['test 1', 'test 2'];
// Number type array 
const h = [1, 2, 5];
// Tuple type array. ata bises type array, akne data akta, ba akadhik type thake pare, tobe akne order maintain kora hoy. 
// jodi age string thake thle first value sting e dite hobe. jodi second value number thake thle akne second value number e dite hobe.
// Tuple type array 
const tuple = ["Karim", 30, false];
// Ojbect type data 
// Data tye likhar somay (;) use korte hobe, avabe kono object declear korle seta type gula required hoye jabe,
// kono data missing thakle setar jonno error dibe
const userData = {
    firstName: "Mahadi",
    middleName: "Hasan",
    lastName: "Milu"
};
// Opotional Object data use korle (?) chaining use korte hobe
const optionalUser = {
    firstName: "Mahadi",
    lastName: "Milu"
};
// literal type 
// jokon kono value type hisabe set hoye jabe tokon seta literal type hoye jabe. and ata fixed. ata ai value e hobe. onno kono value use kora jabe na
const literalType = {
    company: "DevsNest",
    firstName: "Mahadi",
    lastName: "Hasan"
};
// Ata use kora jabae na  *
const literalType2 = {
    company: "DevsNest llc",
    firstName: "Mahadi",
    lastName: "Hasan"
};
// Onno kisu diye literal type ke change korte parbo na 
literalType.company = "DevsNest Opc";
// Onno type data change korte parbo like string, number, boolean, undefined, null etc 
literalType.firstName = "Mahadi Milu";
// Read only data , read only data fixed kore rakte pari. j ta changeable na
const readOnly = {
    position: "Jr Software Engineer",
    name: "Mahadi Hasan"
};
