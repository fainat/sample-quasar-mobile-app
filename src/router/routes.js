import ScreenLayout from 'layouts/ScreenLayout.vue';
import SectionsLayout from 'layouts/SectionsLayout.vue';

const routes = [
  {
    path: '/',
    component: ScreenLayout,
    children: [
      {
        path: '',
        component: SectionsLayout
      }
    ]
  },
  
  {
    path: '/:catchAll(.*)*',
    name: 'error',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
