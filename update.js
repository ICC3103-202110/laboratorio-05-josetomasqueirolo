
function tip_per(billAmount, percentage){
    return (billAmount*percentage)/100
}

function calc_total(billAmount, tip){
    return parseInt(billAmount) + parseInt(tip)
}

function update(input1, input2, model){
    const {billAmount} = model
    const {percentage} = model
    const {tip} = model
    const {total} = model
    const newBillAmount= input1
    const newPercentage= input2
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