/*
	Name exercise: eighth
	Description: calculate the friction force
	Autor: Diego Andrés Gutiérrez
	Date: march 15th 2025
*/


let number;
let bulk;
let frictionCoefficient;
let gravity=9.8;
let normalForce;
let frictionForce;
let calculations;

frictionCoefficient = parseFloat(prompt("Enter the friction coefficient"));
calculations = parseFloat(prompt("Enter the number of calculations"));

for(number=1; number<=calculations; number++){
	bulk = parseFloat(prompt("Enter the bulk"));
	normalForce=bulk*gravity;
	frictionForce=frictionCoefficient*normalForce;

	console.log("The friction force of the object "+number+" is: "+frictionForce);
}