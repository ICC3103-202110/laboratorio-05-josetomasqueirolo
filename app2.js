const {getTitle} = require("./view2")
const {inputForm} = require("./view2")
const {printTable} = require("console-table-printer")

//Impure
async function app(state, update, view){
    const {model, currentView} = state
    const {title, table} = currentView
    // I/O
    console.clear()
    console.log(title)
    printTable(table)
    // FORM (Ask user)
    const {input} = await inputForm(model)
    console.log(input)
}

module.exports = {
    app
}