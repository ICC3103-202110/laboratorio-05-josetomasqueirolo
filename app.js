const {inputForm} = require("./view")
const {printTable} = require("console-table-printer")

async function app(state, update, view){
    const {model, currentView} = state
    const {title, table} = currentView
    // I/O
    console.clear()
    console.log(title)
    printTable(table)
    // FORM (Ask user input)
    const {input} = await inputForm(model)
    console.log(input)
}

module.exports = {
    app
}
