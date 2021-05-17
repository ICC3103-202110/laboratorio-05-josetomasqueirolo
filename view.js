const {printTable} = require("console-table-printer")
const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')


function getTable(billAmount, percentage, tip, total){
    const table = [
    { "Bill Amount": billAmount, "Tip (%)": percentage, "Tip": tip, "Total": total}
  ];
  
  printTable(table);
}

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


function inputForm(){
    const message1 = 'Bill amount?'
    const message2 = "Tip percentage?"
    return inquirer.prompt([
        {
            name: 'billAmmount',
            type: 'input',
            message: message1,
            validate: function(value){
                if(value>0){
                    return true
                } else {
                    return 'Enter a valid number'
                }
            }
        },
        {
            name: 'percentage',
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

module.exports = {
    getTable,
    getTitle,
    inputForm
}


