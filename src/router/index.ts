import Layout from '@/layout/index.vue';
import Standard from '@/pages/standard/index.vue';
import Settings from '@/pages/settings/index.vue';
import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { 
    path: '/',
    component: Layout,
    redirect: '/standard',
    children: [
      {
        path: 'standard',
        component: Standard,
      },
      {
        path: 'settings',
        component: Settings,
      }
    ]
   }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export { router }