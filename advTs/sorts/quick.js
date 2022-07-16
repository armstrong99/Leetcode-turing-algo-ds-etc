/**
 * name -> @quickSort
 * @description ->
 * @whenApplied ->
 */

function quickSort(arr) {

  console.log("to be part. arrs", arr);

  const swap = (arr = []) => {
       
    console.log("my swap", arr);

    let small = Math.min(...arr);

    let big = Math.max(...arr);

    arr[0] = small;

    arr[1] = big;

    return arr;
  };

  if (arr.length <= 2) {
    console.log("I am arrived, ", arr.slice(0, Math.round(arr.length / 2)));
    return swap(arr);
  }

  let pivot = arr[arr.length - 1];
  let leftArray = [];
  let mid_sameInt = [];
  let rightArray = [];
  let midPoint = Math.round(arr.length / 2);

  arr = arr.slice(0, arr.length - 1);

  for (const num of arr) {
    // console.log(num);
    if (num > pivot) {
      rightArray.push(num);
    }
    if (num < pivot) {
      leftArray.push(num);
    }
    if (num === pivot) {
      mid_sameInt.push(num);
    }
  }

  arr = [...leftArray, pivot, ...rightArray];

  console.log("b4 sliced arrs", arr);

  return [
    ...quickSort(arr.slice(0, midPoint)),
    ...quickSort(arr.slice(midPoint)),
  ];
}

console.log("result -> ", quickSort([9, 7, 4, 8]));
