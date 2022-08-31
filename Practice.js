"use strict"

const development ={
    frontend:"JavaScript",
    backend:"Java",
};

//----- copying object to new variable------//
const newDevelopment = development;
console.log(newDevelopment);

const arr =[11,12,13,14,15,16,17,18,19,20];
console.log(arr);

console.dir(document.querySelector(".root").textContent="modified");
// document.bgColor="blue";

const heading = document.querySelector("h1");
console.dir(heading.style.color= "red");

//---------------------------------------/////
// # Call back function - Important for interview question
function display(a){
    a(10);
}

display(function displayNumber(number){
    console.log(number);
});
//----------------------/// For each is a call back function
const arr1 =[11,12,13,14,15,16,17,18,19,20];

arr1.forEach(function(){        
    console.log("Running !!!!");
})

const info ={
    name : "Dorje",
    age : 25,
    number: [1,2,3,4,5],
    calcAge: function(){
        console.log("calcAge function");
        return "your age";
    },
    freehours:{
        hourOne: "six-seven",
        hourTwo: 2100,
        allhour: [1800, 1900, 2100]
    },
};

//------Accessing the specific element----//
console.log(info.calcAge());

const firsthour = info.freehours.hourOne;
console.log(firsthour);

//-------Destruction------//
const array = [1,2,3]
const[,,thirdelement] = array;
console.log(thirdelement);

//-----object Destruction ------//
const {name, age, number, freehours:{allhour:[,,num]}} = info;
console.log(num);


//function definition
function add(){

}
//function expression
const Add = function(){

}
//Arrow function
const ADd =() =>{

}

//----- Reading array using destruction method -----///
const Array = [1,2,3,4,[5,6]];
const [,,,,[,b]]= Array;
console.log(b);

// ----- using concat to add the arrays -------//
const arrOne =[1,2,3,4];
const arrTwo =[5,6,7,8];

// It can be done in both ways
const arrThree = arrOne.concat(arrTwo);
console.log(arrThree);
//------ By using rest of the array using three dots [...something]-----//
console.log(...arrOne,...arrTwo);

const [...some] = arrOne;
console.log[some];


//foreach method and map array
//The forEach() method does not create a new array based on the given array. 
//The map() method creates an entirely new array. The forEach() method returns “undefined“. 
//The map() method returns the newly created array according to the provided callback function.
 const arr2 =[1,2,3,4];

 const show = arr2.forEach((el) => {
    console.log(el);
    // return "Hello";
 });

 // foreach only returns whatever is in array 
 // map returns number along with whole new array of return type

 console.log(show);

 const show1 = arr2.map((el) => 20);
 console.log(show1);

const arr3 = [1,2,3,4];

//Blank array
const newArr = [];
console.log(newArr);

// interacting with external array and pushing elements in it
const result = arr3.forEach((el) => {
    newArr.push(el);
});

//displaying the pushed elements.
console.log(newArr);

////---- Thurday-----///
const arr4 = [10,20,30,40];

//used for push, console, not for return
const resultforeach = arr4.forEach((el,i,array) => {
    // console.log(i);
    // console.log(el);
    // console.log(array);
    return el*2;
});
console.log(resultforeach);

//using map
const resultformap = arr4.map((el,i,array) => {
    // console.log(i);
    // console.log(el);
    // console.log(array);
    return el*2;
});
console.log(resultformap);

//using filter
//The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements. 
//The filter() method does not change the original array.
const filterOutput = arr4.filter((el,i, array) => {
    // console.log(i);
    // console.log(el);
    // console.log(array);
    return el>20;
})

console.log(filterOutput);

//used for truthy and falsy value
// acc is accumulator
//The reduce() method executes a user-supplied "reducer" callback function on each element of the array, 
//in order, passing in the return value from the calculation on the preceding element. 
//The final result of running the reducer across all elements of the array is a single value.
const reduceoutput = arr4.reduce((acc,currentvalue) => {
    console.log(acc);
    console.log(currentvalue);
    return acc + currentvalue;
},0); // 0 is initial value of accumulator

console.log(reduceoutput);

// Window - global object
console.log(this);

//calcAge is created inside obj which is created by window object. So it runs
const obj = {
    name: "Dorje",
    age: 21,
    calcAge: function(){
        console.log(this);
    },
};

obj.calcAge();

//using use strict will console it undefined because it is not created
//by window. We created it ourselves
//without using strict , it will console window
function add(){             
    console.log(this);
}

add();

//using use strict will console it window because it is true anyway
if(true){
    console.log(this);
}



//Constructor Function
//A class constructor is a special member function of a class that is executed whenever we create new objects of that class
const Person1 = function(firstnName){
    this.first = firstnName;
    // this.calcAge = function(birthYear){
    //     return birthYear - 2022;
    // }
};

const alexObj = new  Person1("Alex");
console.log(alexObj);

console.log(Person1.prototype);

Person1.prototype.calcAge = function(birthYear){
    return 2022 - birthYear;
};

console.log(alexObj.calcAge(1990));

// can use the prototype of function
const newObj = new  Person1("Prashant");
console.log(newObj);

// can be used to see all the prototype of tge function
console.dir(document);

//ES6 Classes

class Person2 {
    constructor(firstName,birthYear){
        this.first = firstName;
        this.birthDate = birthYear;
    }
    calcAge(){
        return 2022 - this.birthDate;
    }
    add(a,b){
        return a + b;
    }
}

// using function prototype
const objAlex = new Person2("Alex",1990);

console.log(objAlex.add(10,20));

//transforming to upper case
const myCountry = "Nepal";
console.log(myCountry.toUpperCase());

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