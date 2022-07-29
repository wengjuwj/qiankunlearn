import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 微前端步骤，第一步，在主应用中注册子应用
import { registerMicroApps } from 'qiankun'

Vue.config.productionTip = false

new Vue({
    router,
    store,
  render: h => h(App),
}).$mount('#app')

registerMicroApps([
    {
        name:'app-vue-history',
        entry:'http://192.168.2.89:5555',
        container:"#appContainer",
        activeRule:'/app-vue-history'
    },
    {
        name:'orange-project',
        entry:'http://192.168.2.89:8088',
        container:"#appContainer",
        activeRule:'/orange-project'
    }
])
