//done by Ayamba Bless
/* write a program that prompts the guest what their name is, which they will then enter into the prompt,
then you will check the name against all the names inside the guest list and if their name is in the guest list,
send them an alert saying "Welcome". Otherwise it will say sorry your name is not on the guest list.*/
// Solution
let guestList = ["Ayamba", "Bright", "Kezi", "Laura", "Desmond", "Eya", "Trinity", "Nelson", "Tabot"];
let name = prompt("If you are a guest enter you name");
if(guestList.includes(name)){
    alert(`Welcome ${name} make your self confortable`);
}
else {
    alert("Sorry your name is not on the guest list");
}