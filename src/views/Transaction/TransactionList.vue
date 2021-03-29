<template>

  <div>
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
              :class="setClassBasedOnAmount($store.getters.totalAmount)"
            >
              {{ formatFloatToEuroCurrency($store.getters.totalAmount) }}
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
   <div>
      <div id="top">
        <virtual-list
          id="list"
          :data-key="'name'"
          :data-sources="transactionArray"
          :data-component="transaction"
          :estimated-size="60"
          :style="{  height: listHeight + 'px' }"
        >
        </virtual-list >
      </div>

       <footer>
        <v-row>
          <v-col></v-col>
          <v-col class="pr-0">
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
          <v-col class="pl-0">
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
          <v-col></v-col>
        </v-row>
      </footer>
   </div>
    
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
import VirtualList from 'vue-virtual-scroll-list'
// import TransactionService from '../services/TransactionService'

export default {
  name: 'TransactionList',
  props: {},
  data: () => ({
    listHeight: Number,
    transaction: Transaction,
    snackbar: false,
    snackbarContent: 'Task created.',
    filterDrawer: false,
    icon: 'mdi-airplane',
  }),
  components: {
    // Transaction,
    TransactionsFilterNavDrawer,
    'virtual-list': VirtualList
  },
  mixins: [utilsMixin],
  created() {
    this.setListHeight();
    this.totalAmount = this.$store.getters.totalAmount
    this.transactionArray = this.$store.getters.transactionArray
    if (this.$store.getters.taskCreated == true) {
      console.log('Transactions --> created')
      this.showSnackbar()
    }
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
    setListHeight() {
      this.listHeight = window.innerHeight - 175;
    }
  },
}
</script>

<style scoped>

#totalAmount {
  line-height: 1;
}

.top {
  background-color: yellow;
}

footer {
 background-color: #ffffff;
  position: fixed;
  bottom: 54px;
  padding-top: 5px;
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

.row-list {
  background-color: blue;
  max-height: 50%;
}

#list {
  overflow-y: auto;
}

/deep/ .v-toolbar__content {
  padding: 0px !important;
}
</style>
