//build the binary tree
class Tree {
  right: Tree = null;
  left: Tree = null;
  parent: Tree = null;
  value: string = null;

  constructor(left: Tree, right: Tree, parent: Tree, value: string) {
    this.right = right;
    this.left = left;
    this.parent = parent;
    this.value = value;
  }
}

const a = new Tree(null, null, null, "a");
const b = new Tree(null, null, null, "b");
const c = new Tree(null, null, null, "c");
const d = new Tree(null, null, null, "d");
const e = new Tree(null, null, null, "e");
const f = new Tree(null, null, null, "f");
const g = new Tree(null, null, null, "g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.right = g;

const findTarget = (stack: Tree, q: Tree): Tree[] => {
  let pathQ: Tree[] = [];

  let _stack = [stack];

  while (_stack.length > 0) {
    let curr = _stack.pop();

    if (curr.value === q.value) {
      //pathQ.push(q);
      break;
    }

    pathQ.push(curr);

    if (curr.right) {
      curr.right.parent = curr;
      _stack.push(curr.right);
    }
    if (curr.left) {
      curr.left.parent = curr;
      _stack.push(curr.left);
    }
  }

  return pathQ.reverse();
};

const resolveTargetPathToRoot = (foundTrack: Tree[]):string[] => {

   let path = [];
 
   let curr = foundTrack[0];
 
   while(true) {
    path.push(curr.value)
    let currParent = curr.parent ?? null
    curr = currParent

    if(!curr) {
        break
    }
   }

   return path.reverse()
};

const getLCA = (p1:string[]=[], p2:string[]= []) => {
    let common = []

    let option = p1.length > p2.length ? [p2, p1] : [p1, p2]

    for (const i of option[0]) {
        if(option[1].includes(i)) {
          common.push(i)
        }
    }

    return common[common.length - 1]
};

const lca = (root = a, q = f, p = g) => {
  let pathQ:string[] = resolveTargetPathToRoot(findTarget(root, q));

  let pathP:string[] = resolveTargetPathToRoot(findTarget(root, p));
 
  return getLCA(pathQ, pathP)
};

console.log(lca())
