function analizeText() {
    const myText = document.getElementById("text").value;
    
    const myTextResult = myText.length;
    document.getElementById("textResult").textContent = myTextResult;
    
    const textTrimmed = myText.trim();
    document.getElementById("textResultNotSpace").textContent = textTrimmed.length;
    
    const words = myText.split(" ");
    document.getElementById("textWords").textContent = words.length;
};
