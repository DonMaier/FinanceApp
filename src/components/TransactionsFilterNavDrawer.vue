<template>
  <v-navigation-drawer
    v-bind:value="value"
    v-on:input="$emit('input', $event)"
    :width="175"
    app
  >
    <v-row justify="center" class="mt-5">
      <v-btn class="nav-button">Tag</v-btn>
    </v-row>
    <v-row justify="center" class="mt-5">
      <v-btn class="nav-button">Woche</v-btn>
    </v-row>
     <v-row justify="center" class="mt-5">
      <v-btn class="nav-button">Intervall</v-btn>
    </v-row>
    <v-row justify="center" class="mt-5">
      <v-btn class="nav-button">Datum</v-btn>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'TransactionsFilterNavDrawer',
  props: {
    value: Boolean 
  },
  data() {
    return {
      
    }
  },
  methods: {},
}
</script>

<style scoped>
.nav-button {
  width: 120px;
}
</style>
