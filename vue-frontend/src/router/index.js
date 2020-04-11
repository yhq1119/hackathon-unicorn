import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing'
import MapPage from '../views/MapPage'
import MainPage from '../views/MainPage'
import SignupForm from '../components/SignupForm'
import SigninForm from '../components/SigninForm'
import BrowseNeeder from '../views/BrowseNeeder'



Vue.use(VueRouter)

  const routes = [
 {
  path:'/',
  name: 'Landing',
  component: Landing 
 },{
  path:'/signup',
  name: 'Sign Up',
  component: SignupForm 
 },{
  path:'/signin',
  name: 'Sign In',
  component: SigninForm 
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
