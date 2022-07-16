console.log(((arr = [1,2,3,4,5,6,7,8,9,10], k = 5) => {

  let globalSum = 0;

  let partialSum = 0;

  for (let i = 0; i < arr.length; i++) {
        partialSum += arr[i]
        globalSum = Math.max(globalSum, partialSum)
        
        if(partialSum < 0) partialSum = 0
  }
    return globalSum
})())