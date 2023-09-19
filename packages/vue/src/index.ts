import type { App } from 'vue';
import { Button } from './ui';

export default {
  install: (app: App) => {
    app.component('Button', Button);
  },
};

export { Button };
