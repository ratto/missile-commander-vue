import Vue from 'vue'
import VueRouter from 'vue-router'
import StartMenuView from '@/views/StartMenuView.vue'
import OptionsView from '@/views/OptionsView.vue'
import LevelOneView from '@/views/GameScenes/Level1View.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'menu',
    component: StartMenuView
  },
  {
    path: '/options',
    name: 'options',
    component: OptionsView
  },
  {
    path: '/level-1',
    name: 'level-1',
    component: LevelOneView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
