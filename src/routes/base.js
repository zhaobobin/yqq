import dynamic from 'dva/dynamic';
// import {FormattedMessage} from 'react-intl';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component,
});

// nav data
const BaseRoutes = app => [

  //基本路由
  {
    component: dynamicWrapper(app, [], () => import('../layouts/BaseLayout')),
    layout: 'BaseLayout',
    key: 'MainMenu',
    name: '基本布局',
    path: '/',
    children: [
      {
        name: '首页',
        id: 'menu.home',
        key: 'home',
        path: '',
        exact: true,
        component: dynamicWrapper(app, [], () => import('../pages/Home/Home')),
      },

      {
        name: '课程体系',
        id: 'menu.system',
        key: 'system',
        path: 'system',
        isHide: true,
        component: dynamicWrapper(app, [], () => import('../pages/System/_layout')),
      },
      {
        name: '课程分类',
        id: 'menu.category',
        key: 'category',
        path: 'category',
        isHide: true,
        component: dynamicWrapper(app, [], () => import('../pages/Category/_layout')),
        children: [
          {
            name: '',
            id: 'menu.category.index',
            key: 'category-index',
            path: 'index',
            exact: true,
            component: dynamicWrapper(app, [], () => import('../pages/Category/CategoryIndex')),
          },
          {
            name: '课程列表',
            id: 'menu.category.course.list',
            key: 'course-list',
            path: 'course/:tag',
            exact: true,
            component: dynamicWrapper(app, [], () => import('../pages/Course/CourseList')),
          },
          {
            name: '课程详情',
            id: 'menu.category.course.detail',
            key: 'course-detail',
            path: 'course/:tag/:id',
            exact: true,
            component: dynamicWrapper(app, [], () => import('../pages/Course/CourseDetail')),
            children: [
              {
                name: '课程介绍',
                id: 'menu.category.course.detail.introduce',
                key: 'course-detail-introduce',
                path: 'introduce',
                component: dynamicWrapper(app, [], () => import('../pages/Course/CourseDetailIntroduce')),
              },
              {
                name: '课程目录',
                id: 'menu.category.course.detail.directory',
                key: 'course-detail-directory',
                path: 'directory',
                component: dynamicWrapper(app, [], () => import('../pages/Course/CourseDetailDirectory')),
              },
              {
                name: '课程笔记',
                id: 'menu.category.course.detail.routes',
                key: 'course-detail-routes',
                path: 'routes',
                component: dynamicWrapper(app, [], () => import('../pages/Course/CourseDetailRoutes')),
              }
            ]
          },
          {
            name: '课程播放',
            id: 'menu.category.course.lesson',
            key: 'course-lesson',
            path: 'lesson/:id',
            exact: true,
            component: dynamicWrapper(app, [], () => import('../pages/Course/CourseLesson')),
          },
        ]
      },

      {
        name: '机构入驻',
        id: 'menu.join',
        key: 'join',
        path: 'join',
        isHide: true,
        component: dynamicWrapper(app, [], () => import('../pages/Join/_layout')),
      },
      {
        name: '个人中心',
        id: 'menu.account',
        key: 'account',
        path: 'account',
        isHide: true,
        component: dynamicWrapper(app, [], () => import('../pages/Account/_layout')),
        children: [
          {
            name: '编辑资料',
            id: 'menu.account.info',
            key: 'info',
            path: 'info',
            component: dynamicWrapper(app, [], () => import('../pages/Account/AccountEditInfo')),
          },
          {
            name: '我的订单',
            id: 'menu.account.order',
            key: 'order',
            path: 'order',
            exact: true,
            component: dynamicWrapper(app, [], () => import('../pages/Account/AccountOrder')),
          },
          {
            name: '订单详情',
            id: 'menu.account.order.detail',
            key: 'order-detail',
            path: 'order/:id',
            isHide: true,
            component: dynamicWrapper(app, [], () => import('../pages/Account/AccountOrderDetail')),
          },
          {
            name: '我的评价',
            id: 'menu.account.comment',
            key: 'comment',
            path: 'comment',
            component: dynamicWrapper(app, [], () => import('../pages/Account/AccountComment')),
          },
          {
            name: '我的收藏',
            id: 'menu.account',
            key: 'collect',
            path: 'collect',
            component: dynamicWrapper(app, [], () => import('../pages/Account/AccountCollect')),
          },
          {
            name: '成为老师',
            id: 'menu.account.teacher',
            key: 'teacher',
            path: 'teacher',
            component: dynamicWrapper(app, [], () => import('../pages/Account/AccountTeacher')),
          },
          {
            name: '创作课程',
            id: 'menu.account.course',
            key: 'course',
            path: 'course',
            component: dynamicWrapper(app, [], () => import('../pages/Account/AccountCreateCourse')),
          },
        ]
      },

      // 其他
      {
        name: '帮助中心',
        id: 'menu.help',
        key: 'help',
        path: 'help',
        isHide: true,
        component: dynamicWrapper(app, [], () => import('../pages/Other/Help')),
      },
      {
        name: '服务条款',
        id: 'menu.service',
        key: 'service',
        path: 'service',
        isHide: true,
        component: dynamicWrapper(app, [], () => import('../pages/Other/Service')),
      },
      {
        name: '联系我们',
        id: 'menu.contact',
        key: 'contact',
        path: 'contact',
        isHide: true,
        component: dynamicWrapper(app, [], () => import('../pages/Other/Contact')),
      },
      {
        name: '网站地图',
        id: 'menu.sitemap',
        key: 'sitemap',
        path: 'sitemap',
        isHide: true,
        component: dynamicWrapper(app, [], () => import('../pages/Other/Sitemap')),
      },
      {
        name: '404',
        id: 'menu.404',
        key: '404',
        path: '404',
        isHide: true,
        component: dynamicWrapper(app, [], () => import('../pages/Other/404')),
      },

    ]
  },

];

export default BaseRoutes;
