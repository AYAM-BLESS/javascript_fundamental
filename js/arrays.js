//done by Ayamba Bless
let guestList = ["Bless", "Valdo", "Promise", "Franz"];
let name = prompt("Enter a name to check if the person is in the guest list");
if(guestList.includes(name)) {
    alert(`Your name is on the guest list. Welcome to the party ${name}`);
}
else{
    alert("Your name is not on the guest list please show me your invitation card")
}