function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    document.getElementById("result").innerHTML = "The sum of numbers from 1 to 100 is: " + sum;
}
