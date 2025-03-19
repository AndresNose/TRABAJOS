/*
	Name exercise: seventh
	Description: calculate the weight for different planets
	Author: Diego Andrés Gutiérrez
	Date: march 16th 2025
*/

let weight;
let bulk;
let gravity;
let calculations=0;
let totalAddition=0;

bulk = parseFloat(prompt("enter the bulk"));

while (bulk>0) {
	gravity = parseFloat(prompt("enter the planet (1-3)"));
	if (gravity == 1) {
		weight=bulk*9.81;
	} else if (gravity == 2) {
		weight=bulk*3.71;
	} else {
		weight=bulk*24.71;
	}
	
	totalAddition=totalAddition+weight;
	calculations=calculations+1;

	bulk = parseFloat(prompt("enter the bulk"));
}

console.log("the total addition is "+totalAddition);
console.log("the total of calculations is "+calculations);
