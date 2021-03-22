<template>
  <div>
    <v-app-bar app>
      <v-container fill-height fluid>
        <v-row align="start" justify="center">
          <v-col align="start" class="pl-0">
            <v-btn elevation="0">
              <v-icon @click="goBack()"> mdi-arrow-left-circle </v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-toolbar-title>
              {{ selectedTransaction.title }}
            </v-toolbar-title>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-card elevation="2">
      <v-card-title>Notes</v-card-title>

      <v-card-text v-if="this.selectedTransaction.notes">
        {{ selectedTransaction.notes }}
      </v-card-text>
      <v-card-text v-else> No notes available. </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TransactionDetails",
  props: {},
  components: {
    // Home,
  },
  data: () => {
    return {
      selectedTransaction: null,
    };
  },
  created() {
    this.selectedTransaction = this.$store.getters.selectedTransaction;
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
/deep/ .v-toolbar__content {
  padding: 0px !important;
}
</style>
