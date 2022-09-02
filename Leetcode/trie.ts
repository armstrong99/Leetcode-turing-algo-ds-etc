// class TrieNode {
//     children = {} as {
//         [key: string]: any
//     }

//     endOfWord: boolean = false

//     constructor(children: {}, endOfWord: boolean) {
//         this.children = children
//         this.endOfWord = endOfWord
//     }
// }

// class PrefixTrie {

//     root: TrieNode = new TrieNode({}, false)

//     constructor() {
//     }

//     insert(word: string): void {

//         let curr = this.root

//         for (const c of word) {
//             if (!curr.children[c]) {
//                 curr.children[c] = new TrieNode({}, false)
//             }

//             curr = curr.children[c]
//         }

//         curr.endOfWord = true
//     }
 
//     search(word: string): boolean {
//         let curr = this.root

//         for (const c of word) {
//             if (!curr.children[c]) {
//                 return false
//             }

//             curr = curr.children[c]
//         }

//         return curr.endOfWord
//     }

//     startsWith(prefix: string): boolean {
//         let curr = this.root

//         for (const c of prefix) {
//             if (!curr.children[c]) {
//                 return false
//             }
//             curr = curr.children[c]
//         }

//         return true
//     }

//     get getRoot(): TrieNode {
//           return this.root
//     }
// }

// let pTree =  new PrefixTrie()

// pTree.insert("app")
// pTree.insert("armstrong")
// pTree.insert("adam")


// console.log(pTree.search("app"))
// console.log(pTree.getRoot)



console.log({} === {})