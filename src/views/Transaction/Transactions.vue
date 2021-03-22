<template>
  <div>
    <v-app-bar app>
      <v-container fill-height fluid>
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
              :class="setClassBasedOnAmount(totalAmount)">
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

    <TransactionsFilterNavDrawer v-model="filterDrawer" />

    <v-list dense>
      <v-list-item-group v-model="selectedItem" color="primary">
        <template v-for="transaction in transactionArray">
          <Transaction :transaction="transaction" :key="transaction.id" />
          <v-divider :key="transaction.title"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>

  <div align="center">

        <v-fab-transition>
          <v-btn color="#dc143c" dark fab class="mr-10" @click="createNewTransaction('expense')">
            <v-icon>mdi-minus-thick</v-icon>
          </v-btn>
        </v-fab-transition>
      
        <v-fab-transition>
          <v-btn color="#228b22" dark fab @click="createNewTransaction('income')">
            <v-icon>mdi-plus-thick</v-icon>
          </v-btn>
        </v-fab-transition>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import TransactionsFilterNavDrawer from '../../components/TransactionsFilterNavDrawer'
import Transaction from '../../components/Transaction'
import utilsMixin from '../../mixins/utilsMixin'
// import TransactionService from '../services/TransactionService'

export default {
  name: 'Transactions',
  props: {},
  data: () => ({
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
    this.transactionArray = this.$store.getters.transactionArray
    this.calcTotalAmount()
  },
  methods: {
    calcTotalAmount() {
      let positiveAmount = 0
      let negativeAmount = 0
      this.transactionArray.forEach((transaction) => {
        if (transaction.isPositive) {
          positiveAmount += transaction.amount
        } else {
          negativeAmount += transaction.amount
        }
        this.totalAmount = positiveAmount - negativeAmount
      })
    },
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
  },
}
</script>

<style scoped>
/deep/ .v-toolbar__content {
  padding: 0px !important;
}
#totalAmount {
  line-height: 1;
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
</style>
