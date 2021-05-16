const {printTable} = require("console-table-printer")
const chalk = require("chalk");
const { builtinModules } = require("node:module");

function getTable(billAmount, percentage){
    const table = [
    { "Bill Amount": billAmount, "Tip (%)": percentage, "Tip": billAmount/percentage, "Total": billAmount+billAmount/percentage}
  ];
  
  printTable(table);
}


module.exports = {
    getTable
}