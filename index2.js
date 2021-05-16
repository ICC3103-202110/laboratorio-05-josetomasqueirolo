const {initModel} = require("./model")
// const {update} = require("./update")
const {view} = require("./view2")
const {app} = require("./app2")

const state = {
    model: initModel,
    currentView: view(initModel)
}

app(state, true, view)