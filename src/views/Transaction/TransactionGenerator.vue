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
            <!-- <v-toolbar-title v-if="name">
              {{ name }}
            </v-toolbar-title> -->
            <v-toolbar-title>
              <span class="subtitle-1">
{{ $t('transactionGenerator.lbl_name') }}
              </span>
              
            </v-toolbar-title>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          autofocus
          outlined
          clearable
          v-model="name"
          :counter="20"
          :rules="transactionFieldRules"
          label="Transaction"
          required
          @keydown="validateForm()"
          @keyup="validateForm()"
          @blur="setFocusOnAmount()"
        ></v-text-field>

        <v-text-field
          outlined
          clearable
          ref="amount"
          v-model="amount"
          :counter="7"
          :rules="amountFieldRules"
          label="Amount"
          required
          type="number"
          @keydown="validateForm()"
          @keyup="validateForm()"
        ></v-text-field>

        <v-textarea
          class="mt-5"
          v-model="notes"
          auto-grow
          outlined
          rows="1"
          row-height="15"
          :label="$t('general.lbl_notes')"
          value=""
        ></v-textarea>
      </v-form>

      <v-container>
        <v-row>
          <v-col v-for="category in categoryArray" :key="category.id" cols="4">
            <div class="icon-border">
              <v-icon
                size="25"
                @click="createTransaction(category.id)"
                :disabled="!isValid"
              >
                {{ category.icon }}
              </v-icon>
              <br />
              <span class="caption">{{ category.name }}</span>
            </div>
          </v-col>
          <v-col style="text-align: center;" cols="4">
            <v-icon size="40" class="add-btn mt-1">mdi-plus-circle</v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import utilsMixin from '../../mixins/utilsMixin'
import TransactionService from '../../services/TransactionService'
const transactionService = new TransactionService()

export default {
  name: 'TransactionGenerator',
  props: {},
  mixins:[utilsMixin],
  components: {
    // Home,
  },
  data: () => {
    return {
      moneyType: '',
      isValid: false,
      createdAt: null,
      name: '',
      amount: '',
      category: '',
      notes: '',
      isPositive: true,
      categoryArray: [],
      created_at: new Date().toString(),
      valid: false,
      transactionFieldRules: utilsMixin.getTransactionFieldRules(),
      amountFieldRules: utilsMixin.getAmountFieldRules(),
    }
  },
  created() {
    this.moneyType = this.$route.params.moneyType

    if (this.moneyType == 'income') {
      this.categoryArray = this.$store.getters.posCategoryArray
      this.isPositive = true
    } else {
      this.categoryArray = this.$store.getters.negCategoryArray
      this.isPositive = false
    }
  },
  methods: {
    goBack() {
      this.reset()
      this.$router.go(-1)
    },
    reset() {
      this.$refs.form.reset()
    },
    validateForm() {
     this.isValid = utilsMixin.validateTransactionForm(this.name, this.amount);
    },
    setFocusOnAmount() {
      this.$refs.amount.focus()
    },
    createTransaction(categoryId) {
      let transaction = new Object()
      transaction.name = this.name
      transaction.isPositive = this.isPositive
      transaction.amount = parseFloat(this.amount)
      transaction.created_at = new Date()
        .toLocaleDateString(this.$store.getters.localeDateString, {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
        .substr(0, 11)
      if (this.isPositive) {
        transaction.category = this.$store.getters.posCategoryArray[
          this.$store.getters.posCategoryArray.findIndex(
            (x) => x.id === categoryId,
          )
        ]
      } else {
        transaction.category = this.$store.getters.negCategoryArray[
          this.$store.getters.negCategoryArray.findIndex(
            (x) => x.id === categoryId,
          )
        ]
      }

      transaction.notes = this.notes
      let result = transactionService.createTransaction(transaction)
      // wenn keine Fehler in POST, dann commit store --> EVTL über dispatch.ACTION in STORE, anstatt im Service durchführen?!
      console.log(result);
      this.$store.commit('addTransaction', transaction)
      this.$store.commit('setTaskCreated', true)
      this.$refs.form.reset()
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
/deep/ .v-toolbar__content {
  padding: 0px !important;
}

.icon-border {
  border-style: solid;
  border-top: 0px;
  border-right: 0px;
  border-width: 2px;
  border-radius: 3px;
  border-color: grey;
  text-align: center;
  text-justify: center;
}

.add-btn {
  color: seagreen;
}
</style>
