const {printTable} = require("console-table-printer")
const figlet = require('figlet')
const chalk = require('chalk')


function getTable(billAmount, percentage){
    const table = [
    { "Bill Amount": billAmount, "Tip (%)": percentage, "Tip": billAmount/percentage, "Total": billAmount+billAmount/percentage}
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

module.exports = {
    getTable,
    getTitle
}