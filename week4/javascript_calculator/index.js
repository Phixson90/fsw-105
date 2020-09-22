const readline = require("readline-sync")


var num1 = readline.questionInt("Please enter your first number.");
var num2 = readline.questionInt("Please enter your second number."); console.log(typeof num1)
var operation = readline.question("Please enter your operation.")


if (operation === "+") {
    var result = num1 + num2;
    console.log("The sum is " + result)
}
  else if (operation === "-") {
        var result = num1 - num2;
        console.log("The difference is " + result)
}
    else if (operation === "*") {
         var result = num1 * num2;
         console.log("The product is " + result)
}   
    else if (operation === "/") {
         var result = num1 / num2;
         console.log("The quotient is " + result)
}