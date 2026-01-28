let myDate = new  Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// console.log(myDate.getDate())
// console.log(myDate.getTime())

let myCreatedDate = new Date(2006, 8, 8)
// console.log(myCreatedDate.toLocaleDateString())

// console.log(myCreatedDate.getTime())

let userDate =  Date.now()
// console.log(userDate)

let newDate = new Date()
const dayName = newDate.toLocaleString('default', {
    weekday: "narrow",  
})

console.log(dayName.toLocaleString())