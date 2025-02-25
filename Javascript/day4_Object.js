// // Crating Object non-Singleton object
// let key = "mob"
// const emp=
// {
//     name:"Babu",
//     empid:"1006083",
//     email:"babu.shaikh@ltimindtree.com",
//     key:"7887497971",
//     "add":"Pune"

// }


// // Accessing Element of an object

// console.log(emp.name)
// console.log(emp.add)

// /*
// Bracket Notation ([])
// This is useful when the property name is 
// dynamic (unknown at coding time) or contains special characters, spaces, or numbers.
// */
// console.log(emp["name"])
// console.log(emp["key"])

// //  Symbol

// let sym_a= Symbol("AXM30")

// const lebour=
// {
//     name:"Babu",
//     empid:"1006083",
//     email:"babu.shaikh@ltimindtree.com",
//     key:"7887497971",
//     "add":"Pune",
//     [sym_a]:"AXM"


// }
// console.log(typeof sym_a)



// Function as the attribute of object


// lebour.order=function()
// {
//     console.log("Hey man do your work ")
// }

// lebour.order()
// let x=lebour.order
// x()




// Object Concatination

const ob1=
{
    1:"a",
    2:"b"
}

const ob2=
{
    3:"c",
    4:"d"
}

// const obj3=Object.assign({},ob1,ob2)
// console.log(obj3)
const obj5={}
const obj4={...obj5,...ob1,...ob2}
console.log(obj4)