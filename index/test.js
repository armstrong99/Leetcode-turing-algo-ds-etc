const maxSubArry = async () => {
    try {
        
    } 
    
    catch (e) {
        
    }
}

((a = [1, 5, 9], m = 5) => {
    // Write your code here
    let max_global = a[0], max_current = a[0], moduli = a[0]%m;
     
    for(let i = 1; i < a.length; i++) {
             console.log(moduli)
        if(a[i]%m > moduli) moduli = a[i]%m 
       console.log("moduli ", moduli)
             
        max_current = a[i]+ max_current
        
        if(max_current%m > moduli) moduli = max_current%m
         
      }
      
      console.log(moduli)
      return moduli
})()