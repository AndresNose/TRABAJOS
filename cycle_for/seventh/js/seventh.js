/*
	Name exercise: seventh
	Description: weight of an object in different planets
	Autor: Diego Andrés Gutiérrez
	Date: march 15th 2025
*/


let number;
let bulk;
let weight;
let gravity;

bulk = parseFloat(prompt("Enter the bulk"));

for(number=1; number<=4; number++){
	if (number == 1) {
		console.log("planet: Earth");
		gravity=9.8;
	} else if (number == 2) {
		console.log("planet: Mars");
		gravity=3.7;
	} else if (number == 3) {
		console.log("planet: Jupiter");
		gravity=24.8;
	} else {
		console.log("planet: Moon");
		gravity=1.6;
	}

	weight=bulk*gravity;

	console.log(weight);
}