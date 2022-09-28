 <script setup>
import pcNav from './pc/index.vue'
import mobileNav from './mobile/index.vue'
import { isMobileTerminal } from '@/utils/flexable.js'
console.log(isMobileTerminal)
</script>
 <template>
    <mobileNav v-if="isMobileTerminal"/>
    <pcNav v-else/>
 </template>
 <style scoped lang='scss'>
</style>