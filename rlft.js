(() => {
  let user = {
      _name: "Armstrong",
      get name() {
          return this._name
      }
  };

  let userProxy = new Proxy(user, {
      get(target, prop, reciever) {
          return target[prop]
      }
  })

  let admin = {
      __proto__: userProxy,
      _name: "Admin Boss"
  }


  console.log(admin.name)
  console.log(userProxy.name)
})()