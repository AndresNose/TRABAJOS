/*
    Name exercise: fifth
    Description: print the tables from 1 to 5 and show which are even and odd and how many results are even and odd.
    Author: Diego Andrés Gutiérrez
    Date: March 16th 2025
*/

let counterOne=0;
let counterTwo=0;
let result;
let buzz=0;
let bass=0;

while (counterOne < 5) {
	counterOne=counterOne+1;
	counterTwo=0;
	while (counterTwo < 5) {
		counterTwo=counterTwo+1;
		result=counterOne*counterTwo;
		console.log(counterOne+" x "+counterTwo+" = "+result);
		if (result%2==1) {
			bass=bass+1;
			console.log("bass");
		} else {
			buzz=buzz+1;
			console.log("buzz");
		}
	}
}

console.log("there is "+buzz+" numbers even");
console.log("there is "+bass+" numbers odd");