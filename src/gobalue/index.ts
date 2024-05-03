import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export const GlobalRegistration = (app : App) => {
    app.use(ElementPlus)

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
      }
}

// export default {
//     install(app : App){
        
//     }
// }