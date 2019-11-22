import React from 'react'
import { Link } from 'dva/router'
import { Row, Col } from 'antd'
import styles from './CourseDirectory.less'

const list = [
  {
    id: 1,
    title: '第一章 公开课只能试听几次，系统学习推荐购买整套精品课',
    children: [
      {
        id: 11,
        title: '第一节 公开课只能试听几次，系统学习推荐购买整套精品课',
        free: true,
      },
      {
        id: 12,
        title: '第二节 公开课只能试听几次，系统学习推荐购买整套精品课',
        free: true,
      },
      {
        id: 13,
        title: '第三节 公开课只能试听几次，系统学习推荐购买整套精品课',
      },
    ]
  },
  {
    id: 2,
    title: '第二章 公开课只能试听几次，系统学习推荐购买整套精品课',
    children: [
      {
        id: 11,
        title: '第一节 公开课只能试听几次，系统学习推荐购买整套精品课',
      },
      {
        id: 12,
        title: '第二节 公开课只能试听几次，系统学习推荐购买整套精品课',
      },
      {
        id: 13,
        title: '第三节 公开课只能试听几次，系统学习推荐购买整套精品课',
      },
    ]
  },
  {
    id: 3,
    title: '第三章 公开课只能试听几次，系统学习推荐购买整套精品课',
    children: [
      {
        id: 11,
        title: '第一节 公开课只能试听几次，系统学习推荐购买整套精品课',
      },
      {
        id: 12,
        title: '第二节 公开课只能试听几次，系统学习推荐购买整套精品课',
      },
      {
        id: 13,
        title: '第三节 公开课只能试听几次，系统学习推荐购买整套精品课',
      },
    ]
  },
  {
    id: 4,
    title: '第四章 公开课只能试听几次，系统学习推荐购买整套精品课',
    children: [
      {
        id: 11,
        title: '第一节 公开课只能试听几次，系统学习推荐购买整套精品课',
      },
      {
        id: 12,
        title: '第二节 公开课只能试听几次，系统学习推荐购买整套精品课',
      },
      {
        id: 13,
        title: '第三节 公开课只能试听几次，系统学习推荐购买整套精品课',
      },
    ]
  },
];

export default class CourseDirectory extends React.Component{

  render(){
    return(
      <div className={styles.container}>

        {
          list.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.parent}>
                <p>{item.title}</p>
              </div>
              {
                item.children.map((t, j) => (
                  <div key={j} className={styles.children}>
                    <Link to={`/category/lesson/${t.id}`} className={styles.link}>{t.title}</Link>
                    <span className={styles.action}>
                      {
                        t.free ?
                          <Link to={``} className={styles.free}>免费</Link>
                          :
                          <Link to={``} className={styles.pay}>付费</Link>
                      }
                    </span>
                  </div>
                ))
              }
            </div>
          ))
        }

      </div>
    )
  }

}
