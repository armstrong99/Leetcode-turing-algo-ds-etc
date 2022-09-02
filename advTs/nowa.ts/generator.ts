function* foo(): Generator<number, string, number> {

    for(const i of [1, 2, 3]) {

        let value = yield i; 
    
        console.log("from gen**", value)
    }

    // yield value

    return "Finished"
}

let inter = foo()

let curr = inter.next()

console.log(curr.value)

let currx = inter.next(6)

console.log(currx)

let currx1 = inter.next(25)

console.log(currx1)

let currx2 = inter.next(12)

console.log(currx2)