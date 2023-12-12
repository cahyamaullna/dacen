import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "https://kit.fontawesome.com/42d5adcbca.js"
import "./assets/dist/js/argon-dashboard.min.js"


createApp(App).use(router).mount('#app')
