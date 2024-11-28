const routeSystem = [
    {
      path: '/debt/Location',
      name: 'debt-location',
      component: () => import('@/views/registration/system/data/Location.vue'),
    },
    {
      path: '/debt/Nationality',
      name: 'debt-nationality',
      component: () => import('@/views/registration/system/data/Nation.vue'),
    },
    {
      path: '/debt/Prename',
      name: 'debt-prename',
      component: () => import('@/views/registration/system/data/Prename.vue'),
    },
    {
      path: '/debt/Blame',
      name: 'debt-blame',
      component: () => import('@/views/registration/system/data/Blame.vue'),
    },
    {
      path: '/debt/Status',
      name: 'debt-status',
      component: () => import('@/views/registration/system/data/Status.vue'),
    },
    {
      path: '/debt/Complaints',
      name: 'debt-complaints',
      component: () => import('@/views/registration/system/data/Complaints.vue'),
    },
    {
      path: '/debt/License',
      name: 'debt-license',
      component: () => import('@/views/registration/system/data/License.vue'),
    },
    {
      path: '/debt/User_Service',
      name: 'debt-userservice',
      component: () => import('@/views/registration/system/data/UserService.vue'),
    },
    {
      path: '/debt/Conf_form',
      name: 'debt-conf-form',
      component: () => import('@/views/registration/system/data/ConfForm.vue'),
    },
    {
      path: '/debt/Conf_Business',
      name: 'debt-conf-business',
      component: () => import('@/views/registration/system/request/Business.vue'),
    },
    {
      path: '/debt/Conf_ChangeRoster',
      name: 'debt-conf-changeroster',
      component: () => import('@/views/registration/system/request/ChangeRoster.vue'),
    },
    {
      path: '/debt/Conf_Quit',
      name: 'debt-conf-quit',
      component: () => import('@/views/registration/system/request/Quit.vue'),
    },
    {
      path: '/debt/Conf_Renew',
      name: 'debt-conf-renew',
      component: () => import('@/views/registration/system/request/Renew.vue'),
    },
    {
      path: '/debt/Conf_Cancel_Quit',
      name: 'debt-conf-cancelquit',
      component: () => import('@/views/registration/system/request/CancelQuit.vue'),
    },
    {
        path: '/debt/Conf_Appeal',
        name: 'debt-conf-appeal',
        component: () => import('@/views/registration/system/report/Appeal.vue'),
      },
  ]

  
  export default routeSystem