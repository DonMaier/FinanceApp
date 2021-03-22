<template>
  <div>
    <v-app-bar app>
      <v-container fill-height fluid>
        <v-row align="start" justify="center">
          <v-col align="start" class="pl-0">
            <v-btn elevation="0">
              <v-icon> mdi-filter </v-icon>
            </v-btn>
          </v-col>
          <v-col align="center" justify="start">
            <div class="caption"> {{ $t('transactions.lbl_total_amount') }} </div>
            <div
              id="totalAmount"
              class="subtitle-1"
              :class="setClassBasedOnAmount(totalAmount)"
            >
              {{ this.formatFloatToEuroCurrency(this.totalAmount) }}
            </div>
          </v-col>
          <v-col align="end" class="pr-0">
            <v-btn elevation="0">
              <v-icon @click="goToTransactionView()">mdi-plus-circle</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-list dense>
      <v-list-item-group v-model="selectedItem" color="primary">
        <template v-for="transaction in transactionArray">
          <Transaction :transaction="transaction" :key="transaction.id" />
          <v-divider :key="transaction.title"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import Transaction from "../../components/Transaction";
// import TransactionService from '../services/TransactionService'

export default {
  name: "Transactions",
  props: {},
  data() {
    return {
      icon: "mdi-airplane",
      selectedItem: null,
      totalAmount: 0,
    };
  },
  components: {
    Transaction,
  },
  created() {
    this.transactionArray = this.$store.getters.transactionArray;
    this.calcTotalAmount();
  },
  methods: {
    calcTotalAmount() {
      let positiveAmount = 0;
      let negativeAmount = 0;
      this.transactionArray.forEach((transaction) => {
        if (transaction.isPositive) {
          positiveAmount += transaction.amount;
        } else {
          negativeAmount += transaction.amount;
        }
        this.totalAmount = positiveAmount - negativeAmount;
      });
    },
    formatFloatToEuroCurrency(number) {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(number);
    },
    goToTransactionView() {
      this.$router.push("transactions/create");
    },
    setClassBasedOnAmount(amount) {
      switch (Math.sign(amount)) {
        case 1:
          return "income";
        case -1:
          return "expense";
        default:
          return "neutral";
      }
    },
  },
};
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
