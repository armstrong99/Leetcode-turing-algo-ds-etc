let a = ((a = [3, 3, 9, 9, 5], md = 7) => {

  function findMax(a, m, end) {
    
    let start = 0;
    
    let sum = 0;
     
    let currMax = 0;
     
    for (let i = 0; i < a.length; i++) {
           
      if (i < end) {
            
        sum += a[i];
             
      }    

      else {
           
        let rem = sum%m;
 
        currMax = currMax > rem ? currMax : rem;
           
        sum -= a[start];
     
        sum += a[end];   
                            
        start++;
                               
        end++;
 1
    }

    }

    return currMax > sum % m ? currMax : sum % m;

  }

  function maximumSum(a, m) {
  
    // Write your code here
    let max = 0;

    for (let i = 1; i <= a.length; i++) {

      let tempMax = findMax(a, m, i);

      max = tempMax > max ? tempMax : max;

    }

    return max;
  }

  return maximumSum(a, md)

})();


console.log(a);
