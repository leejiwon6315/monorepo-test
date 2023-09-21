import type { App } from 'vue';
import { Vue3Button } from './ui';

export default {
  install: (app: App) => {
    app.component('Vue3Button', Vue3Button);
  },
};

export { Vue3Button };
