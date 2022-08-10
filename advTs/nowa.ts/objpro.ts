/**
 * @Definition - Prototypes are the mechanism by which JavaScript objects inherit features from one another.  
 */

/**
 * @TopicOne: The prototype chain
 */

const myObject = {
    city: "Madrid",
    greet() {
        console.log(`Greeting from city ${this.city}`)
    }
}

myObject.greet()

const armsrongPrototypeObject = {
    callArmstrong() {
        console.log("Call Armstrong")
    }
}

let newMyObject = Object.create(myObject)

// console.log(Object.getPrototypeOf(myObject))


const personPrototype = {
    greet() {
        console.log("I am greeting!!")
    }
}

class PersonA {
    public name:string
    constructor(name:string) {
        this.name = name
     }
}

Object.assign(PersonA.prototype, personPrototype)

const ruben = new PersonA("ArmstrongA")

console.log(Object.getPrototypeOf(ruben))

console.log(Object(ruben).hasOwnProperty("name"))
