// // for loop
// // for of 
// // for in 
// // while

// // for each
// // Map
// // Filter 
// // reduce 

// // for(let i=0; i<5; i++){
// //     console.log(arr[i]);
// // }

// // for(number of arr){
// //     console.log(number);
// // }
 
// // function display(a){
// //     // console.log(a);
// //     a(10);
// // }

// // display(function (number){
// //     console.log(number);
// // });

// //const arr = [11,12,13,14,15,16,17,18,19,20];

// //console.log(arr);

// //arr.forEach((number)=>{console.log(number)});

// const obj = {
//     name : "Dorje",
//     age : 30,
//     favNumber:[1,2,3,4],
//     calcAge : function(){
//         console.log("Runing");
//         return "Your age";
//     },
//     freeHours: {
//         hourOne : "six-seven",
//         hourTwo: 2100,
//         allHours:[1800,1900,2100],
//     },
// };

// // const firstHour = obj.freeHours.hourOne;
// // console.log(firstHour);

// const AvailableHours=obj.freeHours.allHours[0];
// console.log(AvailableHours);

// //Spread operator [,,,,something],
// const {age :myage,favNumber, freeHours:{hourOne,allHours:[firstHour],}} = obj;
// console.log(myage);
// console.log(favNumber);
// console.log(firstHour);

// const arr = [1,2,3,40,[1,2]];

// // const[a,b,c,d,e] = arr;

// // console.log(a,b,c,d,e);

// // console.log(...arr); Rest operator

// const arrOne =[1,2,3,4];
// const arrTwo =[5,6,7,8];

// const arrThree = arrOne.concat(arrTwo);

// console.log(arrThree);

// console.log([...arrOne, ...arrTwo]); // Rest parameter = rest of the other elements

// const[first,...two]= arrOne; // Rest parameter- rest of the array elements
// console.log(two);

// function displayArray(...a){
//     console.log(...a);
// }

// displayArray(1,2,3,[1, 2], "hello");

//Map method
const arr = [10,20,30,40];

let newArr = [];
console.log(newArr);

// const resultforeach = arr.forEach(element => {
    
// });((el,i,array)=>{
//     newArr.push(el);
//     // console.log(i);
//     // console.log(el);
//     // console.log(array);
//     return el *2;
// });

// console.log(resultforeach);

const resultmap = arr.map((el,i,array)=>{
    // newArr.push(el);
    // console.log(i);
    // console.log(el);
    // console.log(array);
    return el *2;
});

 console.log(resultmap);

// console.log(newArr);

const add = () => {}

//filter
//reduce  

//Filter method
const filterOutput = arr.filter((el,i,array) => {
    // console.log(i);
    // console.log(el);
    // console.log(array);
    return el > 20;
})

console.log(filterOutput);

//Filter method
const reduceOutput = arr.reduce((acc,currentValue) => {
    console.log(acc);
    console.log(currentValue);
    return acc + currentValue;
},0);

console.log(reduceOutput);