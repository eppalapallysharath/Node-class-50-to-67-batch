// const addition = (a, b)=>{
//     return a + b 
// }

// // module.exports = addition 


// const subtraction = (a, b) =>{
//     return a -b
// } 
// // module.exports = subtraction

// const division = (a,b) => {
//     return a / b
// }
// // module.exports = division

// const multiply = (a, b) =>{
//     return a * b
// }

// module.exports = multiply

// module.exports = {addition, subtraction, division}



// using shortcut exports keyword
exports.addition = (a, b)=>{
    return a + b 
}

exports.subtraction = (a, b) =>{
    return a -b
} 

exports.division = (a,b) => {
    return a / b
}

// exports.multiply = (a, b) =>{
//     return a * b
// }

// exports.multiply = function(a,b){
//     return a * b
// }

exports.multiply = (a,b) =>{
    return a * b
}