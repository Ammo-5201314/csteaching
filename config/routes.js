export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: '个人主页',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: '调课系统',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '听课系统',
    icon: 'table',
    path: '/listen',
    routes: [
      {
        path: '/listen/data',
        name: '历史听课记录',
        icon: 'smile',
        component: './listen',
      },
      {
        path: '/listen/form',
        name: '听课表填写',
        icon: 'smile',
        component: './NewPage',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
