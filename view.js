const figlet = require('figlet')
const chalk = require('chalk')

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

}
module.exports = {
    getTitle
}