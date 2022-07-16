// write a function that takes in a myString and returns the longest sequence of unique characters

//input 1: blackberry 
//output : lackber

//input 2: school
//Output2: scho

//input 3 : communication 
//output 3: municat
 
((str = "simply") => {
    
    let myStr = str.toLowerCase() 
    let p1 = 0
    let p2 = 1

    while(myStr.charAt(p1) === myStr.charAt(p2)) {
          //remove the prev character which then moves both pointers to the right
          myStr = myStr.slice(1, myStr.length)
     }
      
    let currWin = {[`${myStr.charAt(p1)}`]:  1, [`${myStr.charAt(p2)}`]: 1}

    let getLgstSql = currWin =>  Object.keys(currWin).join('')

    let longestSeq = ''
 
    const getCharAtIndex = idx => myStr.charAt(idx)

    var i = 0
  
    while(myStr) {
       
        p2 += 1;
              
        i++;

        console.log(i, "p2", p2, myStr.length);

        if(p2 === myStr.length){
            
           longestSeq = getLgstSql(currWin).length > longestSeq.length ? getLgstSql(currWin) : longestSeq
           
            break
        }

        let lookup = currWin[getCharAtIndex(p2)]
 
        if(!lookup) {
            console.log("lookup", lookup, getCharAtIndex(p2))
             currWin[getCharAtIndex(p2)] = 1
        } 
  
        if(lookup) {
           // we av gotten a repeating myString
           //console.log("myy curr win first --> ", currWin, getLgstSql(currWin))

           longestSeq = getLgstSql(currWin).length > longestSeq.length ? getLgstSql(currWin) : longestSeq
          
           //console.log("longestSeq", longestSeq)

           // move right and shift the window
           myStr = myStr.slice(1, myStr.length)
           
           console.log("myString is now ", myStr)

           p1 = 0

           p2 = 1

           currWin = {[`${myStr.charAt(p1)}`]:  1, [`${myStr.charAt(p2)}`]: 1}

        }
 
    }


    console.log(longestSeq)
    
})()