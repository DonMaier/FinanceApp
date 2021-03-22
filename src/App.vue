<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <router-view></router-view>

        <TabNavigation />
      </v-container>
    </v-main>

  </v-app>
</template>


<script>
import TabNavigation from './components/TabNavigation'

export default {
  name: "App",

  data() {
    return {
      transactions: []     
    };
  },
  components: {
 TabNavigation
  }
   
  
};
</script>


<style></style>
