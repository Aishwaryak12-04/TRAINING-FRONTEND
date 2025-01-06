function checkPrime() {
    let num = document.getElementById("number").value;
    let result = document.getElementById("result");

    if (num === "" || isNaN(num)) {
        result.innerHTML = "Please enter a valid number!";
        return;
    }

    num = parseInt(num);
    if (num <= 1) {
        result.innerHTML = num + " is not a prime number.";
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        result.innerHTML = num + " is a prime number.";
    } else {
        result.innerHTML = num + " is not a prime number.";
    }
}
