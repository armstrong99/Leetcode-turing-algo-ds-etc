// recurvesive kadens
/**
 * 
 * @param globalMaxima 
 * @param localMaxima 
 * @param arr 
 * @definition GlobalMaxima is the max of local Maxima and prev Global Maxima 
 * @definition LocalMaxima, M, is the either the Current(ith) element,x, or sum previous LocalMaxima and x
 * @strategy remove  unused M when passed
 * @Author - Ndukwe Armstrong(@ai_lift)
 */

interface IMaxs {
    globalMaxima: number
    localMaxima: number
}

function kadens(arr = [2, 1, -2, 3, 2]) {

    let currElem = arr.shift()

    let maximals: IMaxs = {
        globalMaxima: currElem,
        localMaxima: currElem
    }

    function kadensRecursive(dt: IMaxs, arr: Array<number> = []) {
        if (arr.length === 1) {
            dt.localMaxima = Math.max(dt.localMaxima, arr[0] + dt.localMaxima)
            dt.globalMaxima = Math.max(dt.globalMaxima, dt.localMaxima)
            return
        }

        let currElem = arr.shift()

        dt.localMaxima = Math.max(currElem, currElem + dt.localMaxima)
        dt.globalMaxima = Math.max(dt.globalMaxima, dt.localMaxima)

        kadensRecursive(dt, arr)
    }

    kadensRecursive(maximals, arr)

    return maximals.globalMaxima

}


console.log(kadens())