/* fill method, position your new item in the Array takes 3 arguments, 1st: the new value, 2nd: where to start filling, 3rd: where to stop filling  */

let myArray = ["milk", "cheese", "bread", "juice"];

console.log (myArray.fill("steak"));

let myArray2 = ["one", "two", "three", "four", "five"];

/* this is how to position your item in the Array, filling starts at index 1 and ends ends at index3 - try changing it to index4 */
console.log (myArray2.fill("a", 1, 3));