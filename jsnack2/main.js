/*************
Snack 2
A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
*************/

//first array
const numberList = [4, 9, 12, 34, 2, 3, 5, 11, 13];
console.log(numberList);
//square array
const squareNumbers = numberList.map(number => number * number);
console.log(squareNumbers);