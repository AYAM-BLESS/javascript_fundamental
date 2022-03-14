//done by ayamba bless
//Assessment
//your job is only to change the first letter of your name and not the rest
//Hints: create a variable that stores the name the user enters
//Capitalize the first letter of the name 
//to isolate the first character
//turn the first character to upper case
//isolate the rest of the name
//concatenate the character
//We use the capitalize version of their name to greet them using an alert

// Solutions to the assessment

let myName = prompt("what is your name");

let firstCharacter = myName.slice(0,1);

let firstCharacterUpperCase = firstCharacter.toUpperCase();

let otherNames = myName.slice(1,myName.length);

let otherNamesToLower = otherNames.toLowerCase();

alert("Hello! " + firstCharacterUpperCase +  otherNamesToLower);