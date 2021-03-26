import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    localeDateString: 'de-DE',
    transactionArray: [
      {
        id: 1,
        title: 'Gehalt BMW',
        amount: 135.5,
        category: {
          id: 1,
          title: 'home',
          icon: 'mdi-home',
        },
        notes: 'notes blabla',
        isPositive: true,
        created_at: '01.03.2020',
      },
      {
        id: 2,
        title: 'Auto',
        amount: 30,
        category: {
          id: 2,
          title: 'car',
          icon: 'mdi-car',
        },
        notes: '',
        isPositive: false,
        created_at: '03.03.2020',
      },
      {
        id: 3,
        title: 'Döner Kebap',
        amount: 7,
        category: {
          id: 3,
          title: 'food',
          icon: 'mdi-food',
        },
        notes: '',
        isPositive: false,
        created_at: '05.03.2020',
      },
      {
        id: 4,
        title: 'Chinesisch',
        amount: 10,
        category: {
          id: 3,
          title: 'food',
          icon: 'mdi-food',
        },
        notes: '',
        isPositive: false,
        created_at: '06.03.2020',
      },
      {
        id: 5,
        title: 'Red Bull',
        amount: 5.5,
        category: {
          id: 3,
          title: 'food',
          icon: 'mdi-food',
        },
        notes: '',
        isPositive: false,
        created_at: '07.03.2020',
      },
    ],
    selectedTransaction: {
      id: 0,
      title: '',
      amount: 0,
      category: '',
      categoryIcon: '',
      notes: '',
      created_at: '',
    },
    posCategoryArray: [
      {
        id: 1,
        title: 'Savings',
        icon: 'mdi-home',
      },
      {
        id: 2,
        title: 'car',
        icon: 'mdi-car',
      },
      {
        id: 3,
        title: 'food',
        icon: 'mdi-food',
      },
      {
        id: 4,
        title: 'transportation',
        icon: 'mdi-train-car',
      },
      // {
      //   id: 11,
      //   title: 'phone',
      //   icon: 'mdi-cellphone'
      // }
    ],
    negCategoryArray: [
      {
        id: 1,
        title: 'home',
        icon: 'mdi-home',
      },
      {
        id: 2,
        title: 'car',
        icon: 'mdi-car',
      },
      {
        id: 3,
        title: 'food',
        icon: 'mdi-food',
      },
      {
        id: 4,
        title: 'transportation',
        icon: 'mdi-train-car',
      },
      {
        id: 5,
        title: 'dinner',
        icon: 'mdi-silverware-fork-knife',
      },
      {
        id: 6,
        title: 'enternainment',
        icon: 'mdi-theater',
      },
      {
        id: 7,
        title: 'clothes',
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
    removeTransaction(state, transactionId) {
      var removeIndex = state.transactionArray.map((transaction) => transaction.id).indexOf(transactionId)
      ~removeIndex && state.transactionArray.splice(removeIndex, 1);
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
  getters: {
    localeDateString: (state) => state.localeDateString,
    transactionArray: (state) => state.transactionArray,
    selectedTransaction: (state) => state.selectedTransaction,
    posCategoryArray: (state) => state.posCategoryArray,
    negCategoryArray: (state) => state.negCategoryArray,
    taskCreated: (state) => state.taskCreated,
  },
})
