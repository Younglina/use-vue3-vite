<script setup>
import { getCategory } from '@/api/category';
getCategory().then(res=>{
  console.log(res)
})
</script>
<template>
mobile-nav
</template>
<style scoped lang='scss'>

</style>