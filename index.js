//const {update} = require("./update")
//const {view} = require("./view")
const {app} = require("./app")
const {initModel} = require("./model")

const state = {
    model: initModel,
    //currentView: view(initModel)
}

app(state, true, true)