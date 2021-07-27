import { createApp } from "vue";
import App from "./App.vue";
import RApp from "./RApp.vue"
import "./registerServiceWorker";
import router from "./router";
import store from "./store";


// createApp(App).use(store).use(router).mount("#app");
const app = createApp(RApp)

app.use(store);
app.use(router);
app.mount("#app");
