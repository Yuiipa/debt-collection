const routesAppeal = [
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
        path: '/appeal/Process_appeal/Details',
        name: 'debt-process-appeal-details',
        component: () =>
          import(
            '@/components/menuAppeal/processAppeal/ProcessAppealDetails.vue'
          ),
      },
      {
        path: '/appeal/Report/meeting',
        name: 'debt-report-appeal-meeting',
        component: () => import('@/components/menuAppeal/reportAppeal/MeetingReport.vue'),
      },
      {
        path: '/appeal/Report/evaluate',
        name: 'debt-report-appeal-evaluate',
        component: () => import('@/components/menuAppeal/reportAppeal/EvaluateReport.vue'),
      },
      {
        path: '/appeal/Report/performance',
        name: 'debt-report-appeal-performance',
        component: () =>
          import('@/components/menuAppeal/reportAppeal/PerformanceReport.vue'),
      },
      {
        path: '/appeal/Report/other',
        name: 'debt-report-appeal-other',
        component: () => import('@/components/menuAppeal/reportAppeal/OtherReport.vue'),
      },
      {
        path: '/appeal/CenterAppeal',
        name: 'debt-center-appeal',
        component: () => import('@/views/appeal/CenterAppeal.vue'),
      },
      {
        path: '/appeal/CenterAppeal/Details',
        name: 'debt-center-appeal-details',
        component: () =>
          import(
            '@/components/menuAppeal/centerAppeal/CenterAppealDetails.vue'
          ),
      },
      {
        path: '/appeal/Search_Register/Register',
        name: 'debt-search-appeal-register',
        component: () => import('@/views/appeal/SearchRegister.vue'),
      },
      {
        path: '/appeal/Search_Register/Unregister',
        name: 'debt-search-appeal-unregister',
        component: () => import('@/views/appeal/Unregister.vue'),
      },
      
    ],
  },
]

export default routesAppeal
