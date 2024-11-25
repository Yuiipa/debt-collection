const routeSystem = [
    {
      path: '/debt/Location',
      name: 'debt-location',
      component: () => import('@/components/menuRegister/system/data/Location.vue'),
    },
    {
      path: '/debt/Nationality',
      name: 'debt-nationality',
      component: () => import('@/components/menuRegister/system/data/Nation.vue'),
    },
    {
      path: '/debt/Prename',
      name: 'debt-prename',
      component: () => import('@/components/menuRegister/system/data/Prename.vue'),
    },
    {
      path: '/debt/Blame',
      name: 'debt-blame',
      component: () => import('@/components/menuRegister/system/data/Blame.vue'),
    },
    {
      path: '/debt/Status',
      name: 'debt-status',
      component: () => import('@/components/menuRegister/system/data/Status.vue'),
    },
    {
      path: '/debt/Complaints',
      name: 'debt-complaints',
      component: () => import('@/components/menuRegister/system/data/Complaints.vue'),
    },
    {
      path: '/debt/License',
      name: 'debt-license',
      component: () => import('@/components/menuRegister/system/data/License.vue'),
    },
    {
      path: '/debt/User_Service',
      name: 'debt-userservice',
      component: () => import('@/components/menuRegister/system/data/UserService.vue'),
    },
    {
      path: '/debt/Conf_form',
      name: 'debt-conf-form',
      component: () => import('@/components/menuRegister/system/data/ConfForm.vue'),
    },
    {
      path: '/debt/Conf_Business',
      name: 'debt-conf-business',
      component: () => import('@/components/menuRegister/system/request/Business.vue'),
    },
    {
      path: '/debt/Conf_ChangeRoster',
      name: 'debt-conf-changeroster',
      component: () => import('@/components/menuRegister/system/request/ChangeRoster.vue'),
    },
    {
      path: '/debt/Conf_Quit',
      name: 'debt-conf-quit',
      component: () => import('@/components/menuRegister/system/request/Quit.vue'),
    },
    {
      path: '/debt/Conf_Renew',
      name: 'debt-conf-renew',
      component: () => import('@/components/menuRegister/system/request/Renew.vue'),
    },
    {
      path: '/debt/Conf_Cancel_Quit',
      name: 'debt-conf-cancelquit',
      component: () => import('@/components/menuRegister/system/request/CancelQuit.vue'),
    },
    {
        path: '/debt/Conf_Appeal',
        name: 'debt-conf-appeal',
        component: () => import('@/components/menuRegister/system/report/Appeal.vue'),
      },
  ]

  
  export default routeSystem