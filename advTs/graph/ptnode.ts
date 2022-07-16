//build the binary treeX
class TreeX {
  right: TreeX = null;
  left: TreeX = null;
  parent: TreeX = null;
  value: number = null;

  constructor(left: TreeX, right: TreeX, parent: TreeX, value: number) {
    this.right = right;
    this.left = left;
    this.parent = parent;
    this.value = value;
  }
}

const one = new TreeX(null, null, null, 1);
const two = new TreeX(null, null, null, 2);
const thre = new TreeX(null, null, null, 3);
const four = new TreeX(null, null, null, 4);
const five = new TreeX(null, null, null, 5);
const eleven = new TreeX(null, null, null, 11);

five.left = eleven;
five.right = thre;
eleven.right = two;
eleven.left = four;
thre.right = one;


const findSumPathFromRoot = (root = five):number => {
     console.log(root)
   if(!root?.right && !root?.left) return root.value

   return Math.max(root.value + findSumPathFromRoot(root.left), root.value + findSumPathFromRoot(root.right))
 
}

console.log(findSumPathFromRoot())
