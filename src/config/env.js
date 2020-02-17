/**
 * 全局变量
 */
'use strict';

module.exports = {

  api_base: '/api',

  api: {
    test: 'http://api.yqqedu.com',
    pro: 'http://api.yqqedu.com',
  },

  info: {
    appname: '易起趣',
    hometitle: '易起趣',
    keywords: '',
    description: '',
    author: '易起趣',
    verification: '',

    address: '',
    hotline: '',
    email: '',
    icp: '',
    beian: '京ICP备19053490号-1',
    company: '北京易启趣教育科技有限公司',
    copyright: 'Copyright © 2019 Quzu. All Rights Reserved.',
    slogan: '',
    web: '',
    worktime: '9:00-17:30',
    doc: '',
  },

  storage: {
    oauth_token: 'yqqIndex-oauth-token',
    oauth_token_secret: 'yqqIndex-oauth-token-secret',
    lastTel: 'yqqIndex-lastTel',
    remenber: 'yqqIndex-remenber',
    routerHistory: 'yqqIndex-routerHistory',
    theme: 'yqqIndex-theme',
    currentMenu: 'yqqIndex-currentMenu',
    userCenterTabKey: 'yqqIndex-userCenterTabKey',
    perPage: 'yqqIndex-perPage',

    wechatLoginState: 'yqqIndex-WechatLoginState', // 微信授权登录state
    weiboLoginState: 'yqqIndex-WeiboLoginState', // 微博授权登录state
    qqLoginState: 'yqqIndex-QqLoginState', // QQ授权登录state

    accountAuth: 'yqqIndex-accountAuth', // 帐号身份验证
    ossToken: 'yqqIndex-ossToken', // ossToken

    readModel: 'yqqIndex-readModel', // 阅读模式：white、black

  },

};

