function getValidNumString(n: number): string {
  let validNum = "";

  for (let i = 0; i < n; i++) {
    validNum += String(i + 1);
  }

  return validNum;
}

function filterArr(ar: Array<string>, tar: string): Array<string> {
    return ar.filter((s) => s !== tar);
  }

function genParm(n: number, k: number): string[] {
  let str: string[] = getValidNumString(n).split("");
  let _result:string[] = []
  mainParmGenerator({
    cumStr: "",
    result: _result,
    n: str.length,
    workingAr: [],
    k: k,
    pointer: 0,
    str: str,
    pointer2: 1
  }
  )

  return _result
}


// 1. "123"
// 2. "132"
// 3. "213"
// 4. "231"
// 5. "312"
// 6. "321"

function mainParmGenerator(dt: {
  cumStr: string;
  result: Array<string>;
  n: number;
  pointer: number;
  str: string[];
  k: number;
  workingAr: Array<string>;
  pointer2?: number
}): Array<string> {

  console.log(dt.cumStr, dt.cumStr.length, dt.n, " length")

  if (dt.n === dt.cumStr.length) {
    dt.result.push(dt.cumStr);
    return dt.result;
  }

  if (dt.pointer2 === 0) {

    dt.workingAr = filterArr(dt.str, dt.str[dt.pointer]); //[23]
 
    console.log("working Ar", dt.workingAr, dt.cumStr)

    mainParmGenerator({
       cumStr: dt.str[dt.pointer] + dt.workingAr.join(''),
       result: dt.result,
       n: dt.n,
       workingAr: dt.workingAr,
       k: dt.k,
       pointer: dt.pointer,
       str: dt.str,
       pointer2: dt.pointer2 + 1
    })

  }

}




console.log(genParm(3, 4))
