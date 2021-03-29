<template>
  <swiper
    ref="mySwiper-{{source.id}}"
    class="swiper"
    :options= "{ allowSlidePrev: false}"
    @slideChangeTransitionEnd="removeItem(source.id)"
  >
    <!-- <v-list-item class="list-item" @click="showDetailsView()"> -->

    <swiper-slide id="transaction.id">
      <v-list-item @click="showDetailsView()" class="list-item">
        <v-list-item-avatar>
          <v-icon class="grey lighten-1" dark>
            {{ source.category.icon }}
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="source.name"></v-list-item-title>
          <v-list-item-subtitle>
            {{ source.created_at }}
          </v-list-item-subtitle>
        </v-list-item-content> 
        <v-list-item-action>
          <v-list-item-title
            v-text="formatFloatToEuroCurrency(source.amount)"
          ></v-list-item-title>
          <v-list-item-title v-if="source.isPositive" class="income">
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
        <v-col class="text-right del-item">
          <v-icon>mdi-delete</v-icon>
          Delete
        </v-col>
    
      </v-list-item>
       
    </swiper-slide>
  </swiper>
</template>

<script>
import utilsMixin from '../mixins/utilsMixin'
import TransactionService from '../services/TransactionService'
const transactionService = new TransactionService()
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Transaction',
  props: {
      source: {
        type: Object,
        default() {
          return {}
        }
      }
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
  created() {},
  utilsMixin:[utilsMixin],
  methods: {
    showDetailsView() {
      this.$store.commit('setSelectedTransaction', this.source)
      this.$router.push(`transaction/details/${this.source.id}`)
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
      transactionService.removeTransaction(transactionId)
      this.$store.commit('removeTransaction', transactionId);
    },
  },
}
</script>

<style scoped>
.list-item {
  border-bottom: 1px solid lightgrey;
  /* background-color: blue; */
  padding-right: 20px;
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



.del-item {
  background-color: red;
  color: white;
  height: 100%;
  width: 100%;
  opacity: 0.75;
}
</style>
