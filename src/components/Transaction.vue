<template>
  <v-list-item class="list-item" @click="showDetailsView()">
    <v-list-item-avatar>
      <v-icon class="grey lighten-1" dark>
        {{ transaction.category.icon }}
      </v-icon>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title v-text="transaction.title"></v-list-item-title>
      <v-list-item-subtitle>{{ transaction.created_at }}</v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <v-list-item-title
        v-text="formatFloatToEuroCurrency(transaction.amount)"
      ></v-list-item-title>
      <v-list-item-title v-if="transaction.isPositive" class="income">{{ $t('transaction.lbl_income') }}</v-list-item-title>
      <v-list-item-title v-else class="expense"> {{ $t('transaction.lbl_expense') }}</v-list-item-title>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import utilsMixin from '../mixins/utilsMixin'

export default {
  name: 'Transaction',
  props: {
    transaction: {
      id: Number,
      title: String,
      amount: Number,
    },
  },
  components: {
    // Home,
  },
  mixins: [utilsMixin],
  data: () => ({}),
  methods: {
    showDetailsView() {
      this.$store.commit('setSelectedTransaction', this.transaction)
      this.$router.push(`transaction/details/${this.transaction.id}`)
      // this.$router.push('summary');
    },
    isPositive(transaction) {
      if(transaction.isPositive) {
        return 'income';
      } 
      return 'expense';
    }
  },
}
</script>

<style scoped>
.list-item {
  border-bottom: 1px;
}

.income {
  color: #228B22
}

.expense {
  color: #DC143C
}
.padding-zero {
  padding: 0px;
}

.list-item {
  padding:0
}

</style>
