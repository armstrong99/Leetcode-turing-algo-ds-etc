let l = ((a = [3, 3, 9, 9, 5], md = 7) => {
  
  // get sum of two elements
  const sumMaxMod = (a = [], num = 2) => {
    let p1 = 0,
      p2 = num;

    let maxMdSum = -Infinity;

    while (true) {
      let subAr = a.slice(p1, p2);

      let subArrSum = subAr.reduce((prev, curr) => prev + curr);

      if (subArrSum % md > maxMdSum) {
        maxMdSum = subArrSum%md;
      }
      if (a[p1 + 1]) p1 += 1;
      if (!a[p2]) {
        break;
      }
      p2 += 1;
    }

    return maxMdSum;
  };

  let maxMdSum = -Infinity;

  // sum of all
  let totMdSum = a.reduce((prev, curr) => prev + curr) % md;

  if (totMdSum > maxMdSum) {
    maxMdSum = totMdSum;
  }

  // sum of single
  a.map((v) => {
    if (v % md > maxMdSum) {
      maxMdSum = v % md;
    }
  });

  // sum of subs
  if (a.length >= 2) {
    let start = 2,
      end = a.length;

    while (start < end) {
      // take start at a time
      let result = sumMaxMod(a, start);
       if (result > maxMdSum) {
        maxMdSum = result;
      }
      start += 1;
    }
  }

  return maxMdSum;

})();

console.log(l);
