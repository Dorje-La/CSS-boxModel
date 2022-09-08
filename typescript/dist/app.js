// //let movieTitle = "Name";
// //Type annotation
// let movieTitle: string ="Name";
// movieTitle = "3 Idiots"
// console.log(movieTitle)
// let anything: any = 9;
// anything ="Nepal";
// anything = true;
// let ages : (number | number []| string[])[];
// ages = [1,2,3,4,[1,2],["akdsjf","akjdnf"]];
// const myNumbers = [1,2,3,4];
// myNumbers.push(5);
// console.log(myNumbers);
// function add(a : number,b : number): number{
//     return a+b;
// }
// const result = add(10,20);
// console.log(result);
// function add1(a : string,b : string): string{
//     return a+b;
// }
// const result1 = add1("10","20");
// console.log(result1);
"use strict";
const isAvailable = 20;
let isAvailableLet = 20;
let notDefinded;
let notPresent = null;
notPresent = 30;
console.log(Symbol('unique') === Symbol('unique'));
// let bigNumber = BigInt("5234527465872645872364");
// console.log(bigNumber);
let bigNumber = 20n;
let set = new Set([1, 2, 3, 4]);
console.log(set);
let set1 = new Set(['hello']);
console.log(set1);
// let arr = [1,2,3,4];
// let arr =  new Array<number>(1,2,3,4);
let arr = new Array(1, 2, 3, 4);
let regexp = new RegExp("hello");
const passCheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const myPassword = "Kathmandu1@";
if (myPassword.match(passCheck)) {
    console.log("Strong Password!");
}
else {
    console.log("Weak password");
}
const map = new Map();
class Queue {
    data = [];
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
const firstObj = new Queue();
firstObj.push(30);
firstObj.push("30");
console.log(firstObj);
const obj = {
    firstName: "Alex",
    age: 30,
};
// obj.lastName = "Mohr";
console.log(obj);
const hisObject = {
    firstName: "Laxman",
    age: 25,
};
const myAge = 30;
// const numbers = [1, 2];
// numbers.push(3);
// console.log(numbers)
let numbers = [1, 2];
// numbers = [10, 20];
numbers.push(30);
console.log(numbers);

