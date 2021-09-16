import Vue from 'nativescript-vue'
import App from '@/pages/home/index.vue';
import VueDevtools from 'nativescript-vue-devtools';
import store from './store';
import './main.scss';
import MultiDrawer from 'nativescript-vue-multi-drawer';
import { MultiDrawerOptions } from '@/modules/types';

let __DEV__: boolean = (TNS_ENV !== 'production');

// if(TNS_ENV !== 'production') {
//   Vue.use(VueDevtools)
// }

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__;

const options: Partial<MultiDrawerOptions> = { debug: __DEV__ };
Vue.use(MultiDrawer, options);


new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
