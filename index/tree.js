// BST

const LEFT = 0;
const RIGHT = 1;

class TreeNode {
    constructor(value) {
        this.value = value
        this.descendants = []
        this.parent = null
    }

    get left() {
        return this.descendants[LEFT]
    }

    set left(node) {
        this.descendants[LEFT] = node;
        if(node) {
            node.parent = this
        }
    }

    get right() {
        return this.descendants[RIGHT]
    }

    set right(node) {
        this.descendants[RIGHT]
        if(node) {
            node.parent = this
        }
    }
}

const abe = new TreeNode("Abe")
const homer = new TreeNode("homer")
const bart = new TreeNode("bart")
const lisa = new TreeNode("lisa")
const maggie = new TreeNode("maggie")

abe.descendants.push(homer)
homer.descendants.push(bart, lisa, maggie)

