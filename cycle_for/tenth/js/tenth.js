/*
	Name exercise: tenth
	Description: simulation of an object in an inclined plane
	Autor: Diego Andrés Gutiérrez
	Date: march 15th 2025
*/


let number;
let bulk;
let gravity=9.8;
let radians;
let parallelForce;
let startAngle;
let endAngle;
let step;

bulk = parseFloat(prompt("Enter the bulk"));
startAngle = parseFloat(prompt("Enter the start angle"));
endAngle = parseFloat(prompt("Enter the end angle"));
step = parseFloat(prompt("Enter the step"));

for(number=startAngle; number<=endAngle; number=number+step){
	radians=number*3.1416/180;
	parallelForce=bulk*gravity*radians;

	console.log("For on angle of "+number+" the parallel force is: "+parallelForce+"N");
}