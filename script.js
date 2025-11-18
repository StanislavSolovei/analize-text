function analizeText() {
    const myText = document.getElementById("text").value; 
    
    const myTextResult = myText.length; 
    document.getElementById("textResult").textContent = myTextResult; 
    
    let textTrimmed = text.trim()
    let counter = 0
    for (let i = 0; i < textTrimmed.length; i++){
        const letter = textTrimmed.charAt(i);
    if (letter !== ' '){
        counter += 1
    }
    }
    document.getElementById("textResultNotSpace").textContent = counter; 
    const words = myText.split(" "); 
    document.getElementById("textWords").textContent = words.length;  

    if (words.length > 0) { 
        let theLongWord = words[0]; 
        for (let i = 1; i < words.length; i++) { 
            if (words[i].length > theLongWord.length) { 
                theLongWord = words[i];  
            }
        }
        document.getElementById("theLongWord").textContent = theLongWord; 
    }

    if (words.length > 0) { 
        const averageTotalLength = words.reduce((sum, word) => sum + word.length, 0); 
        const averageWordLength = averageTotalLength / words.length 
        document.getElementById("averageWord").textContent = averageWordLength; 
    }

    let numberProposals = 0
    let inProposals = false 

    for(let i = 0; i < myText.length; i++){
        const sign = myText[i];

    if (sign === "." || sign === "!" || sign === "?"){
        if (inProposals){
            numberProposals++;
            inProposals = false;
        }
    } 
    
    else if (sign.trim() !==''){
        inProposals = true;
    }
}

    document.getElementById("numberProposals").textContent = numberProposals;


    const characterReadPerMinute = 200

    const minutes = textTrimmed.length / characterReadPerMinute
    const seconds = minutes * 60

    if (textTrimmed.length <= 200){
        document.getElementById("read-time-second").textContent = seconds
    } else {
        document.getElementById("read-time").textContent = minutes
    }
    

};
