
const routeRequestForm = [
    {
      path: '/debt/Blame_Business/form',
      name: 'debt-BlameBusiness-form',
      component: () => import('@/components/menuRegister/requestForm/BlameBusiness.vue'),
    },
    {
      path: '/debt/Registration/check_person',
      name: 'debt-Registration-checkperson',
      component: () => import('@/components/menuRegister/requestForm/CheckPerson.vue'),
    },
    {
      path: '/debt/Registration/form',
      name: 'debt-Registration-form',
      component: () => import('@/components/menuRegister/requestForm/RegistrationForm.vue'),
    },
  ]
  
  const routeRequest = [
    {
      path: '/debt/Request_All',
      name: 'debt-Request_All-registration',
      component: () => import('@/views/registration/request/RequestAll.vue'),
    },
    {
      path: '/debt/Registration',
      name: 'debt-Registration-registration',
      component: () => import('@/views/registration/request/Registration.vue'),
    },
    {
      path: '/debt/ChangeBusiness',
      name: 'debt-ChangeBusiness-registration',
      component: () => import('@/views/registration/request/RequestDebt.vue'),
    },
    {
      path: '/debt/Substitute',
      name: 'debt-Substitute-registration',
      component: () => import('@/views/registration/request/RequestDebt.vue'),
    },
    {
      path: '/debt/ChangeRoster',
      name: 'debt-ChangeRoster-registration',
      component: () => import('@/views/registration/request/RequestDebt.vue'),
    },
    {
      path: '/debt/Quit_Business',
      name: 'debt-Quit_Business-registration',
      component: () => import('@/views/registration/request/RequestDebt.vue'),
    },
    {
      path: '/debt/Renew_request',
      name: 'debt-Renew_Request-registration',
      component: () => import('@/views/registration/request/RequestDebt.vue'),
    },
    {
      path: '/debt/Blame_Business',
      name: 'debt-Blame_Business-registration',
      component: () => import('@/views/registration/request/BlameBusiness.vue'),
    },
    {
      path: '/debt/Cancel_Quit',
      name: 'debt-Cancel_Quit-registration',
      component: () => import('@/views/registration/request/CancelQuit.vue'),
    },
    {
      path: '/debt/Revoke',
      name: 'debt-Revoke-registration',
      component: () => import('@/views/registration/request/Revoke.vue'),
    },
    ...routeRequestForm
  ]

  export default routeRequest