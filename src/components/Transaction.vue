<template>
  <swiper ref="mySwiper-{{transaction.id}}" class="swiper" @slideChangeTransitionEnd="removeItem(transaction.id)">
    <!-- <v-list-item class="list-item" @click="showDetailsView()"> -->

    <swiper-slide id="transition.id">
      <v-list-item @click="showDetailsView()">
        <v-list-item-avatar>
          <v-icon class="grey lighten-1" dark>
            {{ transaction.category.icon }}
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="transaction.title"></v-list-item-title>
          <v-list-item-subtitle>
            {{ transaction.created_at }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-title
            v-text="formatFloatToEuroCurrency(transaction.amount)"
          ></v-list-item-title>
          <v-list-item-title v-if="transaction.isPositive" class="income">
            {{ $t('transaction.lbl_income') }}
          </v-list-item-title>
          <v-list-item-title v-else class="expense">
            {{ $t('transaction.lbl_expense') }}
          </v-list-item-title>
        </v-list-item-action>
      </v-list-item>
    </swiper-slide>
    <swiper-slide>
      <v-list-item class="pl-0 pr-0">
        <v-col class="text-right del-item">Delete</v-col>
      </v-list-item>
    </swiper-slide>
  </swiper>
</template>

<script>
import utilsMixin from '../mixins/utilsMixin'
import TransactionService from '../services/TransactionService'
const transactionService = new TransactionService();
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

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
    Swiper,
    SwiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mixins: [utilsMixin],
  data: () => ({}),
  created() {
    
  },
  methods: {
    showDetailsView() {
      this.$store.commit('setSelectedTransaction', this.transaction)
      this.$router.push(`transaction/details/${this.transaction.id}`)
      // this.$router.push('summary');
    },
    isPositive(transaction) {
      if (transaction.isPositive) {
        return 'income'
      }
      return 'expense'
    },
    deleteSection(id) {
      console.log('deleteSection: ', id)
    },
    removeItem(transactionId) {
      transactionService.removeTransaction(transactionId);
    }
  },
}
</script>

<style scoped>
.list-item {
  border-bottom: 1px;
}

.income {
  color: #228b22;
}

.expense {
  color: #dc143c;
}
.padding-zero {
  padding: 0px;
}

.list-item {
  padding: 0;
}

.del-item {
  background-color: red;
  color:white;
  height: 100%;
  width: 100%;
}

</style>
