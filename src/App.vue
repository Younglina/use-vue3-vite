<script setup>
  import pageHeader from './views/layout/header.vue'
</script>
<template>
  <page-header></page-header>
  <main>
    <router-view />
  </main>
</template>
<style lang="scss">
  #app{
    padding: 0 10%;
  }
</style>