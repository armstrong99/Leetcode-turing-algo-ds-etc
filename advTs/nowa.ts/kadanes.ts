// recurvesive kadens
/**
 * 
 * @param globalMaxima 
 * @param localMaxima 
 * @param arr 
 * @definition GlobalMaxima is the max of local Maxima and prev Global Maxima 
 * @definition LocalMaxima, M, is the either the Current(ith) element,x, or previous LocalMaxima
 * @strategy remove  unused M when passed
 * 
 */

function kadens(arr = [-2, 3, 2, -1]) {

    let currElem = arr.shift()

    let globalMaxima = currElem
    let localMaxima = currElem

    function kadensRecursive(globalMaxima: number = 0, localMaxima: number = 0, arr: Array<number> = []) {
        if (arr.length === 1) {
            localMaxima = Math.max(localMaxima, arr[0] + localMaxima)
            globalMaxima = Math.max(globalMaxima, localMaxima)
            return
        }

        let currElem = arr.shift()

        localMaxima = Math.max(currElem, currElem + localMaxima)
        
        globalMaxima = Math.max(globalMaxima, localMaxima)

        console.log(localMaxima)

        kadensRecursive(globalMaxima, localMaxima, arr)
    }

    kadensRecursive(globalMaxima, localMaxima, arr)

    console.log(arr)

    return globalMaxima


}


console.log(kadens())