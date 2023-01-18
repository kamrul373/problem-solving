//For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG

function reverse (sen) {
    const seperateWord = sen.split(" ")
    let sentence = ""
    for(i = 0; i<seperateWord.length; i++){
        const word = seperateWord[i]
        let currentWord = []
        for (j=word.length -1 ; j>=0 ; j-- )[
            
            currentWord.push(word[j])
        ]
        const joined  = currentWord.join("");

        sentence += joined + " "
    }
    return sentence.split(" ").reverse().join(" ")
   
}
const r = reverse("Welcome to this Javascript Guide!")
console.log(r)