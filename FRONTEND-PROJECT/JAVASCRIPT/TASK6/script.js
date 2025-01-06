function findLargest() {
    var input = document.getElementById("arrayInput").value;
    var arr = input.split(',').map(function(num) {
        return parseInt(num);
    });

    var largest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    document.getElementById("result").innerHTML = "The largest number is: " + largest;
}
