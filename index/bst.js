let testData = [11, 34, 2, 74, 6];

class TNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  insert(num) {
    let new_node = new TNode(num);

    if (this.root === null) {
      this.root = new_node;
    } else this.insertNode(this.root, new_node);
  }

  insertNode(node = TNode, newNode = TNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else this.insertNode(node.right, newNode);
    }
  }

  printTree() {
    console.log(this.root);
  }
}

let tree = new Bst();

for (let k of testData) {
  tree.insert(k);
}

console.info(tree.printTree());
