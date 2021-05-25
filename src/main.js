import { createApp } from 'vue'
import App from './App.vue'

import router from './router'


import 'bulma'
import '../src/assets/bulma-switch.min.css'


import './assets/main.css'
import '../node_modules/line-awesome/dist/line-awesome/css/line-awesome.css'

import 'pace-progressbar';
import 'pace-progressbar/themes/blue/pace-theme-minimal.css';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles
  // import highlighting library (you can use any library you want just return html string)



import $nanomes from '@calumk/nanomes-js'

import $helpers from '@/@helpers.js'


let _nanomes = new $nanomes({
    endpoint : 'http://172.21.0.1:1338',
    jwt_token :  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsicmVhZCIsIndyaXRlIl0sInVzZXIiOiJjYWx1bUBjYWx1bWsuY29tIiwiaWF0IjoxNjEyMTY5MzM0fQ.SQUYkm-H6IptmvQvu2Cr1Z-LGKmkx5Tq8NEMbceMHn0'
});




const app = createApp(App)

app.provide('$nanomes', _nanomes ) // <-- define here
app.provide('$helpers', $helpers ) // <-- define here

app.use(VueSweetalert2);
app.component('PrismEditor', PrismEditor);

app.use(router)
app.mount('#app')

