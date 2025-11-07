// Stworzyłem funkcję która będe analizować tekst, chocicaż nie udało mi zrobić wszystkie analizy tekstu
function analizeText() {
    const myText = document.getElementById("text").value; // Stworzyłem zmienną która będzie przechowywać w sobie tekst
    
    const myTextResult = myText.length; // Stworzyłem zmienną która będzie przechowywać w sobie długość tekstu
    document.getElementById("textResult").textContent = myTextResult; // Wstawiłem długość tekstu do odpowiedniego miejsca w HTML po id="textResult"
    
    const textTrimmed = myText.replace(/\s/g, ""); // Tutaj +/- tak samo jak wyżej tylko dzięki .replace usunąłem spacje
    document.getElementById("textResultNotSpace").textContent = textTrimmed.length; // I tutaj też tak samo wstawiłem długość tekstu bez spacji
    
    const words = myText.split(" "); // Tutaj stworzyłem tablicę która przechowuje w sobie słowa z tekstu, rozdzielone spacjami
    document.getElementById("textWords").textContent = words.length; // I tutaj wstawiłem ilość słów w tekście

    if (words.length > 0) { // Sprawdzamy czy tablica nie jest pusta
        let theLongWord = words[0]; // Tworze zmienną która przechowuje pierwsze słowo z tablicy
        for (let i = 1; i < words.length; i++) { // Stworzyłem pętle, która przechodzi przez wszystkie słowa w tablicy
            if (words[i].length > theLongWord.length) { // Sprawdzam czy aktualne słowo jest dłuższe niż to które jest w zmiennej theLongWord
                theLongWord = words[i];  // Jeżeli tak to przypisuje to słowo do zmiennej theLongWord
            }
        }
        document.getElementById("theLongWord").textContent = theLongWord; // No i wyświetlam najdłuższe słowo
    }

    if (words.length > 0) { // Tutaj zrobiłem coś podobnego, tak samo sprawdzam czy tablica nie jest pusta
        const averageTotalLength = words.reduce((sum, word) => sum + word.length, 0); // Użyłem metody reduce aby zsumować długości wszystkich słów w tablicy
        const averageWordLength = averageTotalLength / words.length // Potem dzielę tą sumę przez ilość słów 
        document.getElementById("averageWord").textContent = averageWordLength; // A tutaj już wyświetlam średnią długość słowa
    }
};
