/*
	Name exercise: eleventh
	Description: calculate the gravitational potential energy
	Author: Diego Andrés Gutiérrez
	Date: march 16th 2025
*/

let gravitationalPotentialEnergy;
let bulk;
let height;
let gravity=9.81;
let totalAddition;
let counter;

bulk = parseFloat(prompt("enter the bulk"));
height = parseFloat(prompt("enter the height"));

while (distance > 0) {
	gravitationalPotentialEnergy=bulk*gravity*height;
	totalAddition=totalAddition+gravitationalPotentialEnergy;
	counter=counter+1;

	console.log("the gravitational potential energy is "+gravitationalPotentialEnergy);

	bulk = parseFloat(prompt("enter the bulk"));
	height = parseFloat(prompt("enter the height"));
}

console.log("the total addition is "+totalAddition);
console.log("the calculations is "+counter);