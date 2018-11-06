import Vue from 'vue'
import Router from 'vue-router'
import QuickOpening from '@/components/quickOpening'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QuickOpening',
      component: QuickOpening
    }
  ]
})
