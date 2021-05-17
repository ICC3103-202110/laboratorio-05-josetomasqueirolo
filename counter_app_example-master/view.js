const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Counter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {billAmount} = model
    const {percentage} = model
    const {tip} = model
    const {total} = model
    return [
        {"Bill Amount": billAmount, "Tip (%)": percentage, "Tip": tip, "Total": total},
    ]
}

function inputForm(model){
    const {input} = model
    const message1 = 'Bill amount?'
    const message2 = "Tip percentage?"
    return inquirer.prompt([
        {
            name: 'input1',
            type: 'input',
            message: message1,
            default: input,
            validate: function(value){
                if(value>0){
                    return true
                } else {
                    return 'Enter a valid ammount'
                }
            }
        },
        {
            name: 'input2',
            type: 'input',
            message: message2,
            validate: function(value){
                if(value>0 || value<=100){
                    return true
                } else {
                    return 'Enter a valid number'
                }
            }
        }
    ])
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}


module.exports = {
    view, 
    inputForm
}