"use strict";
// Learning function
// Normal Function
// Arrow Function
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(2, 2);
const addArrow = (num1, num2) => num1 + num2;
console.log(addArrow(5, 10));
