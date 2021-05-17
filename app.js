const {inputForm, getTitle, getTable} = require('./view')

async function app(billAmount, percentage, tip, total){
    
    // I/O
    console.clear()
    console.log(getTitle())
    getTable(billAmount, percentage, tip, total)
    // FORM (Ask user input)
    const {billAmount2, percentage2} = await inputForm()
    //update(billAmount2, percentage2)
    
    console.log(billAmount2, percentage2)
    //update
    
        
        

}

app(0,0,0,0)

