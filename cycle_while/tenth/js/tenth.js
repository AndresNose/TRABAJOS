/*
	Name exercise: tenth
	Description: calculate the mechanical work
	Author: Diego Andrés Gutiérrez
	Date: march 16th 2025
*/

let force;
let distance;
let mechanicalWork;
let counter=0;
let totalAddition=0;

force = parseFloat(prompt("enter the force"));
distance = parseFloat(prompt("enter the distance"));

while (distance > 0) {
	mechanicalWork=force*distance;
	totalAddition=totalAddition+mechanicalWork;
	counter=counter+1;

	console.log("the mechanical work is "+mechanicalWork);

	force = parseFloat(prompt("enter the force"));
	distance = parseFloat(prompt("enter the distance"));
}

console.log("the total addition is "+totalAddition);
console.log("the calculations is "+counter);