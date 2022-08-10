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

const two = new TreeX(null, null, null, 2);
const three = new TreeX(null, null, null, 3);
const four = new TreeX(null, null, null, 4);
const five = new TreeX(null, null, null, 5);
const six = new TreeX(null, null, null, 6);

const _three = new TreeX(null, null, null, 3);
const _four = new TreeX(null, null, null, 4);
const _five = new TreeX(null, null, null, 5);
const _six = new TreeX(null, null, null, 6);

two.left = three;
three.right = five;
three.left = four;

two.right = _three;
_three.right = _four;
_three.left = _five;

const findSumPathFromRoot = (root = two): number => {
  console.log(root);

  if (!root?.right || !root?.left) return root.value;

  return Math.max(
    root.value + findSumPathFromRoot(root.left),
    root.value + findSumPathFromRoot(root.right)
  );
};

// console.log(findSumPathFromRoot());

// const symBinary = (r1 = two.right, r2 = two.left): boolean => {
//   if (
//     (!r1 && r2) ||
//     (!r2 && r1) ||
//     (!r1 && !r2) ||
//     (r1?.value ?? null) !== (r2?.value ?? null)
//   ) {
//     return false;
//   }

//   let left = r1.left.value;
//   let right = r1.right.value;

//   let _right = r2.right.value;
//   let _left = r2.left.value;

//   console.log(left, right, _right, _left)

//   if (_left !== right || _right !== left) {
//     console.log("false");
//     return false;
//   }

//   if (_left === right || _right === left) {
//     console.log("true");
//     return true;
//   }

//   return symBinary(r1.right, r1.left) && symBinary(r2.right, r2.left);
// };

// function getPermuation(
//   _a = [1, 2, 3],
//   result: Array<Array<number>> = [[]],
//   subset: Array<number>,
//   i:number = 0
// ): Array<Array<number>> {

//   if (subset.length === _a.length) {
//     console.log(subset);
//     result.push(subset);
//     return result;
//   }

//     let _init = _a[i];

//     let slice = _a.slice(i);

//     [slice[i + 1], slice[i + 2]] = [slice[i + 2], slice[i + 1]];

//     let _slicerray = [_init, ...[slice[i + 1], slice[i + 2]]];

//     subset.push(___array);

//     getPermuation(_a, result, subset, i + 1)

//   }

// console.log(getPermuation([1, 2, 3], [[]], []), 0);
