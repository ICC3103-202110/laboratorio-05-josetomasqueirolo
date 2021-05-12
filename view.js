const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require("inquirer")

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function geTable(model){
    const {billAmmount} = model
    const {percentage} = model
    const {tip} = model
    const {total} = model
    return [
        {
            "Bill Ammount": billAmmount
        },
        {
            "Tip (%)": percentage
        },
        {
            "Tip": tip
        },
        {
            "Total": total
        }
    ]
}

function inputForm(model){
    const {inpit} = model
    const message1 = "Bill ammount?"
    const message2 = "Tip percentage?"
    return inquirer.prompt([
        {
            name: "BILLAMMOUNT",
            type: "input",
            message: message1,
            default: input,
            validate: function(value){
                if(value>0){
                    return true
                } else{
                    return "Enter a valid number"
                }
            }

        },
        {
            name: "PERCENTAGE",
            type: "input",
            message: message2,
            default: input,
            validate: function(value){
                if(value>0){
                    return true
                } else{
                    return "Enter a valid number"
                }
            }
        }
    ])
}

// Get actual console view
function view(model){
    return{
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm,
}
