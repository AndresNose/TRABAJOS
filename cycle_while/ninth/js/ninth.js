/*
	Name exercise: ninth
	Description: calculate the acceleration
	Author: Diego Andrés Gutiérrez
	Date: march 16th 2025
*/

let force;
let bulk;
let time=1;
let distance;
let velocity=0;
let acceleration;

force = parseFloat(prompt("enter the force"));
bulk = parseFloat(prompt("enter the bulk"));

while (force != 0 && bulk > 0) {
	acceleration=force*bulk;
	velocity=acceleration+velocity*time
	distance=velocity*time

	console.log(acceleration);
	console.log(velocity);
	console.log(time);
	console.log(distance);

	force = parseFloat(prompt("enter the force"));
	bulk = parseFloat(prompt("enter the bulk"));
}