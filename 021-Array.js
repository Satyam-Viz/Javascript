let myArray = [1, 2, 3, 4, 5]
// console.log(myArray)
let newArray = Array(11, 22, 33, 44)
// console.log(newArray)

newArray.push(55)
// newArray.pop()
// console.log(newArray)

newArray.unshift(1)
// console.log(newArray);
// newArray.shift()
// console.log(newArray);

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(0, 4)
console.log("C ", myArray);
console.log(myn2);

let Array10 = [12, 45, 56, 98, 1]
Array10.sort()
console.log(Array10)
let Array11 = ["S","a","t","y","a","m"]
console.log(Array11)
Array11.sort()
console.log(Array11)