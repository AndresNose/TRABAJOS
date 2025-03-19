/*
	Name exercise: sixth
	Description: calculate the force
	Author: Diego Andrés Gutiérrez
	Date: march 16th 2025
*/

let bulk;
let acceleration;
let force;
let calculations=0;
let totalAddition=0;

bulk = parseFloat(prompt("enter the bulk"));
acceleration = parseFloat(prompt("enter the acceleration"));

while (bulk>0 && acceleration>0) {
	force=bulk*acceleration;
	totalAddition=totalAddition+force;
	calculations=calculations+1;
	bulk = parseFloat(prompt("enter the bulk"));
	acceleration = parseFloat(prompt("enter the acceleration"));
}

console.log("the total addition is "+totalAddition);
console.log("the total of calculations is "+calculations);
