/*
	Name exercise: sixth
	Description: if the force is zero, print a message
	Autor: Diego Andrés Gutiérrez
	Date: march 15th 2025
*/


let number;
let amount;
let force;

amount = parseFloat(prompt("Enter the amount"));

for(number=1; number<=amount; number++){
	force = parseFloat(prompt("Enter the force"));
	if (force == 0) {
		console.log("the object remains at rest");
	} else {
		console.log("the object remains in uniform motion");
	}
}