let langauge = 'Python';
let oldlanguage = langauge;
langauge = 'JavaScript';

console.log(langauge);
console.log(oldlanguage);

const development = {
    frontend: "JavaScript",
    backend: "Java",
};

console.log(development);

const newDevelopment = development;
console.log(newDevelopment);

newDevelopment.backend ="Node.js";
console.log(newDevelopment);
console.log(development);

// document.querySelector(".root").textContent ="New Hello";
// document.querySelector("div.root").textContent="modified";
// console.dir(document);
// document.bgColor = "red";

const heading = document.querySelector("h1");
// console.dir(heading);
heading.style.color ="red";


