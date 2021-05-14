const figlet = require("figlet")
const chalk = require("chalk")
const inquirer = require("inquirer")

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Bill Calculator App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {billAmmount} = model
    const {percentage} = model
    const {tip} = model
    const {total} = model
    return [
        {
            "Bill Ammount": billAmmount
        }
    ]
}

function valueInput(model){
    const {input} = model
    const message = "Bill ammount?"
    return inquirer.prompt([
        {
            name: "billAmmount",
            type: "input",
            message: message,
            default: input,
            validate: function(value){
                if(value>0){
                    return true
                } else {
                    return "Enter a valid number"
                }
            }
        }
    ])
}

module.exports = {
    getTitle
}