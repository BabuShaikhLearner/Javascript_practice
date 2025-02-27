// Destructuring is the syntax that allows to unpack values form the Object or the Array
// [] --> is used for Array Destructuring 
// {} --> is Used for Object Destructuring


const person1=
{
    name:"Babu",
    lastname:"Shaikh",
    agr:22,
    location:"Pune"
}


// Extract variables from Object.

const{name,lastname:surname,location}=person1
console.log(`My Name is ${name} ${surname}`)
console.log(location)

// swap variable

// let val1=10
// let val2=20
// [val1, val2]=[val1, val2]


// console.log("Check...")


const colors=["red","black","blue","White"]

const[fc,sc,tc]=colors
// console.log(fc)
// console.log(sc)
// console.log(tc)

const[last]=colors[1]
console.log(last)
