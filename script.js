let js = "amazing";
let numbers = 1;
console.log(typeof numbers);



let name = "Chris";
let age = 27;
let job = "Student";
let nation = "Korea";

/*using string template literals*/
/*backtag `` and dollor sign $ should be used  */
console.log(`My name is ${name}.\n 
I'm ${age} years old.\n
I'm a ${job}. \n
I'm from ${nation}.`)


/*type conversion and type coercion*/
const inputYear = '1991';
console.log(typeof inputYear); // string
console.log(inputYear + 18);   // 1999118

// type conversion
console.log(typeof Number(inputYear)); // number
console.log(inputYear + 18);           // 1999118
console.log(Number(inputYear) + 18);   // 2009


// type coercion
console.log('10' - '4' - '3' - 2 + '5'); // 15
//          int  - int - int - int(string) + (string) = 15


/* five falsy values: 0, '', undefined, null, NaN */
console.log(Boolean(0));          // false
console.log(Boolean(''));         // false
console.log(Boolean(undefined));  // false
console.log(Boolean(null));       // false
console.log(Boolean(NaN));        // false
console.log(Boolean({}));         // ture
console.log(Boolean('Chris'));    // ture


/* strict & loose equality operator */
console.log('18' == 18);  // ture
console.log('18' === 18); // false
