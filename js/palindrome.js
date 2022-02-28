function reversesStr(str){
    let reversesStr = str.split("").reverse().join("");
    if(reversesStr === str)
    console.log(`${str} is a palindrome`);
    else
    console.log(`${str} is not a palindrome`);
}
reversesStr(prompt("Enter a string"));