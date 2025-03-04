import DefaultTheme, {VPButton} from "vitepress/theme-without-fonts";
import './custom.css'
import {Theme} from "vitepress";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        const components = import.meta.glob('../components/*.vue', { eager: true });
        console.log(components);
        Object.entries(components).forEach(([path, component]) => {
            const componentName = path.split('/').pop()?.replace('.vue', '');
            if (componentName) {
                app.component(componentName, (component as any).default);
            }
        });

        app.component('RblButton', VPButton)

        app.config.globalProperties.$CLOUDPEBBLE_URL = import.meta.env.VITE_CLOUDPEBBLE_URL
        app.config.globalProperties.$PEBBLETOOL_ROOT = import.meta.env.VITE_PEBBLE_TOOL_ROOT
        app.config.globalProperties.$PEBBLETOOL_VERSION = import.meta.env.VITE_PEBBLE_TOOL_VERSION

    }
} satisfies Theme;
