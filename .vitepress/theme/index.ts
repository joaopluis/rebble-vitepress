import DefaultTheme, {VPButton} from "vitepress/theme-without-fonts";
import './custom.css'
import {Theme} from "vitepress";

import config from '../../config';

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

        app.config.globalProperties.$config = config;

    }
} satisfies Theme;
