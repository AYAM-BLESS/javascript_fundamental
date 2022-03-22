//done by Ayamba Bless
//write a program that takes a user age and displays how many days, weeks and months the person has lived on earth
//assuming that a year has 365 days, 52 weeks and 12 months
//Solution to this challenge
let dateOfBirth = prompt("Enter your date of birth");
let currentYear = prompt("Enter the current year");
let numberOfYearsLived = currentYear - dateOfBirth;
let days = numberOfYearsLived * 365;
let weeks = numberOfYearsLived * 52;
let months = numberOfYearsLived * 12;
alert (`You have lived ${days} days, ${weeks} weeks and ${months} months`);
