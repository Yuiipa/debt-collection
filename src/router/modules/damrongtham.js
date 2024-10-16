const useRoutesDamrongtham = [
  {
    path: '/home',
    name: 'drt-home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/',
    component: () => import('@/layout/AppLayout.vue'),
    redirect: '/home',
    children: [
      {
        path: '/login',
        name: 'drt-login',
        component: () => import('@/views/common/Login.vue'),
      },
      {
        path: '/about',
        name: 'drt-about',
        component: () => import('@/views/common/AboutUs.vue'),
      },

      {
        path: '/questions',
        name: 'drt-questions',
        component: () => import('@/views/common/AskedQuestions.vue'),
      },
      {
        path: '/contact',
        name: 'drt-contact',
        component: () => import('@/views/common/Contact.vue'),
      },
      {
        path: '/details',
        name: 'drt-details',
        component: () => import('@/views/common/DetailDamRongTham.vue'),
      },

      {
        path: '/services',
        name: 'drt-services',
        component: () => import('@/views/common/DetailDamRongTham.vue'),
        children: [
          {
            path: '/appeal',
            name: 'drt-appeal',
            component: () => import('@/views/common/Appeal.vue'),
          },
          {
            path: '/document',
            name: 'drt-document',
            component: () =>
              import('@/views/common/MediationRequestDocument.vue'),
          },
          {
            path: '/follow',
            name: 'drt-follow',
            component: () => import('@/views/common/FollowStory.vue'),
          },
        ],
      },
    ],
  },
]

export default useRoutesDamrongtham
