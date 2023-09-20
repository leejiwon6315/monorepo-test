import type { App } from 'vue';
import { VueButton } from './ui';

export default {
  install: (app: App) => {
    app.component('VueButton', VueButton);
  },
};

export { VueButton };
