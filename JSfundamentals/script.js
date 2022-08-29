//"use strcit"

// this keyword
// console.log(this);

// const obj = {
//     name: "Dorje",
//     age: 21,
//     calcAge: function(){
//         console.log(this);
//     },
// };

// obj.calcAge();

// function add(){
//     console.loog(this);
// }

// add();

// const private = "Hospital One";
// console.log(private);

// const myName = "Dorje";

const obj = {
    name: "Dorje",
    age: 21,
    calcAge: function(){
        console.log(this);
    },
    favNumbers: {
        firstNumber: 0,
        secondNumber: 2,
    }
};

console.log(obj.favNumbers?.firstNumber);

//short curcuiting in java script
//nulliesh coalesing operator ==== ???

// ?? 
// 0, false, null, undefined, NaN, ''

// const totalNumber = false;

// //short circuiting operator
// const totalProduct = totalNumber && 20;

// console.log(totalNumber);

// if(totalProduct)
// {
//     console.log("You have total products");
// }else{
//     console.log("You don't have total number");
// }

// ||or looks for truthy value and executes
// && and looks for falsely value and executes

//console.log(false && 0 && 100 && null) == false
//console.log(false || 0 || 100 || null)) == 100

//strings are truthy value

obj.totalNumber = 0;

const number = obj.totalNumber ?? 100;

console.log(number);