import install from '@twind/with-sveltekit';
import config from './twind.config';

export const initFboardUi = () => {
  install(config);
}