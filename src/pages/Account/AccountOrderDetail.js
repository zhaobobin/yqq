import React from 'react';
import { Rate } from 'antd'
import styles from './AccountOrderDetail.less'

const detail = {
  id: '123456789',
  title: '小小发明家物理科学系列课程',
  thumb: require('@/assets/category/course01.png'),
  date: '2019-01-01 09:41',
  price: '1420.80',
  star: 4,
  payMethod: '支付宝',
  payId: '123456789',
}

export default class AccountOrderDetail extends React.Component {

  render(){

    return(

      <div className={styles.container}>

        <div className={styles.head}>
          <h1>订单详情</h1>
        </div>

        <div className={styles.body}>

          <div className={styles.item}>
            <img src={detail.thumb} alt="thumb" className={styles.thumb}/>
            <div className={styles.info}>
              <div className={styles.title}>
                <strong>{detail.title}</strong>
                <Rate disabled defaultValue={detail.star} />
              </div>
              <div className={styles.desc}>
                <span>订单ID：{detail.id}</span>
                <span>{detail.date}</span>
              </div>
              <div className={styles.action}>
                <span className={styles.price}>¥ {detail.price}</span>
              </div>
            </div>

            <div className={styles.detail}>
              <ul>
                <li>
                  <label>订单ID：</label>
                  <span>{detail.id}</span>
                </li>
                <li>
                  <label>商品名称：</label>
                  <span>{detail.title}</span>
                </li>
                <li>
                  <label>下单时间：</label>
                  <span>{detail.date}</span>
                </li>
                <li>
                  <label>付款时间：</label>
                  <span>{detail.date}</span>
                </li>
                <li>
                  <label>支付方式：</label>
                  <span>{detail.payMethod}</span>
                </li>
                <li>
                  <label>支付金额：</label>
                  <span>{detail.price}</span>
                </li>
                <li>
                  <label>支付ID：</label>
                  <span>{detail.payId}</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>

    )
  }

}
