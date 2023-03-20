import { createApp } from 'vue'
import piniaStore from './stores/piniaStore'
import './style.css'
import router from './router'
import App from './App.vue'

createApp(App)
    .use(router)
    .use(piniaStore)
    .mount('#app')
