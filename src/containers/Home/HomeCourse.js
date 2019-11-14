import React from 'react';
import { Link } from 'dva/router'
import { Row, Col } from 'antd'
import styles from './HomeCourse.less'

const list = [
  {
    title: '陪孩子读绘本的正确姿势',
    desc: '根据学员需求，汇总最新知名绘本大奖获奖作品清单，并根据不同年龄段孩子阅读特点，进行提示和绘本推荐。',
    img: require('@/assets/home/Bitmap@2x(1).png')
  },
  {
    title: '给孩子的第一堂宇宙课',
    desc: '中英文双语，展现孩子从未见过的宇宙。 The Universe as you’ve never seen it before. 用兴趣点燃创造力，借科学改变思维世界。',
    img: require('@/assets/home/Bitmap@2x(2).png')
  }
]

export default function HomeCourse () {

  return(

    <div className={styles.container}>
      <Row>
        <Col xs={0} sm={2} md={2} lg={2} xl={4}/>
        <Col xs={24} sm={20} md={20} lg={20} xl={16}>

          <div className={styles.head}>
            <i/>
            <h2>课程介绍</h2>
          </div>

          <div className={styles.body}>
            <Row gutter={44}>

              {
                list.map((item, index) => (
                  <Col xs={24} sm={12} md={12} lg={12} xl={12} key={index}>
                    <Link to="/" className={styles.item}>
                      <img src={item.img} alt="bg"/>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </Link>
                  </Col>
                ))
              }

            </Row>
          </div>

          <div className={styles.foot}>
            <Link to="/">
              <span>更多课程体<img src={require('@/assets/com/arrow_right@2x.png')} alt="arrow"/></span>
            </Link>
          </div>

        </Col>
        <Col xs={0} sm={2} md={2} lg={2} xl={4}/>
      </Row>
    </div>


  )

}
