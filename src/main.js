// Plugins
import { registerPlugins } from '@/plugins'
import router from '@/router'

// Components
import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(router).mount('#app')
