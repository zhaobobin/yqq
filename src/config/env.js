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
    token: 'metuIndex-token',
    lastTel: 'metuIndex-lastTel',
    remenber: 'metuIndex-remenber',
    routerHistory: 'metuIndex-routerHistory',
    theme: 'metuIndex-theme',
    currentMenu: 'metuIndex-currentMenu',
    userCenterTabKey: 'metuIndex-userCenterTabKey',
    perPage: 'metuIndex-perPage',

    wechatLoginState: 'metuIndex-WechatLoginState', // 微信授权登录state
    weiboLoginState: 'metuIndex-WeiboLoginState', // 微博授权登录state
    qqLoginState: 'metuIndex-QqLoginState', // QQ授权登录state

    accountAuth: 'metuIndex-accountAuth', // 帐号身份验证
    ossToken: 'metuIndex-ossToken', // ossToken

    readModel: 'metuIndex-readModel', // 阅读模式：white、black

  },

};

