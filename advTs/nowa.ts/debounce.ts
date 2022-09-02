/**
 * @Ndukwe_Amstrong - @ai_lift | @ndukwearmstrong
 * @param func - to be called
 * @param wait - wait time no matter how called
 * @param immediate boolean, true if to be executed immediately
 * @returns void
 */

function HOC_Debounce(func: Function, wait: number, immediate: boolean = false) {
    var timeout: any;

    return () => {
        var context = this
        var args: IArguments = arguments

        var later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }

        var callNow = immediate && !timeout

        clearTimeout(timeout)

        timeout = setTimeout(later, wait)

        if (callNow) func.apply(context, args)

    }
}
