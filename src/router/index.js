import Vue from "vue";
import VueRouter from "vue-router";
import TransactionList from "../views/Transaction/TransactionList.vue";
import TransactionDetails from "../views/Transaction/TransactionDetails";
import TransactionGenerator from "../views/Transaction/TransactionGenerator";
import Summary from "../views/Summary.vue";
import Settings from "../views/SettingsView/Settings.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", component: TransactionList },
  { path: "/transactions", component: TransactionList },
  { path: "/transactions/create/:moneyType", component: TransactionGenerator },
  { path: "/transaction/details/:id", component: TransactionDetails },
  { path: "/summary", component: Summary },
  { path: "/settings", component: Settings },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
