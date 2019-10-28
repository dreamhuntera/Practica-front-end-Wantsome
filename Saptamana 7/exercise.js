
// //ex 1
// //var 1

// function itterate(val) {
//     //daca valoarea nu e numar returneaza 'nu e numar''
//     // daca valoarea e numar intra in for
//     //itereaza de val ori
//     if (typeof (val) !== "number") {
//         return "nu e numar";
//     };
//     for (i = 0; i < val; i++) {
//         console.log("Sunt la iteratia numarul" + i);
//     }
// };
// itterate(5);

// //var2

// function itterate(val) {
//     if (typeof (val) !== "number") {
//         return "nu e numar";
//     }
//     var i = 0;
//     while (i < val) {
//         console.log("Sunt la iteratia" + i);
//         i++;
//     }
// }
// itterate(5);

// //ex2
//     //var1
// var array1 = ["pen", "crayons", "letters", "words", "books", "poems"];

// function displayArray(array1) {
//     //verifica daca e array
//     if (!Array.isArray(array1)) {
//         return "not array";
//     };
//     //itereaza de lungimea array ori
//     for (i = 0; i< array1.length; i++) {
//         console.log("Elementul de pe pozitia " + i + " este: " + array1[i]);
//     }
// };

// displayArray(array1);

//var2
// var array2 = ["pen", "crayons", "letters", "words", "books", "poems"];

// function displayArray(array2) {
//     //verifica daca e array
//     if (!Array.isArray(array2)) {
//         return "not array";
//     };
//     // while i < 
//     var i = 0;
//     while(i<array2.length) {
//         console.log("Elementul de pe pozitia " + i + " este: " + array2[i]);
//         i++;
//     }
// };

// displayArray(array2);

//ex3

// var littleObj = {
//     name: "broom",
//     manufacturer: "BroomFactory",
//     origin: "China"
// };


// function forObject(obj) {
//     for (var keys in obj){
//     console.log(obj[keys]);
//     }
// }
// forObject(littleObj);

//cum declari obiecte --exemplu

// var person = {
//     name: "Vasile",
//     age: "14",
//     job: "cioban",
// };

// var objKeys = Object.keys(person);
// var objKeysLength = objKeys.length;

// console.log(objKeys);
// console.log(person[objKeys[0]]);

//ex 0 100 200 300 400 500 600 700 800 900 1000

// var array3 = [];

// function increment() {
//     for (i = 0; i <= 10; i++) {
//         array3.push(i * 100);
//     }
//     console.log(array3);
// };

// console.log(increment());

//ex  1 2 4 8 16 32 64 128

// var array4 = [];

// function putere() {
//     for (i = 0; i <= 7; i++) {

//         array4.push(Math.pow(2, i));
//     }
//     console.log(array4);
// };
// console.log(putere());

//ex 3. 0 2 4 6 8 10

// var array5 = [];

// function multiplyFunc() {
//     for (i = 0; i <= 5; i++) {
//         array5.push(i * 2);
//     }
//     console.log(array5);
// };

// console.log(multiplyFunc());

//ex4 --- 3 6 9 12 15

var arr = [];

function threeFunc() {
    for (i = 0; i < 6; i++) {
        arr.push(i * 3);

    }
    arr.shift();
    console.log(arr);
}
console.log(threeFunc());

//ex5 -- 9 8 7 6 5 4 3 2 1 0

var arry = [];

function reverseArr() {
    for (i = 0; i < 10; i++) {
        arry.push(i);
    }
    arry.reverse();
    console.log(arry);
};

console.log(reverseArr());

//ex6 --1 1 1 2 2 2 3 3 3 4 4 4

var arr1 = [];

function repeatFor() {
    for (i = 1, j = 1, k = 1; i < 5, j < 5, k < 5; i++ , j++ , k++) {

        arr1.push(i, j, k);

    }
    console.log(arr1);
};

console.log(repeatFor());

//ex7 ---0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

var arr2 = [];

function multiFor() {
    for(i = 0; i < 5; i++) {
        arr2.push(i);
    } for(j = 0; j < 5; j++) {
        arr2.push(j);
    } for (k = 0; k < 5; k++) {
        arr2.push(k);
    } 
    console.log(arr2);
};

console.log(multiFor());