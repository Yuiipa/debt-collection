const routeReport = [
    {
      path: '/debt/Report/count_business',
      name: 'debt-report-count-business',
      component: () => import('@/views/registration/report/CountBusiness.vue'),
    },
    {
      path: '/debt/Report/count_request',
      name: 'debt-report-count-request',
      component: () => import('@/views/registration/report/CountRequest.vue'),
    },
    {
      path: '/debt/Report/count_request_province',
      name: 'debt-report-count-request-province',
      component: () => import('@/views/registration/report/CountRequestProvince.vue'),
    },
    {
      path: '/debt/Report/count_type_business',
      name: 'debt-report-count-type-business',
      component: () => import('@/views/registration/report/CountTypeBusiness.vue'),
    },
    {
      path: '/debt/Report/business',
      name: 'debt-report-business',
      component: () => import('@/views/registration/report/Business.vue'),
    },
    {
      path: '/debt/Report/appeal',
      name: 'debt-report-appeal',
      component: () => import('@/views/registration/report/Appeal.vue'),
    },
    {
      path: '/debt/Report/appeal_province',
      name: 'debt-report-appeal-province',
      component: () => import('@/views/registration/report/AppealProvince.vue'),
    },
    {
      path: '/debt/Report/appeal_statistics',
      name: 'debt-report-appeal-statistics',
      component: () => import('@/views/registration/report/AppealStatistics.vue'),
    },
    {
      path: '/debt/Report/meeting',
      name: 'debt-report-meeting',
      component: () => import('@/views/registration/report/others/Meeting.vue'),
    },
    {
      path: '/debt/Report/evaluate',
      name: 'debt-report-evaluate',
      component: () => import('@/views/registration/report/others/Evaluate.vue'),
    },
    {
      path: '/debt/Report/process',
      name: 'debt-report-process',
      component: () => import('@/views/registration/report/others/process.vue'),
    },
    {
      path: '/debt/Report/other',
      name: 'debt-report-other',
      component: () => import('@/views/registration/report/others/Other.vue'),
    },
    {
      path: '/debt/Report/quarter_28',
      name: 'debt-report-quarter28',
      component: () => import('@/views/registration/report/others/Quartar28.vue'),
    },
    {
      path: '/debt/Report/overview_report',
      name: 'debt-report-overview-report',
      component: () => import('@/views/registration/report/others/Overview.vue'),
    },
  ]

  
  export default routeReport