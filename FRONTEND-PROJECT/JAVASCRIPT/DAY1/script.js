var num = document.getElementById("num"); 
let ans = document.getElementById("ans"); 

function oddoreven() {
    const number = parseInt(num.value); 
    if (isNaN(number)) { 
        ans.textContent = "Please enter a valid number.";
    } else if (number % 2 === 0) {
        ans.textContent = number + " is even.";
    } else { 
        ans.textContent = number + " is odd.";
    }
}
