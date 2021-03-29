<template>
  <div>
    <v-app-bar app>
      <v-container fill-height fluid>
        <v-row align="start" justify="center">
          <v-col align="start" class="pl-0">
            <v-btn elevation="0">
              <v-icon @click="goBack()">mdi-arrow-left-circle</v-icon>
            </v-btn>
          </v-col>
          <v-col align="center">
            <v-toolbar-title>
              <span class="subtitle-1">
                {{ selectedTransaction.name }}
              </span>
            </v-toolbar-title>
          </v-col>
          <v-col></v-col>
          <!-- <v-col align="end" class="pr-0">
            <v-btn elevation="0" @click="toggleEditMode()">
              <v-icon>mdi-file-document-edit</v-icon>
            </v-btn>
          </v-col> -->
        </v-row>
      </v-container>
    </v-app-bar>

    <v-text-field
      class="mt-3 ml-5 mr-5"
      outlined
      clearable
      label="Transaction"
      :counter="20"
      :rules="transactionFieldRules"
      v-model="selectedTransaction.name"
      :disabled="isNotEditMode"
      required
      @blur="validateForm()"
    ></v-text-field>

    <v-text-field
      class="mt-3 ml-5 mr-5"
      outlined
      clearable
      v-model="selectedTransaction.amount"
      :counter="7"
      :rules="amountFieldRules"
      label="Amount"
      :disabled="isNotEditMode"
      required
      type="number"
      @keydown="validateForm()"
      @keyup="validateForm()"
    ></v-text-field>

    <v-textarea
      dense
      :placeholder="$t('transactionGenerator.placeholder_notes')"
      v-model="selectedTransaction.notes"
      outlined
      class="mt-5 ml-5 mr-5"
      :disabled="isNotEditMode"
    ></v-textarea>
  </div>
</template>

<script>
import utilsMixin from '../../mixins/utilsMixin'
import TransactionService from '../../services/TransactionService'
const transactionService = new TransactionService()
export default {
  name: 'TransactionDetails',
  props: {},
  mixins: [utilsMixin],
  components: {
    // Home,
  },
  data: () => {
    return {
      isValid: false,
      selectedTransaction: null,
      transactionWithInitialState: new Object(),
      isNotEditMode: false,
      transactionFieldRules: utilsMixin.getTransactionFieldRules(),
      amountFieldRules: utilsMixin.getAmountFieldRules(),
    }
  },
  created() {
    this.selectedTransaction = this.$store.getters.selectedTransaction
    Object.assign(this.transactionWithInitialState, this.selectedTransaction)
  },
  methods: {
    goBack() {
      if (JSON.stringify(this.transactionWithInitialState) !== JSON.stringify(this.selectedTransaction)) { 
        this.updateTransaction();
      }

      this.$router.go(-1)
    },
    toggleEditMode() {
      this.isNotEditMode = !this.isNotEditMode
    },
    validateForm() {
      this.isValid = utilsMixin.validateTransactionForm(this.name, this.amount)
    },
    updateTransaction() {
      this.selectedTransaction.amount = parseFloat(
        this.selectedTransaction.amount,
      )
      transactionService.updateTransaction(this.selectedTransaction)
      this.$store.commit('updateTransaction', this.selectedTransaction)
    },
  },
}
</script>

<style scoped>
/deep/ .v-toolbar__content {
  padding: 0px !important;
}
</style>
