import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import PrimeVue from 'primevue/config';

import Aura from '@primeuix/themes/aura';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import {router} from "./router/index.js";
import {Button, Drawer, SelectButton, Toolbar} from "primevue";
import i18n from "./i18n.js";

const app = createApp(App)

    app.use(router)
        .use(i18n)
        .use(PrimeVue,{
            theme:{
                preset: Aura,
                ripple: true,
                options:{
                    darkModeSelector: false,
                }
            },

        })
        .component('pv-drawer', Drawer)
        .component('pv-button', Button)
        .component('pv-toolbar', Toolbar)
        .component('pv-selectButton', SelectButton)
        .mount('#app')
