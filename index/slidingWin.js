let l = ((a = [3, 3, 9, 9, 5], md = 7) => {
  let maxMdSum = -Infinity;

  // sum of subs
  if (a.length >= 2) {
    let start = 1,
      end = a.length;

    let p1 = 0,
      p2 = start;

    while (true) {
      // take start at a time
      // let currWindow = a.slice(p1, p2);

      let newMatrix = [];

      for (let j = p1; j < p2; j++) {
        newMatrix.push(a[j]);
      }

      let sum = 0;

      for (let k = 0; k < newMatrix.length; k++) {
        sum += newMatrix[k];
      }

      let winSum = sum;

      for (let k = p1; k === p2; k++) {}

      if (winSum % md > maxMdSum) {
        maxMdSum = winSum % md;
      }

      // shift right and remove 1 element from left
      p2++;
      p1++;

      if (p2 === a.length + 1) {
        start += 1;
        p1 = 0;
        p2 = start;
      }

      if (start === end) {
        break;
      }
    }
  }

  let xsum = 0;

  for (let p = 0; p < a.length; p++) {
    xsum += a[p];
  }

  if (xsum % md > maxMdSum) maxMdSum = xsum % md;

  return maxMdSum;
})();

console.log(l);
