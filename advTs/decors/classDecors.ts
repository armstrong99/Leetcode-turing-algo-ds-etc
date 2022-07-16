// #Class decorators are applied to class definitions in TypeScript, and can observe, modify, or replace the class definition.

// Primarily class decorators are used to add metadata to the class, which will be used by other decorators. But, class decorators can also return a new constructor to override or replace the existing constructor, or class, adding new methods or other behavior.

function logConstructor(constructor: Function): void | any {
  const rect = {
    constructor,
    extensible: Object.isExtensible(constructor),
    frozen: Object.isFrozen(constructor),
    sealed: Object.isSealed(constructor),
    values: Object.values(constructor),
    properties: Object.getOwnPropertyDescriptors(constructor),
    members: {} as { [key: string]: any },
  };

  for (const key of Object.getOwnPropertyNames(constructor.prototype)) {
    rect.members[key] = constructor.prototype[key];
  }

  //console.log("Class decorator example :: ", rect)
}

// decorator factory pattern
function classSlangsWithSurfix(surfix: string) {
  console.log("Current surfix :::appending:-> ", surfix);
  return (target: Function) => {
    //access the class property

    let slangs = target.prototype.slangs;
    console.log(slangs, surfix);
    if (!slangs) {
      target.prototype.slangs = "Mr fresh" + surfix;
    } else {
      console.log(target.prototype.slangs);
      target.prototype.slangs = slangs + surfix;
    }
  };
}

@logConstructor
@classSlangsWithSurfix(", omoGuylish.")
@classSlangsWithSurfix(", MrMoney")
@classSlangsWithSurfix(", E-Money")
class ClassDecorEx {
  slangs: string;

  constructor(x: number, y: number) {
    console.log(`ClassDecoratorExample(${x}, ${y})`);
  }

  method() {
    console.log(`method called`, this.slangs);
  }
}

//new ClassDecorEx(3, 4).method();

// Class Decorator application.


