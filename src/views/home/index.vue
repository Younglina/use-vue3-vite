<script setup>
import { getHotPlayListCategory, getPersonalized } from '@/api/music'
import playCard from '@/components/play-card.vue'

import { ref } from 'vue'

const hotList = ref([])
getPersonalized().then((res) => {
  hotList.value = res.result
})
</script>

<template>
  <playCard :cards="hotList" />
</template>

<style scoped lang='scss'>
</style>