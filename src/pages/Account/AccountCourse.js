import React from 'react';
import { Link } from 'dva/router'
import { Avatar, Row, Col } from 'antd'
import styles from './AccountCourse.less'

const list = [
  {
    id: 1,
    title: '互联网高级java架构课程',
    thumb: require('@/assets/category/course01.png'),
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师'
  },
  {
    id: 2,
    title: '互联网高级java架构课程',
    thumb: require('@/assets/category/course02.png'),
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师'
  },
  {
    id: 3,
    title: '互联网高级java架构课程',
    thumb: require('@/assets/category/course03.png'),
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师'
  },
  {
    id: 4,
    title: '互联网高级java架构课程',
    thumb: require('@/assets/category/course01.png'),
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师'
  },
  {
    id: 5,
    title: '互联网高级java架构课程',
    thumb: require('@/assets/category/course02.png'),
    author: '张老师',
    avatar: '',
    zhiwei: '著名架构工程师'
  },
]

export default class AccountCourse extends React.Component {

  render(){

    return(

      <div className={styles.container}>
        <Row gutter={20}>
          {
            list.map((item, index) => (
              <Col xs={24} sm={24} md={12} lg={8} key={index}>
                <Link to={'/'} className={styles.item}>
                  <img src={item.thumb} alt="thumb" className={styles.thumb}/>
                  <p className={styles.title}>{item.title}</p>
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

    )
  }

}
