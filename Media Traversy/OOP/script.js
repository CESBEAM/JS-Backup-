// const myFunc = function(){
//     const num1 = 5;
//     const num2 = 6;
//     return num1 + num2;
// }

// console.log(myFunc())


// const myFunc = () => 5+5;


// console.log(myFunc())


// Regex Test method
// let myStr = "The Dog";
// let myRegex = /Dog/;
// let testReg = myRegex.test(myStr)

// console.log(testReg);

// Regex Find More Than the First Match
// let myStr = "Extract the word 'its yours' then lets see";
// let reg = myStr.match(/its yours/);

// console.log(reg);

//Regex using Global and i 
// let myStr = "Search, search and destroy,Search for food, food for search. Searching and Search";
// let regEx = /Search/g;
// let result = myStr.match(regEx);

// console.log("RegEx: "+result)

// Regex match anything with wildcard period
// let myStr = "Let's have fun with regular expressions!";
// let reg = /un./;
// let matchStr = myStr.match(reg);
// console.log('RegEx: '+matchStr)


// RegEx find the vowels a,e,i,o,u
// let quoteSample = "1 Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiuo]/gi; 
// let result = quoteSample.match(vowelRegex);


// console.log(result)


//Match numbers and letters Alphabet
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let reg = /[a-z0.-9az.]/gi;

// let result = quoteSample.match(reg);

// console.log(result);



//Add Items to an Array with push() and unshift()
// let twentyThree = 'XXIII';
// let romanNumerals = ['XXI', 'XXII'];


// romanNumerals.unshift('XIII','XIX', 'XX');
// romanNumerals.push(twentyThree);
// console.log(romanNumerals);

function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));