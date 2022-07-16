((arr = [1,2,3,4,5,6,7,8,9]) => {

    let list = 1

    for (let i = 0; i < arr.length; i++) {
            if(arr[i] % 2 === 0) {
                list = list * arr[i]
             }
     }

 
    console.log(list)
})()