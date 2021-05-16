const {inputForm, getTitle} = require('./view')

async function app(){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        // I/O
        console.clear()
        console.log(getTitle())
        // FORM (Ask user input)
        const {input} = await inputForm()
        const updatedModel = update(input, model)
        printTable(table)
        
    }
}

app()