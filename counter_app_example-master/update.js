
function tip_per(billAmount, percentage){
    return billAmount*percentage/100
}

function calc_total(billAmount, tip){
    return billAmount+tip
}

function update(input1, input2, model){
    const {billAmount} = model
    const {percentage} = model
    const {tip} = model
    const {total} = model
    const newBillAmount= FUNCTIONS[input1](billAmount)
    const newPercentage= FUNCTIONS[input2](percentage)
    const newTip= tip_per(newBillAmount, newPercentage)
    const newTotal= calc_total(newBillAmount, newTip)
    return {
        ...model,
        billAmount: newBillAmount,
        percentage: newPercentage,
        tip: newTip,
        total:newTotal
    }
}

module.exports = {
    update
}