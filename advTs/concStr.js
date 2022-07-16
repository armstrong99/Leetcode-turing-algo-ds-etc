/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

function splitByBait(s = "", bait = "") {
  let divider = s.replace(new RegExp(bait, "g"), `~${bait}~`);

  return divider.split("~");
}

function splitByLargestBait(l = 0, arr = []) {
  let newArr = [];

  let tempArr = [];

  for (let i = 0; i < arr.length; i++) {
    tempArr.push(arr[i]);

    if (tempArr.length === l) {
      //console.log(tempArr);
      newArr.push(tempArr.join(""));
      tempArr = [];
    }
  }

  console.log(newArr, " <---:::::");
  
  return newArr;
}

function validateSplit(arr = [], bait = "", l = 5, words = "") {
  let result = [];

  for ([idx, item] of arr.entries()) {
    //console.log("item4Loop", " ", item);

    //move right
    var currWord = item;

    let i = idx + 1;

    let j = idx - 1;

    while (currWord.length < l) {
      let nextWord = arr[i];

      if (!nextWord) {
        break;
      }

      //   console.log(l, (currWord.length + nextWord.length) < l+1)
      if (currWord.length + nextWord.length <= l) {
        currWord = currWord + nextWord;

        //console.log("nextword::: ->", nextWord, currWord);
      }

      // console.log("vaa ::: ", currWord.length + nextWord.length > l, nextWord)
      if (currWord.length + nextWord.length > l) {
        let spliceLength = l - currWord.length;
        currWord = currWord + nextWord.slice(0, spliceLength);
      }

      i++;
    }

    let validateR = currWord.split("").sort().join("") === words;
    // console.log(idx, " idx")
    let foundIdx = 0;

    for (let m = 0; m < idx; m++) {
      foundIdx = foundIdx + arr[m].length;
    }

    if (validateR && !result.includes(foundIdx)) result.push(foundIdx);

    currWord = item;

    while (currWord.length < l) {
      let nextWord = arr[j];

      //console.log(nextWord, "xw ", j);

      if (!nextWord) {
        break;
      }

      if (currWord.length + nextWord.length <= l) {
        currWord = currWord + nextWord;
      }

      if (currWord.length + nextWord.length > l) {
        let spliceLength = l - currWord.length;
        currWord =
          currWord +
          nextWord.split("").reverse().join("").slice(0, spliceLength);
      }

      j--;
    }

    let validateL = currWord.split("").sort().join("") === words;

    if (validateL) {
      // console.log(result);
      // console.log(":::-> next::: -> ", currWord, idx, words.length);
      //console.log(validateL);
      let foundIdxL = 0;

      for (let m = 0; m < idx + 1; m++) {
        foundIdxL = foundIdxL + arr[m].length;
      }

      let idxItem = Math.abs(foundIdxL - words.length);
      // console.log("result Left", result.indexOf(idxItem), idxItem)
      if (!result.includes(idxItem)) result.push(idxItem);
    }
  }

  return result;
}

var findSubstring = function (s, words) {
  let lengthOfW = words.join("").length;

  let largestStr = 0;

  for (let word of words) {
    largestStr = Math.max(largestStr, word.length);
  }

  let bait = words[0];

  //console.log("splii", largestStr, s);

  return validateSplit(
    splitByLargestBait(largestStr, s),
    bait,
    lengthOfW,
    words.sort().join("").split("").sort().join("")
  );
};

console.log(
  findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", [
    "fooo",
    "barr",
    "wing",
    "ding",
    "wing",
  ])
);
