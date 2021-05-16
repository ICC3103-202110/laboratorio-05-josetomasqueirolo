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

function getTable(model2){
    const {counter} = model2
    const {input} = model2
    /*
    const {billAmmount} = model2
    const {percentage} = model2
    const {tip} = model2
    const {total} = model2
    */
    return [
        {
            "Bill Ammount": billAmmount
        }
    ]
}

function inputForm(model){
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

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    getTitle,
    inputForm
}