<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
  import AppBar from '@/layout/AppBar.vue'
  import AppFooter from '@/layout/AppFooter.vue'
</script>
