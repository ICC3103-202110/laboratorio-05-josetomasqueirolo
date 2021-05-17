function update(billAmount,percentage){
    const {tip} = billAmount*percentage/100
    const {total} = billAmount+tip
    return {
        tip,
        total
    }
}

console.log(update(100,10))

module.exports = {
    update
}