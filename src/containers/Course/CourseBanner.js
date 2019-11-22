import React from 'react'
import { Row, Col } from 'antd'
import styles from './CourseBanner.less'

export default class CourseBanner extends React.Component{

  render(){
    return(
      <div className={styles.container}>
        <img src={require('@/assets/category/banner02.jpg')} alt="banner"/>

        <div className={styles.title}>
          <Row>

            <Col xs={0} sm={2} md={2} lg={2} xl={4}/>

            <Col xs={24} sm={20} md={20} lg={20} xl={16}>

              <div className={styles.con}>
                <h1>Java学习指南系列</h1>
              </div>

            </Col>

            <Col xs={0} sm={2} md={2} lg={2} xl={4}/>

          </Row>
        </div>
      </div>
    )
  }

}
