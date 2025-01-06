function printMultiples() {
    let num = document.getElementById("number").value;
    let result = document.getElementById("result");
    result.innerHTML = "";

    if (num === "" || isNaN(num)) {
        result.innerHTML = "Please enter a valid number!";
    } else {
        for (let i = 1; i <= 30; i++) {
            let multiple = num * i;
            result.innerHTML += `${num} x ${i} = ${multiple} <br>`;
        }
    }
}
