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
        path: '/appeal/change_password',
        name: 'debt-change-password',
        component: () => import('@/views/appeal/ChangePassword.vue'),
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
