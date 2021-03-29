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
  getTransactionFieldRules() {
    return [
      (v) => !!v || 'name of transaction is required!',
      (v) =>
        (v && v.length <= 20) ||
        'Name of Transaction must be less than 20 characters',
    ];
  },
  getAmountFieldRules() {
    return [
      (v) => !!v || 'Amount is required!',
      (v) => (v && v.length <= 7) || 'Amount must be less than 7 digits!',
    ];
  },
  validateTransactionForm(name, amount) {
      if (name == '' || amount == '') {
        return false;
      } 
        return true;
  }
}
