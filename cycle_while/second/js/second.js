/*
	Name exercise: second
	Description: print factorial of 5
	Autor: Diego Andrés Gutiérrez
	Date: march 15th 2025
*/

let number=5;
let counter=0;
let factorial=1;

while (counter < number) {
	counter=counter+1;
	factorial=factorial*counter;
}

console.log(factorial);