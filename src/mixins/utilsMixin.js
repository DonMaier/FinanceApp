export default {
  methods: {
    formatFloatToEuroCurrency(number) {
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(number)
    },
    calcTotalAmount(transactionArray) {
      console.log(transactionArray);
      let positiveAmount = 0;
      let negativeAmount = 0;
      let totalAmount = 0;
      transactionArray.forEach((transaction) => {
        // console.log(transaction.amount);
        if (transaction.isPositive) {
          
          positiveAmount += transaction.amount
        } else {
          negativeAmount += transaction.amount
        }
        totalAmount = positiveAmount - negativeAmount
      })
      // console.log('totalAmount: ', totalAmount);
      return totalAmount;
    }
  },
}
