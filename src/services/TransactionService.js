
// import { store } from "../store/store";

export default class TransactionService {
  
  createTransaction(transaction) {
    console.log('TransactionService: addTransaction: ', transaction);
    // HttpService POST und databaseID in transaction object speichern
    // transaction.id = HTTP.POST.RESPONSE.ID
    
  }

  updateTransaction(transaction) {
    console.log('TransactionService: updateTransaction: ', transaction);
    // transaction.id = HTTP.POST.RESPONSE.ID
    
  }

  removeTransaction(transactionId) {
    // Service remove Transaction
    console.log('TransactionService: removeTransaction with id: ', transactionId);
  }
}

