let txtSample: Array<string> = Array(25).fill("").map((m, idx) => String(idx) + "fills");
let db:Array<string> = [];

const saveToDB = (fiveItems: string[]) => new Promise((resolve, reject) => {
    setTimeout(() => {
        db.push(...fiveItems)
        console.log(":::--> saving in the background ", db)
      resolve('success');
    }, 5000);
  });

(async () => {

    let fiveItems = [];

    for(let i =0; i < txtSample.length; i++) {
        fiveItems.push(txtSample[i])
        if(fiveItems.length === 5) {
            saveToDB(fiveItems)
            console.log("---->> A new 5 item has been saved")
             fiveItems = []
        }
     }
    
   

     console.log("::::completed saving all 25 items")
   

})()