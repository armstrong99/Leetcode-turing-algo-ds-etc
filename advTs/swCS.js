console.log(
  ((s = "aaaaaaaaaaaaaa", words = ["aa","aa"]) => {
    if (s === null || s.length === 0 || words === null || words.length == 0) {
      return indices;
    }


    let result = [];

    let winSize = words[0].length;

    let left = 0;

    let right = winSize;

    let wordMap = new Map();

    function setMap() {
        wordMap.clear()
        console.log(":::setting maps...")
        for (const word of words) {

            if (wordMap.get(word) >= 0) {
              wordMap.set(word, wordMap.get(word) + 1);
             } 
            
            else {
                wordMap.set(word, 0);
               }
          }
    }

    console.log(s.length)

    setMap()
  
    let currentStrike = 0;

    function validateWinSize(rightP, leftP) {
          console.log("pointers --> ", leftP, rightP, "cs --> ", currentStrike, wordMap)

          let sliceStr;

      if (currentStrike > 0) {
        sliceStr = s.slice(rightP - winSize, rightP); //abc

       console.log("wordSliced above 0 --> ", sliceStr, currentStrike)


        if (wordMap.get(sliceStr) >= 0) {
          wordMap.set(sliceStr, wordMap.get(sliceStr) - 1);
          return true;
        } else {
          currentStrike = 0;
          setMap()
          return false;
        }
      }


      else {
          sliceStr = s.slice(leftP, rightP); //bar
          
        console.log("wordSliced below 0 --> ", sliceStr, currentStrike)
          if (wordMap.get(sliceStr) >= 0) {
            wordMap.set(sliceStr, wordMap.get(sliceStr) - 1);
            return true;
          } else {
            currentStrike = 0;
            setMap()
            return false;
          }
       }
    }

    while (right < s.length+1) {
      if (validateWinSize(right, left)) {
        //increase current progress
        currentStrike = currentStrike + 1;

        if (currentStrike >= words.length) {
          result.push(left);
          left = left + 1;
          right = left + winSize;
          currentStrike = 0
          setMap()
        }
        //move to the right
        else right = right + winSize;
      }
      
      else {
        left = left + 1;
        right = left + winSize;
      }
    }

    return result;
  })()
);


