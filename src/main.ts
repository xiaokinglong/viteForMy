import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import naive from 'naive-ui';

import 'vfonts/Lato.css';
import 'vfonts/FiraCode.css';

createApp(App).use(naive).use(router).mount("#app");
