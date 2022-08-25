// for loop
// for of 
// for in 
// while

// for each
// Map
// Filter 
// reduce 

// for(let i=0; i<5; i++){
//     console.log(arr[i]);
// }

// for(number of arr){
//     console.log(number);
// }

// function display(a){
//     // console.log(a);
//     a(10);
// }

// display(function (number){
//     console.log(number);
// });

//const arr = [11,12,13,14,15,16,17,18,19,20];

//console.log(arr);

//arr.forEach((number)=>{console.log(number)});

const obj = {
    name : "Dorje",
    age : 30,
    favNumber:[1,2,3,4],
    calcAge : function(){
        console.log("Runing");
        return "Your age";
    },
    freeHours: {
        hourOne : "six-seven",
        hourTwo: 2100,
        allHours:[1800,1900,2100],
    },
};

const firstHour = obj.freeHours.hourOne;
console.log(firstHour);

const AvailableHours=obj.freeHours.allHours[0];
console.log(AvailableHours);

const arr = [1,2,[20,30],4];

// const thirdElemet = arr[2];
// console.log(thirdElemet);

const [,,[,a]]= arr; //Destruction method
console.log(addEventListener);