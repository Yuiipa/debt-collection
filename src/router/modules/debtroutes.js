const routeReport = [
  {
    path: '/debt/Request_All',
    name: 'debt-Request_All-registration',
    component: () => import('@/components/menuRegister/report/requestAll.vue'),
  },
  {
    path: '/debt/Registration',
    name: 'debt-Registration-registration',
    component: () => import('@/components/menuRegister/report/Registration.vue'),
  },
  {
    path: '/debt/ChangeBusiness',
    name: 'debt-ChangeBusiness-registration',
    component: () => import('@/views/registration/ReportDebt.vue'),
  },
  {
    path: '/debt/Substitute',
    name: 'debt-Substitute-registration',
    component: () => import('@/views/registration/ReportDebt.vue'),
  },
  {
    path: '/debt/ChangeRoster',
    name: 'debt-ChangeRoster-registration',
    component: () => import('@/views/registration/ReportDebt.vue'),
  },
  {
    path: '/debt/Quit_Business',
    name: 'debt-Quit_Business-registration',
    component: () => import('@/views/registration/ReportDebt.vue'),
  },
  {
    path: '/debt/Renew_request',
    name: 'debt-Renew_request-registration',
    component: () => import('@/views/registration/ReportDebt.vue'),
  },
  {
    path: '/debt/Blame_Business',
    name: 'debt-Blame_Business-registration',
    component: () => import('@/views/registration/ReportDebt.vue'),
  },
  {
    path: '/debt/Cancel_Quit',
    name: 'debt-Cancel_Quit-registration',
    component: () => import('@/views/registration/ReportDebt.vue'),
  },
  {
    path: '/debt/Revoke',
    name: 'debt-Revoke-registration',
    component: () => import('@/views/registration/ReportDebt.vue'),
  },
]

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
            path: '/debt/Home_Debt/detail_business',
            name: 'debt-home-registration-detail_business',
            component: () => import('@/components/menuRegister/home/HomeData.vue'),
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
          ...routeReport,
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
            path: '/debt/Backup',
            name: 'debt-reservedata-registration',
            component: () => import('@/views/registration/ReserveData.vue'),
          },
          {
            path: '/home',
            name: 'debt-home',
            component: () => import('@/views/Home.vue'),
          },
        ]
      },
]




export default routesDebt