function reverseString() {
    var input = document.getElementById("inputString").value;
    var reversed = '';
    
    for (var i = input.length - 1; i >= 0; i--) {
        reversed += input[i]; 
    }
    
    document.getElementById("result").textContent = "Reversed String: " + reversed;
}
