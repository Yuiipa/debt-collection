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
            path: '/debt/Request_All',
            name: 'debt-request-registration',
            component: () => import('@/views/registration/Request.vue'),
          },
          {
            path: '/debt/Users',
            name: 'debt-user-registration',
            component: () => import('@/views/registration/User.vue'),
          },
          {
            path: '/debt/Report',
            name: 'debt-report-registration',
            component: () => import('@/views/registration/report/Main.vue'),
          },
          {
            path: '/debt/System',
            name: 'debt-system-registration',
            component: () => import('@/views/registration/System.vue'),
          },
          {
            path: '/debt/Setting',
            name: 'debt-setting-registration',
            component: () => import('@/views/registration/Setting.vue'),
          },
          {
            path: '/debt/ReserveData',
            name: 'debt-reservedata-registration',
            component: () => import('@/views/registration/ReserveData.vue'),
          },
        ]
      },
]


export default routesDebt