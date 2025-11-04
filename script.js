function analizeText() {
    const myText = document.getElementById("text").value;
    const myTextResult = myText.length;
    document.getElementById("textResult").textContent = myTextResult;
    const words = myText.split(" ");
    document.getElementById("textResultNotSpace").textContent = words.length;
};