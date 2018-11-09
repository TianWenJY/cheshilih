import Vue from 'vue'
import Router from 'vue-router'
import QuickOpening from '@/components/quickOpening'
import css from '@/assets/common.css'

Vue.use(Router)
Vue.use(css)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QuickOpening',
      component: QuickOpening
    }
  ]
})
