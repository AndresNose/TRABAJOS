/*
	Name exercise: ninth
	Description: calculate the tension in a string
	Autor: Diego Andrés Gutiérrez
	Date: march 15th 2025
*/


let number;
let bulk;
let gravity=9.8;
let tension;
let amount;

amount = parseFloat(prompt("Enter the amount"));

for(number=1; number<=calculations; number++){
	bulk = parseFloat(prompt("Enter the bulk of the object "+number));
	tension=bulk*gravity;

	console.log("The tension in the string for the object "+number+" is: "+tension+"N");
}