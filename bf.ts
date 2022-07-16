function maxSubArray(nums: number[]): number {
   
    let largestSum = Number.NEGATIVE_INFINITY
    
    let perIndex = 1;
    let p1=0, p2=perIndex,currSumPerIndex = 0;

    while(perIndex < nums.length) {

    if(p2 === nums.length) {
        perIndex++
        p2 = perIndex
        p1 = 0
        currSumPerIndex = 0
    }
      
    if(currSumPerIndex === 0) {
        currSumPerIndex = sumArr(nums.slice(p1, p2+1));
        largestSum = Math.max(largestSum, currSumPerIndex)
    }
    else {
        currSumPerIndex = currSumPerIndex - nums[p1-1] + nums[p2]
        largestSum = Math.max(largestSum, currSumPerIndex)
    }



    p1++
    p2++
    perIndex++

        
  }
        
    

    console.log("largSU,", largestSum)
    
       //singleNums
       
       nums.map(n => {
           if(n > largestSum){
               largestSum = n
           }
       })
       
        largestSum = Math.max(largestSum, sumArr(nums))
       
       return largestSum
   };
   
   function sumArr(ar:number[]):number {
       return ar.reduce((prev, curr)  => prev + curr)
   }


  console.log(maxSubArray([8,-19,5,-4,20]))