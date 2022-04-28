import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/antd.css";
import naive from 'naive-ui'

createApp(App).use(naive).use(router).mount("#app");
