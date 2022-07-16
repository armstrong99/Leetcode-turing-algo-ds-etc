((a =  ['Jack', 8, 2, 6, 'King', 5, 3, 'Queen', 'King', 'King', 'Queen', 'Jack', 'Queen']) => {
               
    let numArr = [], stringArr = [];

     for(let i = 0; i < a.length; i++) {
         if(isNaN(a[i])) {
             stringArr.push(a[i])
         }
   
         else numArr.push(a[i])
     }

    //  console.log(numArr, stringArr)

     numArr = numArr.sort((a,b) => a-b)
 
     stringArr = stringArr.sort((a, b) => a > b)

     let fistItem = stringArr.sort((a, b) => a > b).shift()
 
     console.log([...numArr, fistItem, ...stringArr.reverse()])

     return [...numArr, stringArr]
})()