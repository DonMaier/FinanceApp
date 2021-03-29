import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    localeDateString: 'de-DE',
    totalAmount: 0,
    transactionArray: [
      {
        id: 1,
        name: 'Gehalt BMW',
        amount: 135.5,
        category: {
          id: 1,
          name: 'home',
          icon: 'mdi-home',
        },
        notes: 'notes blabla',
        isPositive: true,
        created_at: '01.03.2020',
      },
      {
        id: 2,
        name: 'Auto',
        amount: 30,
        category: {
          id: 2,
          name: 'car',
          icon: 'mdi-car',
        },
        notes: '',
        isPositive: false,
        created_at: '03.03.2020',
      },
      {
        id: 3,
        name: 'Döner Kebap',
        amount: 7,
        category: {
          id: 3,
          name: 'food',
          icon: 'mdi-food',
        },
        notes: '',
        isPositive: false,
        created_at: '05.03.2020',
      },
      {
        id: 4,
        name: 'Chinesisch',
        amount: 10,
        category: {
          id: 3,
          name: 'food',
          icon: 'mdi-food',
        },
        notes: '',
        isPositive: false,
        created_at: '06.03.2020',
      },
      {
        id: 5,
        name: 'Red Bull',
        amount: 5.5,
        category: {
          id: 3,
          name: 'food',
          icon: 'mdi-food',
        },
        notes: '',
        isPositive: false,
        created_at: '07.03.2020',
      },
      {
        id: 6,
        name: 'Chinesisch',
        amount: 10,
        category: {
          id: 3,
          name: 'food',
          icon: 'mdi-food',
        },
        notes: '',
        isPositive: false,
        created_at: '06.03.2020',
      },
      {
        id: 7,
        name: 'Red Bull',
        amount: 5.5,
        category: {
          id: 3,
          name: 'food',
          icon: 'mdi-food',
        },
        notes: '',
        isPositive: false,
        created_at: '07.03.2020',
      },
      {
        id: 9,
        name: 'Chinesisch',
        amount: 10,
        category: {
          id: 3,
          name: 'food',
          icon: 'mdi-food',
        },
        notes: '',
        isPositive: false,
        created_at: '06.03.2020',
      },
      {
        id: 10,
        name: 'Red Bull',
        amount: 5.5,
        category: {
          id: 3,
          name: 'food',
          icon: 'mdi-food',
        },
        notes: '',
        isPositive: false,
        created_at: '07.03.2020',
      },
    ],
    selectedTransaction: {
      id: 0,
      name: '',
      amount: 0,
      category: '',
      categoryIcon: '',
      notes: '',
      created_at: '',
    },
    posCategoryArray: [
      {
        id: 1,
        name: 'Savings',
        icon: 'mdi-home',
      },
      {
        id: 2,
        name: 'car',
        icon: 'mdi-car',
      },
      {
        id: 3,
        name: 'food',
        icon: 'mdi-food',
      },
      {
        id: 4,
        name: 'transportation',
        icon: 'mdi-train-car',
      },
    ],
    negCategoryArray: [
      {
        id: 1,
        name: 'home',
        icon: 'mdi-home',
      },
      {
        id: 2,
        name: 'car',
        icon: 'mdi-car',
      },
      {
        id: 3,
        name: 'food',
        icon: 'mdi-food',
      },
      {
        id: 4,
        name: 'transportation',
        icon: 'mdi-train-car',
      },
      {
        id: 5,
        name: 'dinner',
        icon: 'mdi-silverware-fork-knife',
      },
      {
        id: 6,
        name: 'enternainment',
        icon: 'mdi-theater',
      },
      {
        id: 7,
        name: 'clothes',
        icon: 'mdi-tshirt-crew',
      },
    ],
    taskCreated: 'false',
  },
  mutations: {
    setLocaleDateString(state, localeDateString) {
      state.localeDateString = localeDateString
    },
    setTransactionArray(state, transactionArray) {
      state.transActionArray = transactionArray
    },
    updateTransaction(state, transaction) {
      var indexOfUpdateObject = state.transactionArray
      .map((transaction) => transaction.id)
      .indexOf(transaction.id);

      state.transactionArray[indexOfUpdateObject].name = transaction.name;
      state.transactionArray[indexOfUpdateObject].amount = transaction.amount;
      state.transactionArray[indexOfUpdateObject].notes = transaction.notes; 
    },
    removeTransaction(state, transactionId) {
      var removeIndex = state.transactionArray
        .map((transaction) => transaction.id)
        .indexOf(transactionId)
      ~removeIndex && state.transactionArray.splice(removeIndex, 1)
    },
    setSelectedTransaction(state, selectedTransaction) {
      state.selectedTransaction = selectedTransaction
    },
    addTransaction(state, transaction) {
      state.transactionArray.push(transaction)
    },
    addCategory(state, category) {
      state.categoryArray.push(category)
    },
    setTaskCreated(state, bool) {
      state.taskCreated = bool
    },
  },
  actions: {
    addTransaction() {
      this.commit('addTransaction');
    }
  },
  getters: {
    localeDateString: (state) => state.localeDateString,
    totalAmount: state => {
      console.log(state.transactionArray)
      let positiveAmount = 0
      let negativeAmount = 0
      let totalAmount = 0
      state.transactionArray.forEach((transaction) => {
        // console.log(transaction.amount);
        if (transaction.isPositive) {
          positiveAmount += transaction.amount
        } else {
          negativeAmount += transaction.amount
        }
        totalAmount = positiveAmount - negativeAmount
      })
      return totalAmount
    },
    transactionArray: (state) => state.transactionArray,
    selectedTransaction: (state) => state.selectedTransaction,
    posCategoryArray: (state) => state.posCategoryArray,
    negCategoryArray: (state) => state.negCategoryArray,
    taskCreated: (state) => state.taskCreated,
  },
})
