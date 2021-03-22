<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <router-view></router-view>

        <v-bottom-navigation fixed>
          <v-container d-flex justify-space-between>
          <v-btn to="/transactions" plain>
            <span>{{ $t('app.tab_transactions') }}</span>

            <v-icon>{{ transactionsTab }}</v-icon>
          </v-btn>

          <v-btn to="/summary" plain>
            <span>{{ $t('app.tab_summary') }}</span>

            <v-icon>{{ summaryTab }}</v-icon>
          </v-btn>

          <v-btn to="/settings" plain>
            <span>{{ $t('app.tab_settings') }}</span>
            <v-icon>{{ settingsTab }}</v-icon>
          </v-btn>
          </v-container>
        </v-bottom-navigation>
      </v-container>
    </v-main>

    <v-footer></v-footer>
  </v-app>
</template>

// ------------------------------------------------------------
<script>
export default {
  name: "App",

  data() {
    return {
      transactions: [],
      transactionsTab: "mdi-format-list-numbered-rtl",
      summaryTab: "mdi-text-box-search",
      settingsTab: "mdi-cog",
    };
  },
};
</script>

// ------------------------------------------------------------
<style></style>
