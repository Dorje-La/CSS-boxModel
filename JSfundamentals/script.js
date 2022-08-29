
// //Constructor Function
// const Person = function(firstnName){
//     this.first = firstnName;
//     // this.calcAge = function(birthYear){
//     //     return birthYear - 2022;
//     // }
// };

// const alexObj = new  Person("Alex");
// console.log(alexObj);

// console.log(Person.prototype);

// Person.prototype.calcAge = function(birthYear){
//     return 2022 - birthYear;
// };

// console.log(alexObj.calcAge(1990));

// const newObj = new  Person("Prashant");
// console.log(newObj);

// const newObject = {
//     a : 1,
// };

// console.log(newObject);

// console.dir(document);

// console.log(new Set());
// console.log(new Map());

// ES6 Classes

// class Person {
//     constructor(firstName,birthYear){
//         this.first = firstName;
//         this.birthDate = birthYear;
//     }
//     calcAge(){
//         return 2022 - this.birthDate;
//     }
//     add(a,b){
//         return a + b;
//     }
// }

// const objAlex = new Person("Alex",1990);

// console.log(objAlex.add(10,20));

// const myCountry = "Nepal";
// console.log(myCountry.toUpperCase());

"use strict"

console.log("Runing 1");

 async function add(){
    await fetch("http://localhost:550");
    console.log("Runing 2");
}

console.log("Runing 3");

add();

console.log("Runing 4");

for( let i = 0; i< 10; i++){
    console.log(i);
}