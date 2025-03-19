/*
	Name exercise: eighth
	Description: calculate the reaction force
	Author: Diego Andrés Gutiérrez
	Date: march 16th 2025
*/

let actionForce;
let reactionForce;
let counter=0;
let totalAddition=0;

actionForce = parseFloat(prompt("enter the action force"));

while (actionForce != 0) {
	totalAddition=totalAddition+actionForce;
	counter=counter+1;
	reactionForce=actionForce*-1;

	console.log("the reaction force is "+reactionForce);

	actionForce = parseFloat(prompt("enter the action force"));
}

console.log("the total addition is "+totalAddition);
console.log("the total of calculations is "+counter);
