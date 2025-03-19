/*
	Name exercise: fourth
	Description: print the multiplication table from 9 to 5
	Autor: Diego Andrés Gutiérrez
	Date: march 15th 2025
*/


let number;
let result;

for(number=1; number<=5; number++){
	result=number*9;
	console.log("9 x "+number+" = "+result);
	if (result%2 == 1) {
		console.log("odd");
	} else {
		console.log("even");
	}
}