// let _result: Array<Array<number>> = [];
// let _num: Array<number> = [1,2,3,4,5];

// const permutation = (_arr:number[] = []) => {

//   for (const [key, value] of _arr.entries()) {

//     let initValue = _arr[key];

//     let children = [..._arr.slice(0, key), ..._arr.slice(key + 1)];

//     let parentArray = [initValue, ...children];

//     _result.push(parentArray);

//     for (const [i, value] of children.entries()) {

//       let _nextInitValue = children[i];

//       let _nextChildren = [...children.slice(0, i), ...children.slice(i + 1)];

//       let children_Or_Grand_Children_Array = [
//         initValue,
//         _nextInitValue,
//         ..._nextChildren,
//       ];

//       let wholeArray: Array<number> = [
//         initValue,
//         _nextInitValue,
//         ...divideAndSwap(_nextChildren),
//       ];

//       _result.push(wholeArray);

//       if (
//         wholeArray.toString() === children_Or_Grand_Children_Array.toString()
//       ) {
//         if (wholeArray.toString() !== parentArray.toString()) {
//           if (!_result.includes(wholeArray)) {
//             _result.push(wholeArray);
//           }
//         }
//       } else {
//         if (wholeArray.toString() !== parentArray.toString()) {
//           if (!_result.includes(wholeArray)) {
//             _result.push(wholeArray);
//           }
//         }

//         if (
//           children_Or_Grand_Children_Array.toString() !== parentArray.toString()
//         ) {
//           if (!_result.includes(children_Or_Grand_Children_Array)) {
//             _result.push(children_Or_Grand_Children_Array);
//           }
//         }
//       }

      
//     }
//   }
// };

// const divideAndSwap = (_a: number[] = []): Array<number> => {
//   if (_a.length === 1) {
//     return _a;
//   }
//   if (_a.length === 0) {
//     return [];
//   }
//   if (_a.length === 2) {
//     [_a[0], _a[1]] = [_a[1], _a[0]];
//     return _a;
//   }
//   return [_a[0], ...divideAndSwap(_a.slice(1))];
// };



// const _main = () => {

  

// }

// console.log(_result, _result.length);
