
// TypeScript Tuples

// Typed Arrays

// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array:


//  define our tuple

// let ourTuple1: [number, boolean, string];

// // initialize correctly

// ourTuple1 = [5, false, "Danish"];

// console.log(ourTuple1);    //  [ 5, false, 'Danish' ]








// let ourTuple2: [number, boolean, string];

// // initialized incorrectly which throws an error

//  ourTuple2 = [false, "Muhammad Danish", 5];

// console.log(ourTuple2);   // Error



// Readonly Tuple
// A good practice is to make your tuple readonly.

// Tuples only have strongly defined types for the initial values:






// // // define our tuple

// let ourTuple: [number, boolean, string];

// // initialize correctly

// ourTuple = [5, false, "Muhammad Danish"];

// // We have no type safety in our tuple for indexes 3+

// ourTuple.push("Habib Ur Rehman");

// console.log(ourTuple);




// define our readonly tuple

// let ourReadonlyTuple: readonly [number, boolean, string] = [5, true, "Muhammad Danish"];

// // throws error as it is readonly.

// ourReadonlyTuple.push("Habib Ur Rehman");  //error







///////////////////////////////////////////////////////////////////////////////////









// Named Tuples

// Named tuples allow us to provide context for our values at each index.

// Example


// let ourTuple: readonly [Emp_id:number, Emp_name:string] = [5, "Muhammad Danish"];

// console.log(ourTuple[0]);   // 5

// console.log(ourTuple[1]);  // Muhammad Danish




////////////////////////////////////////////////////////////////////////////












// Destructuring Tuples

// Since tuples are arrays we can also Destructure them.


// let ourTuple: readonly [number,string] = [5, "Muhammad Danish"];

// let [a,b] = ourTuple;
 
// console.log(a);  // 5
// console.log(b);  // Muhammad Danish












///////////////////////////////////////////////////////////////////////////////////////////












// Array Method with Tuple

// The tuple is like an array. So we can use array method on tuple such as 
// Pop(), concat() etc


let ourTuple: [number,string] = [5, "Muhammad Danish"];

ourTuple[1] = ourTuple[1].concat(" Chauhan");

//console.log(ourTuple[1]);  //   Muhammad Danish Chauhan
console.log(ourTuple.pop());

// Simple  Tuple

let a = ["Danish",29,true];
console.log(a[1]);                  //  29


let a1 = ["Danish",29,true];
a1.push("Ali");
console.log(a1[3]);                  //  Ali
