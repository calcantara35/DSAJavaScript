class TrieNode {
  constructor() {
    this.isEnd = false;
    this.freq = 0;
    this.children = [];
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  // insert word into trie, word is a array of characters, aka string.
  insert(word) {
    if (word.length === 0) return; // forbid empty strings
    // letter and the currentNode are set to the root node.
    let letter,
      currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      letter = word[i];
      if (!currentNode.children.hasOwnProperty(letter)) {
        currentNode.children[letter] = new TrieNode();
      }
      currentNode = currentNode.children[letter];
    }
    currentNode.isEnd = true;
    currentNode.freq = currentNode.freq + 1;
  }

  // get the node for the prefix
  getNodeForPrefix(str) {
    let letter,
      currentNode = this.root;
    for (let i = 0; i < str.length; i++) {
      letter = str[i];
      if (!currentNode.children.hasOwnProperty(letter)) {
        return null;
      }
      currentNode = currentNode.children[letter];
    }
    return currentNode;
  }

  isWord(word) {
    if (this.getNodeForPrefix(word) === null) return false;
    return this.getNodeForPrefix(word).isEnd;
  }

  getWordFreq(word) {
    if (this.getNodeForPrefix(word) === null) return false;
    return this.getNodeForPrefix(word).freq;
  }
}

/* ----- Test Cases ----- */
let ace = "ace";
let at = "at";
let cat = "cat";
let cab = "cab";
let of = "of";

let t = new Trie();
t.insert(ace);
console.log(t.isWord(ace)); // true

t.insert(ace);
console.log(t.isWord(ace)); // true
console.log(t.getWordFreq(ace)); // 2

t.insert(at);
console.log(t.isWord(at)); // true
console.log(t.getWordFreq(at)); // 1

t.insert(cat);
t.insert(cat);
console.log(t.isWord(cat)); // true
console.log(t.getWordFreq(cat)); // 2
t.insert(cat);
console.log(t.getWordFreq(cat)); // 3

t.insert(cab);
console.log(t.isWord(cab)); // true
console.log(t.getWordFreq(cab)); // 1

t.insert(of);
console.log(t.isWord(of)); // true
console.log(t.getWordFreq(of)); // 1

// check the internal representation of the Trie
console.log(t.root);
