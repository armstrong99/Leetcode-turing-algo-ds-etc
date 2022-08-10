// using super to avoid constructor repeatation

class Rectangle {
    height: number;
    width: number;
    name: string
    _area: number

    constructor(height: number, width: number) {
        this.height = height
        this.width = width
        this.name = "Rectangle"
    }

    sayName():void{
      console.log(`Your name is ${this.name}`)
    }

    get area():number {
        return this.height * this.width
    }

    set area(value: number) {
        this._area = value
    }

    static logNBSide() {
        console.log("I have 4 side")
    }

}

class Square extends Rectangle {
    constructor(length:number) {
        super(length, length)
        this.name = "Squre"
    }


    //accessing static props with __super__

    static logNSide() {
        console.log(`I av ${super.logNBSide()}`)
    }

    

}