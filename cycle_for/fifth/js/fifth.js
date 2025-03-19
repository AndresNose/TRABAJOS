/*
	Name exercise: fifth
	Description: calculate the force
	Autor: Diego Andrés Gutiérrez
	Date: march 15th 2025
*/


let number;
let amount;
let bulk;
let acceleration;
let force;

amount = parseFloat(prompt("Enter the amount"));

for(number=1; number<=amount; number++){
	bulk = parseFloat(prompt("Enter the bulk"));
	acceleration = parseFloat(prompt("Enter the acceleration"));
	force=bulk*acceleration;

	console.log(force);
}