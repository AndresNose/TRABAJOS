/*
	name exercise: fourth
	description: calculation of final grades
	author: Diego Andrés Gutiérrez
	date: 15th march 2025
*/

let gradeOne=3.0;
let gradeTwo=4.5;
let gradeThree=2.5;
let gradeFinal;

gradeFinal=(gradeOne*0.20)+(gradeTwo*0.35)+(gradeThree*0.45);

if (gradeFinal>4.5) {
	console.log("Top grade");
} else if (gradeFinal>3.5) {
	console.log("Good grade");
} else if (gradeFinal>3.0) {
	console.log("Medium grade");
} else {
	console.log("Bad grade");
}