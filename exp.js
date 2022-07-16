const http = require("http")
const url  = require("url")
const stringDecoder = require("string_decoder").StringDecoder;

const server = http.createServer((req, res) => {

    let parseUrl = url.parse(req.url, true)

    let path = parseUrl.pathname

    // let trimmedPath = path.replace()

    // get query strng

    let queryStringObj = parseUrl.query;
 
    //  get the headers
    let headers = req.headers
    // res.end("hello world")

    // parse payloads
    var decoder = new stringDecoder("utf-8")

    let buffer = "";

    req.on("data", (data) => {
        buffer +=decoder.write(data);
    })

    req.on("end", () => {
        buffer += decoder.end()

        res.end("hello world")

        console.log(buffer)

    })




    let method = req.method.toLowerCase() 
    // console.log(path, method, JSON.stringify(headers))

    
 
})



server.listen(3310, () => {
console.log("server is listening on port 3310")
})

// Define a request router
let handlers = {
}

handlers.sample = (data, cbk)  => {
     cbk(406, {name: "sample handler"})
}

handlers.notFound = (data,cbk) => {
    cbk(404)
}

let router = {
    "sample": handlers.sample
}