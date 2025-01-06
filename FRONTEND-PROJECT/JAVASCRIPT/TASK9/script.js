function fizzBuzz() {
    var result = '';

    for (var i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz\n'; 
        } else if (i % 3 === 0) {
            result += 'Fizz\n'; 
        } else if (i % 5 === 0) {
            result += 'Buzz\n'; 
        } else {
            result += i + '\n'; 
        }
    }

    document.getElementById("result").textContent = result;
}
