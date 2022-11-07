<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
  cards: {
    type: Array,
    default: () => [],
  },
})

const router = useRouter()
const toDetail = (id) => {
  router.push({ path: '/playList', query: { id } })
}
</script>
<template>
  <div class="grid grid-cols-5 gap-x-2 gap-y-4">
    <div v-for="item in props.cards" :key="item.id" @click="toDetail(item.id)" class="duration-500 card">
      <div class="relative duration-500 hover:shadow-xl shadow-current mb-1">
        <img :src="item.picUrl + '?param=224y224'" class="rounded" />
        <div
          class="play-icon absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] invisible backdrop-saturate-150 backdrop-blur-lg bg-white/98 rounded-full w-[54px] h-[54px] flex items-center justify-center cursor-pointer"
        >
          <svg-icon name="play" size="32" class="ml-[2px] text-white"/>
        </div>
        <!-- <span class="text-xs">{{ item.playCount }}</span> -->
      </div>
      <div class="text-sm font-semibold">{{ item.name }}</div>
      <div>{{ item.copywriter }}</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card {
  &:hover .play-icon {
    visibility: visible;
    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  }
}
</style>
