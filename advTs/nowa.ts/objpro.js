// /**
//  * @Definition - Prototypes are the mechanism by which JavaScript objects inherit features from one another.  
//  */

// /**
//  * @TopicOne: The prototype chain
//  */

// const myObject = {
//     city: "Madrid",
//     greet() {
//         console.log(`Greeting from city ${this.city}`)
//     }
// }

// myObject.greet()

// const armsrongPrototypeObject = {
//     callArmstrong() {
//         console.log("Call Armstrong")
//     }
// }

// let newMyObject = Object.create(myObject)

// // console.log(Object.getPrototypeOf(myObject))


// const personPrototype = {
//     greet() {
//         console.log("I am greeting!!")
//     }
// }

// class PersonA {
//     public name:string
//     constructor(name:string) {
//         this.name = name
//      }
// }

// Object.assign(PersonA.prototype, personPrototype)

// const ruben = new PersonA("ArmstrongA")

// console.log(Object.getPrototypeOf(ruben))

// console.log(Object(ruben).hasOwnProperty("name"))
// class BaseA {
//     jesu: string
// // }

// class Personal extends BaseA {
//     soul: "string"
//     greet() {
//     console.log("I am Personal Prototype")
//     }
//  }

// class Armstrong  {
//     armsSoul: "stringArm"
// }

// Object.setPrototypeOf(BaseA, Armstrong)

const objx = function() {}

objx.prototype.getSmall = function() {}

let obj1 = new objx()
let obj2 = new objx()

console.log(Object.getPrototypeOf(obj2))

// console.log((objx.prototype.constructor))
