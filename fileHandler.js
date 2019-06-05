const fs = require("fs");
const PHRASESFILE = "./phrases.txt";
module.exports = {
    writePhraseFile(phrase = null){
        try{
            fs.writeFileSync(PHRASESFILE, JSON.stringify({phrases:phrase}));
            console.log("Arquivo de frases atualizado.");
        } catch(err){
            console.log("Algo deu errado. Não foi possível gravar o conteúdo do arquivo.");
        }
    },
    readPhrasesFile(){
        try {
            let fileContent = fs.readFileSync(PHRASESFILE, "utf8");
            return JSON.parse(fileContent);
        } catch (error) {
            console.log("Algo deu errado. Não foi possível ler o conteúdo do arquivo.");
        }
    },
    addPhrase(phrase){
        let phrasesArray = this.readPhrasesFile();
        if(phrasesArray == undefined){
            this.writePhraseFile([phrase]);
        } else {
            phrasesArray.phrases.push(phrase);
            this.writePhraseFile(phrasesArray.phrases);
        }
    },
    removePhrase(phrasesArray, phraseToRemove){
        let newPhrasesArray = phrasesArray.phrases.filter(function(value){
            if(value != phraseToRemove){
                return value;
            }
        });
        this.writePhraseFile(newPhrasesArray);
    },
    updatePhrase(phraseToUpdate, newPhrase){
        let newPhrasesArray = phrasesArray.phrases.filter(function(value){
            if(value == phraseToUpdate){
                return value;
            }
        });
        this.writePhraseFile(newPhrasesArray);
    }
}