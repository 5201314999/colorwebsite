import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
// import HelloWorld from '@/components/HelloWorld'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [{
        path: 'home',
        component: Home,
        meta: {
        }
      }]
    }
  ]
})
