<template>
  <div>
    
   <v-app-bar app>
      <v-container>
        <v-row>
          <v-col>

          </v-col>
          <v-col>Settings</v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </v-app-bar>

     <v-list dense>
      <v-subheader>{{ $t('settings.lbl_general') }}</v-subheader>
      <v-list-item-group
        color="primary"
      >
      <v-list-item class="pl-0 pr-0" @click="showView('language')">
         
        <v-list-item-content>
          <v-list-item-title>{{ $t('settings.lbl_choose_language') }}</v-list-item-title>
        </v-list-item-content>
             <v-list-item-icon>
               <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      </v-list-item-group>
     </v-list>
     
  </div>
</template>

<script>
export default {
  name: "Settings",
  methods: {
   showView(view) {
    this.$router.push('settings/'+view);
   }
  }
};
</script>

<style></style>
