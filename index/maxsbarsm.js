// let a = ((a = [3,3,9,9,5], moduli = 7) => {

//   a.sort((a, b) => a - b);

//   let map = new Map()

//   map.set(a[0], a[0])

//   const recurPreixPerElem = (arr = [], pointer = 0, moduli, moduliArr = [], map = new Map()) => {
//     let stackModliArr = [];

//     if (arr.length === 1 || arr.length === 0) {
//       return [...stackModliArr, ...moduliArr];
//     }

//     let prefixArr = [];

//     prefixArr.push(arr[0]);

//     for (let j = 1; j < arr.length; j++) {

//       if(!map.has(arr[j])) {
//         map.set(arr[j], arr[j])
//         stackModliArr.push(arr[j]%moduli)
//       }
//       let currSum = prefixArr[j - 1] + arr[j];

//       stackModliArr.push(currSum % moduli);

//       prefixArr.push(currSum);
//     }

//     console.log(arr, "this is arr")

//     arr.shift()

//     let newArr = arr;

//     prefixArr = [];

//     pointer += 1;

//     // analyse the new array
//     let totalNewArr = newArr.reduce((prev, curr) => {
//       stackModliArr.push(prev%moduli)
//       stackModliArr.push(curr%moduli)
//      return prev + curr})

//   if([...stackModliArr, ...moduliArr].indexOf(totalNewArr)) {
//     return [...stackModliArr, ...moduliArr]
//   }

//     return recurPreixPerElem(newArr, pointer, moduli, [...stackModliArr, ...moduliArr]);
//   };

//   let ans = recurPreixPerElem(a, 0, moduli, [a[0]%moduli], map = map);

//   // console.log(ans);
//    // console.log(modliArr);
//   return Math.max(...ans)

// })();

// console.log(a);

let a = [3, 3, 9, 9, 5];

let prefix = [a[0]];

for (let j = 1; j < a.length; j++) {
  let currSum = prefix[j - 1] + a[j];

  prefix.push(currSum);
}

console.log(prefix);
