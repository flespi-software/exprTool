import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        props: (route) => {
          return {
            theme: route.query.theme || 'white'
          }
        }
      },
      {
        path: 'expr',
        component: () => import('pages/Expressions.vue'),
        props: (route) => {
          return {
            theme: route.query.theme || 'white'
          }
        }
      },
      {
        path: 'expr-functions',
        component: () => import('pages/ExpressionFunctions.vue'),
        props: (route) => {
          return {
            theme: route.query.theme || 'white'
          }
        }
      }
    ]
  },
  { path: '/login', component: () => import('pages/Login.vue') },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
