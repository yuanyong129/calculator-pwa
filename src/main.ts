import { createApp } from 'vue';
import './styles/normalize.scss';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { md3 } from 'vuetify/blueprints';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';

import App from './App.vue';
import { router } from './router';

const Vuetify = createVuetify({
  components,
  directives,
  blueprint: md3,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
});

createApp(App)
  .use(Vuetify)
  .use(router)
  .mount('#app');
