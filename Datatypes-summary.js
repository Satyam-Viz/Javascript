const accoutId = 1234
let accountName = "Satyam Vishwakarma"
let accountBalance = 22222.222222222222222
console.log(typeof accoutId);
console.log(typeof accountName);
console.log(typeof accountBalance);

//Confusion Of Null Comparison
console.log(null > 0)
console.log(null < 0)
console.log(null == 0)
console.log(null <= 0)
console.log(null >= 0)

//Considerd amount of undefined is nothing so it is always blank until nothing in it
console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)
console.log(undefined <= 0)
console.log(undefined >= 0)

//Heap and Stack Memory
let myaccountId = "1234"
let otheraccountId = myaccountId
otheraccountId = "4321"

console.log(myaccountId)
console.log(otheraccountId)//this is example of Stack memory

let myobj = {
    name: "Satish",
    class: "10",
}

let otherobj = myobj
otherobj = myobj
otherobj.class = "11"

console.log(myobj)
console.log(otherobj)