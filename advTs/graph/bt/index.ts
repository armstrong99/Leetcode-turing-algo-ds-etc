function comb(int:number[], _target:number) {

    let result:Array<number[]> = [];

    let dfs = function(start:number, curr:number[], target:number = _target) {
        if(target === 0) {
          result.push([...curr])
          return
        }
        if(target < 0) {
            return
        }

        for (let i = start; i < int.length; i++) {
            let num = int[i];

            curr.push(num);

            dfs(i, curr, target - num)
            
            curr.pop()
        }
    }

    dfs(0, [], _target)

    return result
}

console.log(comb([2, 3, 6, 7], 10))