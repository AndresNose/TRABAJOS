/*
	Name exercise: fourth
   	Description: print the table from 9 to 5 and print which results are even and odd.
    	Author: Johan Smith Santamaria
    	Date: march 16th 2025
*/

let counter=0;
let result=0;
let number=5;

while (counter < number) {
	counter=counter+1;
	result=counter*9;
	console.log("9 x "+counter+" = "+result);
	if (result%2 == 1) {
		console.log("this number is odd");
	} else {
		console.log("this number is even");
	}
}