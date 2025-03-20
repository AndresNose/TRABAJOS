/*
	Name exercise: third
	Description: pay for a person with discounts
	Author: Diego Andrés Gutiérrez
	Date: 15th march 2025
*/

let daysWorked;
let valueDay;
let salary;
let discounts;
let health;
let pension;
let arl;
let netSalary;

daysWorked=30;
valueDay=40000;
salary=daysWorked*valueDay;

health=salary*0.12;
pension=salary*0.16;
arl=salary*0.052;
discounts=health+pension+arl;

netSalary=salary-discounts;

console.log("Salary: "+salary);
console.log("Health: "+health);
console.log("Pension: "+pension);
console.log("ARL: "+arl);
console.log("Discounts:"+discounts);
console.log("Net salary: "+netSalary);