let a = "Hello world"
let b = " I am here !"

//console.log(String.prototype(a.charAt(2)))

console.log(a.charAt(2))

console.log(a.concat(b))

console.log(b.indexOf("r"))

 let x=a.replace("H","G")

console.log(x)

console.log(a.toUpperCase())

console.log(a.slice(0,5))

console.log(a.split(" "))


let s1="Babu"
let s2=new String("Babu")

console.log(s1===s2)

/*
When you compare s1 === s2, you're comparing a primitive string (s1) with a String object (s2). Even though both contain the same string value ("Babu"),
 they are of different types: s1 is a primitive string, and s2 is an object.
*/