<template>
<div> <!-- single root element here -->

    <div v-for="transaction in transactions " :key="transaction.id">
     <Transaction :transaction="transaction"/>
    </div>

  </div>
   
</template>

<script>
/* eslint-disable vue/no-unused-components */

import Transaction from '../components/Transaction'
// import TransactionService from '../services/TransactionService'


export default {
  name: 'Transactions',
  props: {
      transactions: Array
  },
  components: {
    Transaction
  },
  created() {
    this.transactions = [
      { id: 1, title: 'transaction 1', amount: 10},
      { id: 2, title: 'transaction 2', amount: 30},
      { id: 3, title: 'transaction 3', amount: 60}
    ]
  }
}
</script>

<style></style>
