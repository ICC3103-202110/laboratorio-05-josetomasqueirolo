const figlet  = require("figlet")
const chalk = require("chalk")

function getTitle(){
    return chalk.green(
        figlet.textSync(
            "Tip Calculetor App",
            {
                horizontalLayout: "full",
                font: "Nancyj-Underlined"
            }
        )
    )
}

module.exports = {
    getTitle
}