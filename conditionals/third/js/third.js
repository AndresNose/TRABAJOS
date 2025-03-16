/*
	name exercise: third
	description: calculation of net salary with deductions
	author: Diego Andrés Gutiérrez
	date: 15th march 2025
*/

let salaryMin=1400000;
let salary=salaryMin;
let subTransport;
let health;
let pension;
let arl;
let total;

if (salary*2<salaryMin) {
	subTransport=114000;
} else {
	subTransport=0;
}

salary=salary+subTransport;

health=salary*0.12;
pension=salary*0.12;
arl=salary*0.052;

total=salary-health-pension-arl

if (total<salaryMin*4) {
	total=total*0.04;
}