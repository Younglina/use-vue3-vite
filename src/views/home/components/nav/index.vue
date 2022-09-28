<script setup>
import pcNav from './pc/index.vue'
import mobileNav from './mobile/index.vue'
import { isMobileTerminal } from '@/utils/flexable.js'
</script>
<template>
   <mobileNav v-if="isMobileTerminal" />
   <pcNav v-else />
</template>
<style scoped lang='scss'>

</style>