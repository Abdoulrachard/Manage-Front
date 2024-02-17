import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"

const app = createApp(App)

app.use(router)

app.mount('#app')
