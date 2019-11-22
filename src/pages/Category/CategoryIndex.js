/**
 * 课程分类
 */
import React from 'react';
import { Link } from 'dva/router'
import { Avatar, Row, Col } from 'antd'
import styles from './CategoryIndex.less'

import LoadLazy from '@/components/Common/LoadLazy'
import CategoryBanner from '@/containers/Category/CategoryBanner'

const first = {
  name: '互联网高级java架构课程',
  desc: '本课程主要是分享当前互联网java架构,java高级热门技术，由业内技术大牛，行业及实战经验丰富的讲师进行技术分享。',
  thumb: require('@/assets/category/course01.png'),
  tag: 'java',
  author: '张老师',
  avatar: '',
  zhiwei: '著名架构工程师',
};

const list1 = [
  {
    name: '互联网高级java架构课程',
    desc: '本课程主要是分享当前互联网java架构,java高级热门技术，由业内技术大牛，行业及实战经验丰富的讲师进行技术分享。',
    thumb: require('@/assets/category/course01.png'),
    tag: 'java',
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师',
  },
  {
    name: '互联网高级java架构课程',
    desc: '本课程主要是分享当前互联网java架构,java高级热门技术，由业内技术大牛，行业及实战经验丰富的讲师进行技术分享。',
    thumb: require('@/assets/category/course02.png'),
    tag: 'java',
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师',
  },
  {
    name: '互联网高级java架构课程',
    desc: '本课程主要是分享当前互联网java架构,java高级热门技术，由业内技术大牛，行业及实战经验丰富的讲师进行技术分享。',
    thumb: require('@/assets/category/course03.png'),
    tag: 'java',
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师',
  },
  {
    name: '互联网高级java架构课程',
    desc: '本课程主要是分享当前互联网java架构,java高级热门技术，由业内技术大牛，行业及实战经验丰富的讲师进行技术分享。',
    thumb: require('@/assets/category/course01.png'),
    tag: 'java',
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师',
  },
  {
    name: '互联网高级java架构课程',
    desc: '本课程主要是分享当前互联网java架构,java高级热门技术，由业内技术大牛，行业及实战经验丰富的讲师进行技术分享。',
    thumb: require('@/assets/category/course02.png'),
    tag: 'java',
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师',
  },
  {
    name: '互联网高级java架构课程',
    desc: '本课程主要是分享当前互联网java架构,java高级热门技术，由业内技术大牛，行业及实战经验丰富的讲师进行技术分享。',
    thumb: require('@/assets/category/course03.png'),
    tag: 'java',
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师',
  },
];

const list2 = [
  {
    name: '互联网高级java架构课程',
    desc: '本课程主要是分享当前互联网java架构,java高级热门技术，由业内技术大牛，行业及实战经验丰富的讲师进行技术分享。',
    thumb: require('@/assets/category/course01.png'),
    tag: 'java',
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师',
  },
  {
    name: '互联网高级java架构课程',
    desc: '本课程主要是分享当前互联网java架构,java高级热门技术，由业内技术大牛，行业及实战经验丰富的讲师进行技术分享。',
    thumb: require('@/assets/category/course02.png'),
    tag: 'java',
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师',
  },
  {
    name: '互联网高级java架构课程',
    desc: '本课程主要是分享当前互联网java架构,java高级热门技术，由业内技术大牛，行业及实战经验丰富的讲师进行技术分享。',
    thumb: require('@/assets/category/course03.png'),
    tag: 'java',
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师',
  },
  {
    name: '互联网高级java架构课程',
    desc: '本课程主要是分享当前互联网java架构,java高级热门技术，由业内技术大牛，行业及实战经验丰富的讲师进行技术分享。',
    thumb: require('@/assets/category/course01.png'),
    tag: 'java',
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师',
  },

  {
    name: '互联网高级java架构课程',
    desc: '本课程主要是分享当前互联网java架构,java高级热门技术，由业内技术大牛，行业及实战经验丰富的讲师进行技术分享。',
    thumb: require('@/assets/category/course01.png'),
    tag: 'java',
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师',
  },
  {
    name: '互联网高级java架构课程',
    desc: '本课程主要是分享当前互联网java架构,java高级热门技术，由业内技术大牛，行业及实战经验丰富的讲师进行技术分享。',
    thumb: require('@/assets/category/course02.png'),
    tag: 'java',
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师',
  },
  {
    name: '互联网高级java架构课程',
    desc: '本课程主要是分享当前互联网java架构,java高级热门技术，由业内技术大牛，行业及实战经验丰富的讲师进行技术分享。',
    thumb: require('@/assets/category/course03.png'),
    tag: 'java',
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师',
  },
  {
    name: '互联网高级java架构课程',
    desc: '本课程主要是分享当前互联网java架构,java高级热门技术，由业内技术大牛，行业及实战经验丰富的讲师进行技术分享。',
    thumb: require('@/assets/category/course01.png'),
    tag: 'java',
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师',
  },
];

export default class CategoryIndex extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      category: this.props.match.params.name
    }
  }

  render(){

    return(

      <div className={styles.container}>

        <LoadLazy height="300">
          <CategoryBanner/>
        </LoadLazy>

        <Row>

          <Col xs={0} sm={2} md={2} lg={2} xl={4}/>

          <Col xs={24} sm={20} md={20} lg={20} xl={16}>

            <div className={styles.head}>
              <h1>分类名称</h1>
            </div>

            <div className={styles.list1}>
              <Row gutter={20}>

                <Col xs={24} sm={24} md={10} lg={10}>
                  <Link to={`/category/course/${first.tag}`} className={styles.item}>
                    <img src={first.thumb} alt="thumb" className={styles.thumb}/>
                    <p className={styles.title}>{first.name}</p>
                    <p className={styles.desc}>{first.desc}</p>
                  </Link>
                </Col>

                <Col xs={24} sm={24} md={14} lg={14}>
                  <Row gutter={20}>
                    {
                      list1.map((item, index) => (
                        <Col xs={24} sm={24} md={12} lg={8} key={index}>
                          <Link to={`/category/course/${item.tag}`} className={styles.item}>
                            <img src={item.thumb} alt="thumb" className={styles.thumb}/>
                            <p className={styles.title}>{item.name}</p>
                            <div className={styles.foot}>
                              <p className={styles.avatar}>
                                {
                                  item.avatar ?
                                    <Avatar src={item.avatar} size={30} />
                                    :
                                    <Avatar icon="user" size={30} />
                                }
                              </p>
                              <p className={styles.info}>{item.author}</p>
                              <p className={styles.info}>{item.zhiwei}</p>
                            </div>
                          </Link>
                        </Col>
                      ))
                    }
                  </Row>
                </Col>

              </Row>
            </div>

            <div className={styles.list2}>
              <Row gutter={20}>
                {
                  list2.map((item, index) => (
                    <Col xs={24} sm={24} md={12} lg={6} key={index}>
                      <Link to={`/category/course/${item.tag}`} className={styles.item}>
                        <img src={item.thumb} alt="thumb" className={styles.thumb}/>
                        <p className={styles.title}>{item.name}</p>
                        <div className={styles.foot}>
                          <p className={styles.avatar}>
                            {
                              item.avatar ?
                                <Avatar src={item.avatar} size={30} />
                                :
                                <Avatar icon="user" size={30} />
                            }
                          </p>
                          <p className={styles.info}>{item.author}</p>
                          <p className={styles.info}>{item.zhiwei}</p>
                        </div>
                      </Link>
                    </Col>
                  ))
                }
              </Row>
            </div>

          </Col>

          <Col xs={0} sm={2} md={2} lg={2} xl={4}/>

        </Row>

      </div>

    )
  }

}
