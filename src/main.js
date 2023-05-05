import { createApp } from 'vue'
import piniaStore from './stores/piniaStore'
import router from './router'
import App from './App.vue'

// 增加注释
createApp(App)
    .use(router)
    .use(piniaStore)
    .mount('#app')
