const routesHome = [
  {
    path: '/',
    component: () => import('@/layout/AppLayout.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'debt-home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/home/population',
        name: 'debt-poppulation',
        component: () => import('@/views/common/Poppulation.vue'),
      },
      {
        path: '/menu_page',
        name: 'debt-menu-page',
        component: () => import('@/views/common/MenuPage.vue'),
      },]
  },
  {
    path: '/login',
    name: 'debt-login',
    component: () => import('@/views/common/Login.vue'),
  }


]

export default routesHome
