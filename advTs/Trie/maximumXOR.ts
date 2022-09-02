/**
 * @Maximum_XOR_TWO_NUMBERS (Leetcode)
 * @Author (Ndukwe Armstrong)
 * @Iterative_Solution
 */

interface IGlobal {
    result: number
}

const maximumXOR = (nums:number[] = [3,10,5,25,2,8]) => {

    let global: IGlobal = { result: null }
 
    const validateWithGlobal = (k: number, j: number) => {
        let nonSwap = k ^ j
        let swap = j ^ k

        if (nonSwap > global.result) {
            global.result = nonSwap
            return
        }

        else if (swap > global.result) {
            global.result = swap
            return
        }
    
        return
    }
 
 
    while (nums.length > 0) {
        let curr = nums.shift()
          for (let m = 0; m < nums.length; m++) {
            validateWithGlobal(curr, nums[m])
         }
     }
 
    return global.result
 
}

console.log(maximumXOR())