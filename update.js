
function update(input, model){
  const {billAmmount} = model
  const {percentage} = model
  const newBillAccount = input
  return {
    ...model,
    billAmmount: newBillAccount,
    input: input
  }
}

module.exporte = {
  update
}