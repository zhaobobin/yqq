import React from 'react';
import { Rate } from 'antd'
import styles from './AccountComment.less'

const list = [
  {
    username: '郝敏',
    date: '2019-06-30 09:41',
    content: '好非常的不行就去的星的星的人雪的?一的如何时间我们的隔着我们的星的人造的隔姆指外挂机械人人人人人人人人人人雪的人都是大圆圆圆的星的隔阂办帐号尹总会有个月经历史上第一混乱离了卡的孓星系，',
    star: 4,
    courseTime: '已上课1小时21分钟时评价',
  },
  {
    username: '米谢',
    date: '2019-06-30 09:41',
    content: '好非常的不行就去的星的星的人雪的?一的如何时间我们的隔着我们的星的人造的隔姆指外挂机械人人人人人人人人人人雪的人都是大圆圆圆的星的隔阂办帐号尹总会有个月经历史上第一混乱离了卡的孓星系，',
    star: 4,
    courseTime: '已上课1小时21分钟时评价',
  },
]

export default class AccountComment extends React.Component {

  render(){

    return(

      <div className={styles.container}>

        <div className={styles.head}>
          <h1>我的评价</h1>
        </div>

        <div className={styles.body}>

          {
            list.map((item, index) => (
              <div key={index} className={styles.item}>
                <p className={styles.name}>{item.username}</p>
                <div className={styles.star}><Rate disabled defaultValue={item.star} /></div>
                <p className={styles.content}>{item.content}</p>
                <p className={styles.info}>
                  <span>{item.date}</span>
                  <span>{item.courseTime}</span>
                </p>
              </div>
            ))
          }

        </div>

      </div>

    )
  }

}
