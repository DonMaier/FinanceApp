<template>
  <div>
    <v-app-bar app>
      <v-container>
        <v-row>
          <v-col>
            <v-icon @click="goBack()">mdi-arrow-left-circle</v-icon>
          </v-col>
          <v-col>TODOooooo</v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-list dense>
      <v-subheader>{{ $t('settings.lbl_general') }}</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item class="pl-0 pr-0" @click="selectLanguage('de')">
          <v-list-item-icon>
          <v-img src="@/assets/germany.png" max-width="25" max-height="25"></v-img>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ $t('settings.language.lbl_german') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
         <v-list-item class="pl-0 pr-0" @click="selectLanguage('en')">
          <v-list-item-icon>
          <v-img src="@/assets/united-kingdom.png" max-width="25" max-height="25"></v-img>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ $t('settings.language.lbl_english') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-divider></v-divider>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'Language',
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    selectLanguage(language) {
        this.$i18n.locale = language;
    }
  },
}
</script>

<style></style>
