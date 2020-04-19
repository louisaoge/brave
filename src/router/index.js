import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Login from '../views/Authentication/Login.vue'
//import Register from '../views/Authentication/Register.vue'


Vue.use(VueRouter)

const isLoggedIn = false;

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'task-all',
    component: () => import('../views/Tasks/TaskAll.vue'),
    beforeEnter: (to, from, next) => {
      if (isLoggedIn){
        next();
      }else {
        next('/login');
      }
    }
  },
  {
    path: '/tasks/new',
    name: 'task-create',
    component: () => import('../views/Tasks/TaskCreate.vue'),
    beforeEnter: (to, from, next) => {
      if (isLoggedIn){
        next();
      }else {
        next('/login');
      }
    }
  },
  {
    path: '/task/:id',
    name: 'task-edit',
    component: () => import('../views/Tasks/TaskEdit.vue'),
    beforeEnter: (toolbar, from, next) => {
      if (isLoggedIn){
        next();
      }else {
        next('/login');
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Authentication/Login.vue'),
    beforeEnter: (toolbar, from, next) => {
      if (!isLoggedIn){
        next();
      }else {
        next('/');
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Authentication/Register.vue'),
    beforeEnter: (toolbar, from, next) => {
      if (!isLoggedIn){
        next();
      }else {
        next('/');
      }
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  //linkActiveClass: "active",
  linkExactActiveClass: "active",
  mode:'history'
})

// router.beforeEach((to,from,next) => {
//   //router guard execute condition
//   next(false);
// })
export default router
