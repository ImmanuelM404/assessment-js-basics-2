///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/


//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

//CODE HERE
let greetUser = (username) => {
    // username = []  // output is blank 
    return `Welcome back, ${username}`
}
console.log(greetUser('Andrew'))




//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]
// let canWeDeliver = (zipCode) => {
//     for(let i = 0; i <= deliveryAreaZipCodes.length; i++){
//     if (zipCode === deliveryAreaZipCodes[i]) {
//         return 'You are eligible for delivery'
//     } else {
//         return 'Working on exapnding our deliveries, let us notify you once delivery is available'  // them email prompt 
//     }
// }
// }
// let deliveryOption = canWeDeliver(85206)
// console.log(deliveryOption)

// let canWeDeliver = (zipCode) => {        //// Come back to , i isn't iterating to check next index 
//     for(let i = i; i <= deliveryAreaZipCodes.length; i++){
//         for(let x = i + 1; x <= deliveryAreaZipCodes.length; x++){
//             if (zipCode[i] === deliveryAreaZipCodes[i]) {
//                 return 'You are eligible for delivery'
//             } else {
//                 return 'Working on exapnding our deliveries, let us notify you once delivery is available'  // them email prompt 
//             } 
//         } 
//     } 
// } 
// let dropOff = canWeDeliver(85203)    // 85205, 85204, 85203, 85213, 85206
// console.log(dropOff)
//CODE HERE




/* 
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method. 
    Look it up on MDN if you're not sure how to use 
    it. 

    If you already used the `includes` method, 
    write a new function using some sort of 
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

// CODE HERE
function canWeDeliverTwo(zipCode) {                          // [85205, 85204, 85203, 85213, 85206]
    zipCode = Number(zipCode)
    if (zipCode.includes(85205)){ //|| deliveryAreaZipCodes.includes(85204) || deliveryAreaZipCodes.includes(85203)|| deliveryAreaZipCodes.includes(85213) || deliveryAreaZipCodes.includes(85206) ){
        return 'You are eligible for delivery'
    } else {
        return'Working on exapnding our deliveries, let us notify you once delivery is available'
    }

} 

let dropOff = canWeDeliverTwo(85205)    // 85205, 85204, 85203, 85213, 85206
console.log(dropOff)



//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: '   This deal lasts until the end of March! '
    }
]

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.
*/

//CODE HERE
let dealsTitle = '15% Off!'
let newSale = console.log(dealsTitle.replace('15%', '10%'))
//console.log(newSale)






/*
    The restaurant is going to continue its
    family deal for another month. 

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.

    You should also make sure that there is no
    whitespace in this string, since it seems
    to be displaying wrong on the live site.
*/

//CODE HERE
let dealDesc = 'This deal lasts until the end of March!'
let extendedDeal = console.log(dealDesc.replace('March', 'April'))