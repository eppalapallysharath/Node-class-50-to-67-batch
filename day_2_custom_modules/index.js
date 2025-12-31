// const add = require("./math.js")
// const sub = require("./math.js")
// console.log( require("./math.js"))

// console.log(add(5,6), "addition")
// console.log(sub(2,2), "subtraction")
// const names = ["sharath", "tom", "jerry"]
// names.forEach(v=>console.log("hi ", v))



// importing multiple modules from files
console.log(require("./math.js"))
console.log(require("./days.js"))
// const math = require("./math.js")
// console.log(math.addition(5,5))
// console.log(math.division(2,6))
// console.log(math.subtraction(54,54))
const {currentDate, currentDay, currentYear} = require("./days.js")
const {addition, subtraction, division, multiply} = require("./math.js")
const a = addition(7,8)
const sub = subtraction(a,5)
const sum = division(sub,7)
console.log(sum)

console.log(multiply(2,5))

console.log("current date",currentDate)
console.log("current day",currentDay)
console.log("current year",currentYear)