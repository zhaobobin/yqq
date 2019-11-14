import React from 'react';
import { Link } from 'dva/router'
import { Row, Col } from 'antd'
import styles from './HomeTese.less'

export default function HomeTese () {

  return(

    <div className={styles.container}>
      <Row>
        <Col xs={0} sm={2} md={2} lg={2} xl={4}/>
        <Col xs={24} sm={20} md={20} lg={20} xl={16}>

          <Row gutter={50}>
            <Col xs={24} sm={8} md={8} lg={8} xl={8}>
              <Link to="/" className={styles.link}>
                <img src={require('@/assets/home/Bitmap@2x.png')} alt="bg"/>
                <span>课程介绍</span>
              </Link>
            </Col>
            <Col xs={24} sm={8} md={8} lg={8} xl={8}>
              <Link to="/" className={styles.link}>
                <img src={require('@/assets/home/Bitmap@2x(1).png')} alt="bg"/>
                <span>师资介绍</span>
              </Link>
            </Col>
            <Col xs={24} sm={8} md={8} lg={8} xl={8}>
              <Link to="/" className={styles.link}>
                <img src={require('@/assets/home/Bitmap@2x(2).png')} alt="bg"/>
                <span>学员案例</span>
              </Link>
            </Col>
          </Row>

        </Col>
        <Col xs={0} sm={2} md={2} lg={2} xl={4}/>
      </Row>
    </div>


  )

}
