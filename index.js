const TICKET_PRICE = 25

export const tickets = (bills) => {
  let register = []
  let hasChange = true

  for (const bill of bills) {
    if (bill === TICKET_PRICE) register.push(bill)
    else {
      let change = 0

      register = register.filter((sum) => {
        if (change < bill - TICKET_PRICE) {
          change += sum
        } else {
          return true
        }
      })

      if (change < bill - TICKET_PRICE) {
        hasChange = false
        break
      }

      if (bill - change) register.push(bill - change)
    }
  }

  return hasChange
}
