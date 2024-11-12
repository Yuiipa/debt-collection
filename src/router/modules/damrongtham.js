const useRoutesDamrongtham = [
  {
    path: '/home',
    name: 'debt-home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/population',
    name: 'debt-poppulation',
    component: () => import('@/views/common/Poppulation.vue'),
  },
  {
    path: '/home/menu_page',
    name: 'debt-menu-page',
    component: () => import('@/views/common/MenuPage.vue'),
  },
  {
    path: '/login',
    name: 'debt-login',
    component: () => import('@/views/common/Login.vue'),
  },
  {
    path: '/',
    component: () => import('@/layout/AppLayout.vue'),
    redirect: '/home',
    children: [
      {
        path: '/debt/home_debt',
        name: 'debt-home-registration',
        component: () => import('@/views/registration/HomeDebt.vue'),
      },
      {
        path: '/debt/Request',
        name: 'debt-request-registration',
        component: () => import('@/views/registration/Request.vue'),
      },
      {
        path: '/debt/User',
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
  {
    path: '/',
    component: () => import('@/layout/AppLayout.vue'),
    redirect: '/home',
    children: [
      {
        path: '/appeal/home_appeal',
        name: 'debt-home-appeal',
        component: () => import('@/views/appeal/HomeAppeal.vue'),
      },
      {
        path: '/appeal/form_appeal',
        name: 'debt-form-appeal',
        component: () => import('@/views/appeal/FormAppeal.vue'),
      },
      {
        path: '/appeal/Form_Appeal',
        name: 'debt-form-appeal',
        component: () => import('@/views/appeal/FormAppeal.vue'),
      },
      {
        path: '/appeal/Process_appeal',
        name: 'debt-process-appeal',
        component: () => import('@/views/appeal/ProcessAppeal.vue'),
      },
      {
        path: '/appeal/Report/meeting',
        name: 'debt-report-appeal',
        component: () => import('@/views/appeal/Report.vue'),
      },
      {
        path: '/appeal/Report/evaluate',
        name: 'debt-report-appeal',
        component: () => import('@/views/appeal/Report.vue'),
      },
      {
        path: '/appeal/Report/performance',
        name: 'debt-report-appeal',
        component: () => import('@/views/appeal/Report.vue'),
      },
      {
        path: '/appeal/Report/other',
        name: 'debt-report-appeal',
        component: () => import('@/views/appeal/Report.vue'),
      },
      {
        path: '/appeal/CenterAppeal',
        name: 'debt-center-appeal',
        component: () => import('@/views/appeal/CenterAppeal.vue'),
      },
      {
        path: '/appeal/Search_Register/Register',
        name: 'debt-search-appeal',
        component: () => import('@/views/appeal/SearchRegister.vue'),
      },
      {
        path: '/appeal/Search_Register/UnRegister',
        name: 'debt-home-appeal',
        component: () => import('@/views/appeal/SearchRegister.vue'),
      },
      {
        path: '/appeal/change_password',
        name: 'debt-change-password',
        component: () => import('@/views/registration/ChangePassword.vue'),
      },
    ]
  }
  
  // {
  //   path: '/',
  //   component: () => import('@/layout/AppLayout.vue'),
  //   redirect: '/home',
  //   children: [

  //     {
  //       path: '/about',
  //       name: 'drt-about',
  //       component: () => import('@/views/common/AboutUs.vue'),
  //     },

  //     {
  //       path: '/questions',
  //       name: 'drt-questions',
  //       component: () => import('@/views/common/AskedQuestions.vue'),
  //     },
  //     {
  //       path: '/contact',
  //       name: 'drt-contact',
  //       component: () => import('@/views/common/Contact.vue'),
  //     },
  //     {
  //       path: '/details',
  //       name: 'drt-details',
  //       component: () => import('@/views/common/DetailDamRongTham.vue'),
  //     },

  //     {
  //       path: '/services',
  //       name: 'drt-services',
  //       component: () => import('@/views/common/DetailDamRongTham.vue'),
  //       children: [
  //         {
  //           path: '/appeal',
  //           name: 'drt-appeal',
  //           component: () => import('@/views/common/Appeal.vue'),
  //         },
  //         {
  //           path: '/document',
  //           name: 'drt-document',
  //           component: () =>
  //             import('@/views/common/MediationRequestDocument.vue'),
  //         },
  //         {
  //           path: '/follow',
  //           name: 'drt-follow',
  //           component: () => import('@/views/common/FollowStory.vue'),
  //         },
  //       ],
  //     },
  //   ],
  // },
]

export default useRoutesDamrongtham
