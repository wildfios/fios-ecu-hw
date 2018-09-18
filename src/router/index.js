import Vue from 'vue'
import Router from 'vue-router'
import landingPage from '@/components/landingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: landingPage
    }
  ]
})
