const routeReport = [
    {
      path: '/debt/Report/count_business',
      name: 'debt-report-count-business',
      component: () => import('@/components/menuRegister/report/CountBusiness.vue'),
    },
    {
      path: '/debt/Report/count_request',
      name: 'debt-report-count-request',
      component: () => import('@/components/menuRegister/report/CountRequest.vue'),
    },
    {
      path: '/debt/Report/count_request_province',
      name: 'debt-report-count-request-province',
      component: () => import('@/components/menuRegister/report/CountRequestProvince.vue'),
    },
    {
      path: '/debt/Report/count_type_business',
      name: 'debt-report-count-type-business',
      component: () => import('@/components/menuRegister/report/CountTypeBusiness.vue'),
    },
    {
      path: '/debt/Report/business',
      name: 'debt-report-business',
      component: () => import('@/components/menuRegister/report/Business.vue'),
    },
    {
      path: '/debt/Report/appeal',
      name: 'debt-report-appeal',
      component: () => import('@/components/menuRegister/report/Appeal.vue'),
    },
    {
      path: '/debt/Report/appeal_province',
      name: 'debt-report-appeal-province',
      component: () => import('@/components/menuRegister/report/AppealProvince.vue'),
    },
    {
      path: '/debt/Report/appeal_statistics',
      name: 'debt-report-appeal-statistics',
      component: () => import('@/components/menuRegister/report/AppealStatistics.vue'),
    },
    {
      path: '/debt/Report/meeting',
      name: 'debt-report-meeting',
      component: () => import('@/components/menuRegister/report/others/Meeting.vue'),
    },
    {
      path: '/debt/Report/evaluate',
      name: 'debt-report-evaluate',
      component: () => import('@/components/menuRegister/report/others/Evaluate.vue'),
    },
    {
      path: '/debt/Report/process',
      name: 'debt-report-process',
      component: () => import('@/components/menuRegister/report/others/process.vue'),
    },
    {
      path: '/debt/Report/other',
      name: 'debt-report-other',
      component: () => import('@/components/menuRegister/report/others/Other.vue'),
    },
    {
      path: '/debt/Report/quarter_28',
      name: 'debt-report-quarter28',
      component: () => import('@/components/menuRegister/report/others/Quartar28.vue'),
    },
    {
      path: '/debt/Report/overview_report',
      name: 'debt-report-overview-report',
      component: () => import('@/components/menuRegister/report/others/Overview.vue'),
    },
  ]

  
  export default routeReport