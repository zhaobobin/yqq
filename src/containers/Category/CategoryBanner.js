import React from 'react'
import { Row, Col } from 'antd'
import styles from './CategoryBanner.less'

export default function CategoryBanner () {
  return(
    <div className={styles.container}>
      <img src={require('@/assets/category/banner.jpg')} alt="banner"/>

      <div className={styles.title}>
        <Row>

          <Col xs={0} sm={2} md={2} lg={2} xl={4}/>

          <Col xs={24} sm={20} md={20} lg={20} xl={16}>

            <div className={styles.con}>
              <h1>课程分类</h1>
            </div>

          </Col>

          <Col xs={0} sm={2} md={2} lg={2} xl={4}/>

        </Row>
      </div>
    </div>
  )
}
