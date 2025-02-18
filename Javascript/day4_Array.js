let arr = [1,2,2,"aa","b"]

let arr2= new Array(1,2,3,4)

// console.log(arr)

// console.log(typeof arr)

// console.log(arr.length)
// console.log(arr.push(19)) // Add element at end of array and return the new lenght of arrayfor

// console.log(arr[3])


// console.log("Original Array")
// console.log(arr)

// console.log("Array after slice opration (1,5)")
// console.log(arr.slice(1,5))

// console.log("Original Array :")
// console.log(arr)

// console.log("Array After splice operation: ")
// console.log(arr.splice(1,4)) // Return and remove the array element from index 1 to 4 include 4th index

// console.log(arr)



// // Shift And Unshift

// console.log(arr2.unshift(10))
// console.log(arr2)

// console.log(arr.shift(10))
// console.log(arr2)

// Concatination of Two Or More arrays

let new_arr= arr.concat(arr2)
console.log(new_arr)
console.log(typeof new_arr)

// Spread Operator ... spread the all the element from the arrays and the seperate element in new array
// With the spread oprator we can perform the concatination of more than two arrays

new_arr=[...arr,...arr2]
console.log(new_arr);


// Flat  (The flat() method in JavaScript is used to flatten nested arrays into a
//  single-level array. It removes nested structures based on the depth specified.)

let multi_arr=[1,2,[3,[33,7,7]]]
 let multi_arr1=multi_arr.flat(Infinity)
 console.log(multi_arr1)



 // Convertion 

 console.log(Array.isArray("hello"))

 console.log(Array.from("Hello"))


 console.log(Array.from({name:"Babu"}))

 console.log(Object.entries({name:"Babu"}))
  console.log(Object.values({name:"Babu"}))