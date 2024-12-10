import routeRequest from './requestroutes'
import routeReport from './reportroutes'
import routeSystem from './systemroutes'

const routesDebt = [
  {
    path: '/',
    component: () => import('@/layout/AppLayout.vue'),
    redirect: '/home',
    children: [
      {
        path: '/debt/Home_Debt',
        name: 'debt-home-registration',
        component: () => import('@/views/registration/HomeDebt.vue'),
      },
      {
        path: '/debt/sample_doc',
        name: 'debt-sample-doc',
        component: () => import('@/views/registration/HomeDebt.vue'),
      },
      {
        path: '/debt/Home_Debt/detail_business',
        name: 'debt-home-registration-detail_business',
        component: () => import('@/components/menuRegister/home/HomeData.vue'),
      },
 
      {
        path: '/debt/Users',
        name: 'debt-user-registration',
        component: () => import('@/views/registration/User.vue'),
      },
      ...routeRequest,
      ...routeReport,
      ...routeSystem,
      {
        path: '/debt/Setting',
        name: 'debt-setting-registration',
        component: () => import('@/views/registration/Setting.vue'),
      },
      {
        path: '/debt/Backup',
        name: 'debt-reservedata-registration',
        component: () => import('@/views/registration/ReserveData.vue'),
      }
    ]
  },
]




export default routesDebt