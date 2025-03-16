/*
	name exercise: seventh
	description: calculation of the friction of an object on a surface
	author: Diego Andrés Gutiérrez
	date: 15th march 2025
*/

let frictionForce;
let bulk=8;
let frictionCoefficient=0.4;
let gravitationalAcceleration=10;

frictionForce=frictionCoefficient*bulk*gravitationalAcceleration;

console.log("The friction force is: " +frictionForce);