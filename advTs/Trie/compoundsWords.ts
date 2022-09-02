// let words = [  "way", "a", "w", "y"
// ]
let words = [
    "phone", "rockstar", "rock", "stars", "rocks", "tar", "rockstars", "super", "highway", "high",
    "way", "superhighway", "a", "w", "y"
].sort((a,b) => a.length - b.length)

console.log(words)

interface IRoot {
    children: { [key: string]: IRoot },
    endOfWord: boolean
}

class solveCW {
    root: IRoot = {
        children: {},
        endOfWord: false
    }

    constructor(_words: string[] = words) {
        (() => {
            _words.forEach(w => {
                 let curr = this.root
                 for (const char of w) {
                    if (!curr.children[char]) {
                        curr.children[char] = {
                            children: {},
                            endOfWord: false
                        }
                    }
                     curr = curr.children[char]
                }
                 curr.endOfWord = true
            })
        })()
    }

    getCpW() {

        let cpWordMap:{[key: string]: any} = {}

        words.forEach(word => {

            let curr = this.root;
 
            let _subWord = ""

            let currentCpWord: {
                word: string,
                noOfSubWord: number,
                subWords: string[]
            } = {
                word,
                noOfSubWord: 0,
                subWords: []
            }

            for (const char of word) {
                _subWord += char

                if(words.includes(_subWord) ){
                    currentCpWord.subWords.push(_subWord)
                    _subWord = ""
                 }

                if (curr.children[char].endOfWord) {
                    currentCpWord.noOfSubWord = currentCpWord.noOfSubWord + 1;
                }

                curr = curr.children[char]
            }
           
            if(currentCpWord.noOfSubWord > 1) {
                if(_subWord.length) {
                    currentCpWord.subWords.push(_subWord)
                }
                cpWordMap[currentCpWord.word] = {
                    [currentCpWord.word] : currentCpWord.subWords.join(" + ")
                }
            }

        })

        return cpWordMap
    }

}

let result = new solveCW().getCpW()

console.log(result)