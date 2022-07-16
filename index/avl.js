const Node = function(item) {
    this.item = item
    this.height = 1
    this.left = null
    this.right = null
}


// AVL Tree
class AVLTree {

    constructor() {

        let root = null

        //return height of the node
        this.height = (N) => {
            if (N === null) {
                return 0
            }
            return N.height
        }
    }

    rightRotate(y) {

    }
}