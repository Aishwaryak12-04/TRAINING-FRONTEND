function countVowels() {
    var input = document.getElementById("inputString").value;
    var vowels = "aeiouAEIOU"; 
    var count = 0;

    for (var i = 0; i < input.length; i++) {
        if (vowels.indexOf(input[i]) !== -1) { 
            count++;
        }
    }

    document.getElementById("result").innerHTML = "Number of vowels: " + count;
}
