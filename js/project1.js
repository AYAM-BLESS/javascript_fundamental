//done by Ayamba Bless
/* In this challenge you are going to create a function which tells us how many days, weeks, and month we have left
if we live till 90 years.
Assuming that 365 days in a year, 52 weeks in a year and 12 months in a year.*/
// Output should be you have X days, Y weeks and Z months left.
//solution to this problem

let age = prompt("Enter your age");
let remainingYears = 90 - age;
let days = remainingYears *365;
let weeks = remainingYears *52;
let months = remainingYears *12;
alert(`You have ${days} days ${weeks} weeks and ${months} months left.`);
