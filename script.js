// //   1. Write a calculator. Request 2 numbers and an operation as a symbol (+ - * /). The program solves it depending on the operation and shows the result.

// var num1 = +prompt(' Enter a number');
// var operation = prompt(' Enter an operation (+ - * /)');
// var num2 = +prompt(' Enter another number');
// var result = 0;

// if (operation == "*") {
// } else if (operation == "+") {
//     result = num1 + num2;
// } else if (operation == "-") {
//     result = num1 - num2;
// } else if (operation == "/") {
//     result = num1 / num2;
// } else {
//     alert("unknown operation");
// }
// document.write(result);


// // 2. Count the factorial of the number given by a user. For example, 4! is 1 * 2 * 3 * 4 = 24, or 6! is 1 * 2 * 3 * 4 * 5 * 6 = 720.

// var num = +prompt('Enter a number');
// var factorial = 1;
// for (var i = num; i >= 1; i--) {
//     factorial = factorial * i;
// }
// document.write(factorial);

// // 3. Count sheep. Request a non-negative integer, 3 for example, and print a string with a murmur: "1 sheep...2 sheep...3 sheep..." to the page as a paragraph. If a user types a negative number in, alert an error.

// var num_sheep = +prompt('Enter a non-negative integer');
// if (num_sheep < 0) {
//     alert('error');
// }
// var result = "";
// for (var i = 1; i <= num_sheep; i++) {
//     result = result + i + ' sheep..';
// }
// document.write('<p>' + result + '</p>');

// // 4. Show a user the prompt where they have to write a correct answer for 2 + 2 * 2. Show the prompt as many times until the user answers correctly.

// var solution = 2 + 2 * 2;
// var answer = +prompt('Write the correct answer for 2 + 2 * 2');
// while (answer != solution) {
//     alert('Try again');
//     answer = +prompt('Write the correct answer for 2 + 2 * 2');
// }
// if (answer == solution) {
//     alert('Correct');
// }



