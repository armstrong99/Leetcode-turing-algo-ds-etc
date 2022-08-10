//Single Responsibilty Principle

//Principle states that a class should have only one responsibilty

/**
 * @anti-pattern 
 * @God class
 */

class Person {
    public name: string
    public surname: string
    public email: string

    constructor(name:string, surname:string, email:string) {
        this.name = name
        this.surname = surname
        if(this.validateEmail(email)) {
            this.email = email
         }

     }

    validateEmail(email:string) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }
}


class SolidPerson {
    public name: string
    public surname: string
    public email: string

    constructor(name:string, surname:string, email:string) {
        this.name = name
        this.surname = surname
        this.email = email
      }

}

class Email {
    public email : string;
    constructor(email : string){
        if(this.validateEmail(email)) {
          this.email = email;
        }
        else {
            throw new Error("Invalid email!");
        }        
    }
    validateEmail(email : string) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }
}