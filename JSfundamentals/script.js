"use strict"

// const numberSet = new Set([1,2,3,1,2,3]);

// console.log(numberSet);

// console.log(numberSet.has('3'));

// console.log(numberSet.add(4));

// console.log(numberSet.delete(2));

// console.log(numberSet);

// numberSet.clear();

// console.log(numberSet);

// const mainMenu =  new Set(["pizza", "momo","pasta","pizza","rice"]);

// console.log(mainMenu);

// for(const menuItems of mainMenu){
//     console.log(menuItems);
// }

// console.log([...mainMenu]);

const restaurant = new Map();

restaurant.set("open",10).set("close",22);
console.log(restaurant);

console.log(restaurant.get("close"));

console.log(restaurant.has("open"));