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
          <v-col>
            <v-toolbar-title v-if="transaction">
              {{ transaction }}
            </v-toolbar-title>
            <v-toolbar-title v-else>
              {{ $t('transactionGenerator.lbl_title') }}
            </v-toolbar-title>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="transaction"
          :counter="20"
          :rules="transactionFieldRules"
          label="Transaction"
          required
        ></v-text-field>

        <v-text-field
          v-model="amount"
          :counter="7"
          :rules="amountFieldRules"
          label="Amount"
          required
          type="number"
        ></v-text-field>

        <v-select
          v-model="category"
          :items="categoryArray"
          :label="$t('general.lbl_categories')"
        ></v-select>

        <v-textarea
          v-model="notes"
          outlined
          name="input-7-4"
          :label="$t('general.lbl_notes')"
          value=""
        ></v-textarea>
      </v-form>

      <div align="end">
        <v-btn
          depressed
          color="primary"
          class="ml-5"
          @click="saveTransaction()">
          {{ $t('general.btn_save') }}
        </v-btn>
        <v-btn 
        depressed 
        @click="reset()">{{ $t('general.btn_reset') }}</v-btn>
      </div>
    </v-container>

  </div>
</template>

<script>
export default {
  name: 'TransactionGenerator',
  props: {},
  components: {
    // Home,
  },
  data: () => {
    return {
      transaction: '',
      amount: null,
      category: '',
      notes: '',
      categoryArray: [],
      valid: true,
      transactionFieldRules: [
        (v) => !!v || 'Name of Transaction is required!',
        (v) =>
          (v && v.length <= 20) ||
          'Name of Transaction must be less than 20 characters',
      ],
      amountFieldRules: [
        (v) => !!v || 'Amount of Transaction is required!',
        (v) => (v && v.length > 0) || 'Amount must not be zero!',
        (v) => (v && v.length <= 7) || 'Amount must be less than 7 digits!',
      ],
    }
  },
  created() {
    this.categoryArray = this.$store.getters.categoryArray
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    reset() {
      this.$refs.form.reset()
    },
    saveTransaction() {
      console.log(this.transaction + '| ' + this.category + '| ' + this.amount + '| ' + this.notes)
    }
  },
}
</script>

<style scoped>
/deep/ .v-toolbar__content {
  padding: 0px !important;
}
</style>
