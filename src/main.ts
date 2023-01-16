import { App } from 'vue'
import * as components from './components/index'

function install (app: App) {
    for (const key in components) {
        // @ts-expect-error
        app.component(key, components[key])
    }
}

import "./assets/main.css";

export default { install }

export * from './components/index'
