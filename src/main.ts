import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/styles/reset.less'
import '@/styles/common.less'
import '@/styles/element.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import '../mock/login.ts'
const app = createApp(App)
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons])
})
app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
