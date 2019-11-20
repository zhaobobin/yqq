/**
 * 全局变量
 */
'use strict';

module.exports = {

  api_base: '/api/v1',

  api: {
    old: 'http://127.0.0.1:8080',  // express
    test: 'http://127.0.0.1:7001', // egg
    pro: 'http://www.metuwang.com',
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
    beian: '',
    company: '',
    copyright: '',
    slogan: '',
    web: '',
    worktime: '9:00-17:30',
    doc: '',
  },

  storage: {
    token: 'yqqIndex-token',
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

