<template>
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
</template>

<script>
export default {
  name: 'TabNavigation',
  data: () => {
    return {
      transactionsTab: 'mdi-format-list-numbered-rtl',
      summaryTab: 'mdi-text-box-search',
      settingsTab: 'mdi-cog',
    }
  },
}
</script>

<style></style>
