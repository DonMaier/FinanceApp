
import { store } from "../store/store";

export default class TransactionService {
  
  createTransaction(transaction) {
    console.log('TransactionService: addTransaction');
    // HttpService POST und databaseID in transaction object speichern
    // transaction.id = HTTP.POST.RESPONSE.ID
    store.commit('addTransaction', transaction);
    store.commit('setTaskCreated', true);
  }
}

