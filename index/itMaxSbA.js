let a = ((a = [1, 2, 3], md = 2) => {
  a.sort((a, b) => a - b);
 
  let prefix = [a[0]];
  let mdArr = [a[0] % md];

  let map = new Map()

  let singleMap = new Map()

  singleMap.set(a[0], a[0])

  map.set(a[0], a[0])

  var i = 0

  while (a.length - 0) {
    for (let j = 1; j < a.length; j++) {

        if(!singleMap.has(a[j])) {
            mdArr.push(a[j]%md);
            singleMap.set(a[j], a[j])
         }

      let currSum = prefix[j - 1] + a[j];

    if(!map.has(currSum%md)) {
        mdArr.push(currSum%md);
        map.set(currSum%md, currSum%md)
     }

      prefix.push(currSum);

    }

        console.log(prefix)

    prefix = []
    a.shift();
    prefix.push(a[0])
    i++
  }

   return Math.max(...mdArr);
})();

console.log(a);
