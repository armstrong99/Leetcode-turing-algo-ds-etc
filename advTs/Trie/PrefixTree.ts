let strategyMap = [
    {
        "startDay": new Date().getDay() - 2,
        "endDay": new Date().getDay() - 1,
        strategy: function () {
            //do this
        }
    },
    {
        "startDay": new Date().getDay() - 4,
        "endDay": new Date().getDay() - 3,
        strategy: function () {
            //do this
        }
    }
]
 
function exectuteStratgey() {
    let today = new Date().getDay()

    let toBeExecuted = strategyMap.filter((strategy) => strategy.startDay === today)

    toBeExecuted.forEach(val => {
        val.strategy()
    })
}


let timeOutId = setTimeout(() => {
    exectuteStratgey()
}, 1000)
