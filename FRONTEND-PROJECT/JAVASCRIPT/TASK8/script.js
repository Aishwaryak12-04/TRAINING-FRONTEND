function printPattern() {
    var pattern = '';
    
    for (var i = 1; i <= 5; i++) {
        pattern += '*'.repeat(i) + '\n';
    }
    
    document.getElementById("pattern").textContent = pattern;
}
