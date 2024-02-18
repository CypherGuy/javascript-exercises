/* I'm going to use Recursion.

It needs 3 things:

- Base Case
- A "breakout"
- A call to itself
*/
const fibonacci = function(number) {
    number = parseInt(number); //Convert string to number
    if (number < 0) {
        return "OOPS";
    } 
    if (number < 2) { 
        return number; // Base Case
    } else {
        return fibonacci(number - 1) + fibonacci(number - 2); //This is the recursion  and the "breakout" bit.
    }
};

// Do not edit below this line
module.exports = fibonacci;
