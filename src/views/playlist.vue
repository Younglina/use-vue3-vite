<template>
  <div class="flex py-3" v-if="playlistInfo.id">
    <div :style="{ backgroundImage: `url(${playlistInfo.coverImgUrl + '?param=224y224'})` }" class="list-img"></div>
    <div class="flex-1 pl-[50px] text-base">
      <div class="text-lg py-[20px] font-semibold">{{ playlistInfo.name }}</div>
      <div class="flex items-center mb-[10px]">
        <img class="w-[30px] h-[30px] rounded-full" :src="playlistInfo.creator?.avatarUrl" alt />
        <span class="pl-[5px] cursor-pointer hover:underline" @click="toCreator(playlistInfo.creator?.userId)">{{ playlistInfo.creator?.nickname }}</span>
      </div>
      <div class="text-sm">
        更新于{{ formatDate(playlistInfo.trackUpdateTime) }} ·
        {{ playlistInfo.trackCount }}首歌
      </div>
      <div class="pt-[20px] text-zinc-500 text-sm">{{ playlistInfo.description }}</div>
      <div class="flex items-center pt-[40px]">
        <div class="flex bg-blue-200/50 items-center justify-center pr-[8px] rounded">
          <wy-button name="play" size="18" class="text-blue-600" />
          <span class="text-blue-600">播放</span>
        </div>
        <wy-button name="heart" class="text-blue-600" />
        <wy-button name="heart-full" class="text-red-600" />
      </div>
    </div>
  </div>
  <div class="flex pb-3">
    <div class="flex-1 p-[10px] rounded-[10px] drop-shadow-xl bg-white">
      <div class="text-lg">歌单列表</div>
      <!-- <SongList :id="playlistId"></SongList> -->
    </div>
    <div class="ml-[20px] p-[10px] rounded-[10px] drop-shadow-xl bg-white">
      <div class="text-lg">近期收藏</div>
      <div v-for="item in playlistInfo.subscribers" :key="item.userId" class="flex text-sm pb-[10px]">
        <img :src="item.avatarUrl" class="w-[50px] h-[50px] rounded-full" />
        <div class="pl-[20px] flex items-center justify-center">
          <div>{{ item.nickname }}</div>
          <div class="text-sm text-zinc-500">{{ item.signature }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getPlaylistDetail } from '@/api/music.js'
import { formatDate } from '@/utils/useTool.js'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'

// import SongList from '@/components/SongList.vue'

onBeforeMount(() => {
  initData()
})

const route = useRoute()
const playlistId = ref(null)
const playlistInfo = ref({})

const initData = async () => {
  playlistId.value = route.query.id
  const { playlist } = await getPlaylistDetail({ id: playlistId.value })

  playlistInfo.value = playlist
}
</script>

<style lang="scss" scoped>
.list-img {
  position: relative;
  border-radius: 10px;
  width: 280px;
  height: 280px;
  background-size: 100% 100%;
  border-radius: 10px;
  &::after {
    content: '';
    position: absolute;
    top: 4%;
    left: 0%;
    width: 100%;
    height: 100%;
    background: inherit;
    background-size: 100% 100%;
    border-radius: 10px;
    transform: scale(1.01);
    filter: blur(10px) opacity(0.5);
    z-index: -1;
  }
}
</style>