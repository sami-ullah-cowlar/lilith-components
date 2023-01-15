import { App } from 'vue'
import * as components from './stories/index'

function install (app: App) {
    for (const key in components) {
        // @ts-expect-error
        app.component(key, components[key])
    }
}

import "./assets/styles.scss";

export default { install }

export * from './stories/index'