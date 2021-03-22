import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    transactionArray: [
      {
        id: 1,
        title: "Gehalt BMW",
        amount: 135.5,
        category: "Salary",
        categoryIcon: "mdi-account-cash",
        notes: "notes blabla",
        isPositive: true,
        created_at: "01.03.2020",
      },
      {
        id: 2,
        title: "Döner Kebap",
        amount: 30,
        category: "Food",
        categoryIcon: "mdi-food-variant",
        notes: "",
        isPositive: false,
        created_at: "03.03.2020",
      },
      {
        id: 3,
        title: "Jeans",
        amount: 60,
        category: "Clothes",
        categoryIcon: "mdi-tshirt-crew",
        notes: "",
        isPositive: false,
        created_at: "05.03.2020",
      },
      {
        id: 4,
        title: "Chinesisch",
        amount: 10,
        category: "Food",
        categoryIcon: "mdi-food-variant",
        notes: "",
        isPositive: false,
        created_at: "06.03.2020",
      },
      {
        id: 5,
        title: "Red Bull",
        amount: 5.5,
        category: "Food",
        categoryIcon: "mdi-food-variant",
        notes: "",
        isPositive: false,
        created_at: "07.03.2020",
      },
    ],
    selectedTransaction: {
      id: 0,
      title: "",
      amount: 0,
      category: "",
      categoryIcon: "",
      notes: "",
      created_at: "",
    },
    categoryArray: ["Salary", "Food", "Clothes"],
  },
  mutations: {
    setTransactionArray(state, transactionArray) {
      state.transActionArray = transactionArray;
    },
    setSelectedTransaction(state, selectedTransaction) {
      state.selectedTransaction = selectedTransaction;
    },
    addCategory(state, category) {
      state.categoryArray = state.categoryArray.push(category);
    },
  },
  getters: {
    transactionArray: (state) => state.transactionArray,
    selectedTransaction: (state) => state.selectedTransaction,
    categoryArray: (state) => state.categoryArray,
  },
});
