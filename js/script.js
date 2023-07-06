// first task

alert(`---------- First task ----------`);

const firstString = prompt(`Enter the first line:`);
const secondString = prompt(`Enter the second line:`);
const thirdString = prompt(`Enter the third line:`);

let strings = [firstString, secondString, thirdString];

for (var i = strings.length - 1; i > 0; i--){
    const randomeIndex = Math.floor(Math.random() * (i + 1));
    let temp = strings[i];
    strings[i] = strings[randomeIndex];
    strings[randomeIndex] = temp;
}

alert(`Randomize input strings: 
${strings.join("   ")}`);

// second task

alert(`---------- Second task ----------`);

let num = prompt(`Enter a five-digit number:`);

if (isNaN(Number(num))) {
    alert(`Error. It's not a number.`);
}
else if (num.length != 5) {
    alert(`Error. The number is not five digits.`);
}
else {
    const array = num.split("");
    //console.log(array);
    //console.log(array.reverse()); 
    array.reverse();
    const newNum = array.join("");
    
    alert(`    Your number: ${num}
    Result: ${newNum}`);
}