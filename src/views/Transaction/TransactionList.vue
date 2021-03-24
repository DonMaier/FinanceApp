<template>
  <div>
    <TransactionsFilterNavDrawer v-model="filterDrawer" />
    <v-app-bar app>
      <v-container>
        <v-row align="start" justify="center">
          <v-col align="start" class="pl-0">
            <v-btn elevation="0">
              <v-icon @click="openFilterDrawer()">mdi-filter</v-icon>
            </v-btn>
          </v-col>
          <v-col align="center" justify="start">
            <div class="caption">{{ $t('transactions.lbl_total_amount') }}</div>
            <div
              id="totalAmount"
              class="subtitle-1"
              :class="setClassBasedOnAmount(totalAmount)"
            >
              {{ formatFloatToEuroCurrency(this.totalAmount) }}
            </div>
          </v-col>
          <v-col align="end" class="pr-0">
            <v-btn elevation="0">
              <v-icon @click="createNewTransaction()">mdi-account</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-virtual-scroll
      height="490px"
      item-height="60"
      :items="transactionArray"
      class="padding-zero"
    >

      <template v-slot:default="{ item }">
        <Transaction :transaction="item" :key="item.title" />
        <v-divider :key="'divider-' + item.title"></v-divider>
      </template>

    </v-virtual-scroll>
    <footer>
      <v-row>
        <v-col cols="5"></v-col>
        <v-col class="text-right">
          <v-fab-transition>
            <v-btn
              color="#dc143c"
              dark
              fab
              @click="createNewTransaction('expense')"
            >
              <v-icon>mdi-minus-thick</v-icon>
            </v-btn>
          </v-fab-transition>
        </v-col>
        <v-col class="text-left mr-">
          <v-fab-transition>
            <v-btn
              color="#228b22"
              dark
              fab
              @click="createNewTransaction('income')"
            >
              <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
          </v-fab-transition>
        </v-col>
      </v-row>
    </footer>

    <v-snackbar :timeout="1500" v-model="snackbar" color="green">
      {{ snackbarContent }}
    </v-snackbar>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import TransactionsFilterNavDrawer from '../../components/TransactionsFilterNavDrawer'
import Transaction from '../../components/Transaction'
import utilsMixin from '../../mixins/utilsMixin'
// import TransactionService from '../services/TransactionService'

export default {
  name: 'TransactionList',
  props: {},
  data: () => ({
    snackbar: false,
    snackbarContent: 'Task created.',
    filterDrawer: false,
    icon: 'mdi-airplane',
    selectedItem: null,
    totalAmount: 0,
  }),
  components: {
    Transaction,
    TransactionsFilterNavDrawer,
  },
  mixins: [utilsMixin],
  created() {
    console.log('Transactions --> created')
    if (this.$store.getters.taskCreated == true) {
      this.showSnackbar()
    }
    this.transactionArray = this.$store.getters.transactionArray
    this.totalAmount = this.calcTotalAmount(this.transactionArray)
  },
  methods: {
    createNewTransaction(moneyType) {
      this.$router.push(`transactions/create/${moneyType}`)
    },
    setClassBasedOnAmount(amount) {
      switch (Math.sign(amount)) {
        case 1:
          return 'income'
        case -1:
          return 'expense'
        default:
          return 'neutral'
      }
    },
    openFilterDrawer() {
      console.log('filterDrawer')
      this.filterDrawer = !this.filterDrawer
    },
    showSnackbar() {
      this.snackbar = true
      this.$store.commit('setTaskCreated', false)
    },
  },
}
</script>

<style scoped>
#totalAmount {
  line-height: 1;
}
footer {
  background-color: #ffffff;
  position: fixed;
  bottom: 54px;
  padding-bottom: 5px;
  width: 100%;
}

.padding-zero {
  padding: 0px;
}

.income {
  color: #228b22;
}

.expense {
  color: #dc143c;
}

.neutral {
  color: #696969;
}

.add-btn {
  size: 20px;
  float: right;
}

/deep/ .v-toolbar__content {
  padding: 0px !important;
}
</style>
