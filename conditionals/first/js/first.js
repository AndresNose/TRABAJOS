/*
	name exercise: first
	description: comparing the areas of three squares
	author: Diego Andrés Gutiérrez
	date: 15th march 2025
*/

let squareOne=2;
let squareTwo=6;
let squareThree=5;

let areaOne;
let areaTwo;
let areaThree;

areaOne=squareOne*squareOne;
areaTwo=squareTwo*squareTwo;
areaThree=squareThree*squareThree;

if (areaOne==areaTwo && areaTwo==areaThree) {
	console.log("All areas are equal");
}
else if (areaOne>areaTwo && areaOne>areaThree) {
	console.log(+areaOne+ " is biggest");
}
else if (areaTwo>areaOne && areaTwo>areaThree) {
	console.log(+areaTwo+ " is biggest");
}
else if (areaThree>areaOne && areaThree>areaTwo) {
	console.log(+areaThree+ " is biggest");
}
else if (areaOne==areaThree && areaOne>areaThree) {
	console.log(+areaOne+ " and " +areaTwo+ " are biggest")
}
else if (areaOne==areaThree && areaOne>areaTwo) {
	console.log(+areaOne+ " and " +areaThree+ " are biggest")
}
else {
	console.log(+areaTwo+ " and " +areaThree+ " are biggest")
}