import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Vuetify
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Ensure you are using css-loader
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
});

// Create Vue app
const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount('#app');
