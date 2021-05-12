const {getTitle} = require("./view2")

//Impure
function app(state, update, view){
    console.clear()
    console.log(getTitle())
}

module.exports = {
    app
}