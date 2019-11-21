import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import { Rate } from 'antd'
import styles from './AccountOrder.less'

const list = [
  {
    id: '123456789',
    title: '小小发明家物理科学系列课程',
    thumb: require('@/assets/category/course01.png'),
    date: '2019-01-01 09:41',
    price: '1420.80',
    star: 4,
  },
  {
    id: '123456789',
    title: '小小发明家物理科学系列课程',
    thumb: require('@/assets/category/course02.png'),
    date: '2019-01-01 09:41',
    price: '1420.80',
    star: 4,
  },
  {
    id: '123456789',
    title: '小小发明家物理科学系列课程',
    thumb: require('@/assets/category/course03.png'),
    date: '2019-01-01 09:41',
    price: '1420.80',
    star: 4,
  },
]

@connect(state => ({
  global: state.global
}))
export default class AccountOrder extends React.Component {

  render(){

    return(

      <div className={styles.container}>

        <div className={styles.head}>
          <h1>我的订单</h1>
        </div>

        <div className={styles.body}>
          {
            list.map((item, index) => (
              <div key={index} className={styles.item}>
                <img src={item.thumb} alt="thumb" className={styles.thumb}/>
                <div className={styles.info}>
                  <div className={styles.title}>
                    <strong>{item.title}</strong>
                    <Rate disabled defaultValue={item.star} />
                  </div>
                  <div className={styles.desc}>
                    <span>订单ID：{item.id}</span>
                    <span>{item.date}</span>
                  </div>
                  <div className={styles.action}>
                    <span className={styles.price}>¥ {item.price}</span>
                    <span><Link to={`/account/order/${item.id}`}>订单详情</Link></span>
                    <span>写评价</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>

    )
  }

}
