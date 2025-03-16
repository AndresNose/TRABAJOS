/*
	name exercise: fifth
	description: determine the force of an object and compare it to a limit
	author: Diego Andrés Gutiérrez
	date: 15th march 2025
*/

let bulk=40;
let acceleration=25;
let force;

force=bulk*acceleration;

if (force>=100) {
	console.log("The force is high");
} else {
	console.log("The force is low");
}