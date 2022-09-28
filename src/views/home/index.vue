<script setup>
import { getHotPlayListCategory, getPersonalized } from '@/api/music';
import { ref } from 'vue';
import MyNav from './components/nav/index.vue'

const category = ref([])
getHotPlayListCategory().then(res => {
  category.value = res.tags
})

const hotList = ref([])
getPersonalized().then(res => {
  hotList.value = res.result
})
</script>

<template>
  <my-nav :category="category" />
  <ul>
    <li v-for="item in hotList" :key="item.id">
      <img :src="item.picUrl+'?param=224y224'" alt="">
      <span class="text-sm">{{item.name}}</span>
    </li>
  </ul>
</template>

<style scoped lang='scss'>

</style>