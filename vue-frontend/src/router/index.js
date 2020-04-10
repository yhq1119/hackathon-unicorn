import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../views/Signin'
import MapPage from '../views/MapPage'
import MainPage from '../views/MainPage'
import BrowseNeeder from '../views/BrowseNeeder'


Vue.use(VueRouter)

  const routes = [
 {
  path:'/',
  name: 'Sign In',
  component: Signin 
 }, {
  path:'/main',
  name: 'Main Page',
  component: MainPage 
 }, {
  path:'/map',
  name: 'Map Page',
  component: MapPage 
 }, {
  path:'/needers',
  name: 'Browse Needer',
  component: BrowseNeeder 
 },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
