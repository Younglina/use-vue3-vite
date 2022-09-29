import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useREM } from './utils/flexable'
import './styles/index.scss'

import 'virtual:svg-icons-register'
import svgIcon from './components/svg-icon.vue'
import wyButton from './components/wy-button.vue'

useREM()
const app = createApp(App)
app.component('svg-icon',svgIcon)
app.component('wy-button',wyButton)
app.use(router).mount('#app')
