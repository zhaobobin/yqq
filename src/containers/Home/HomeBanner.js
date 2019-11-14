import React from 'react';
import { Row, Col, Form, Button } from 'antd'
import { InputItem } from 'antd-mobile'
import styles from './HomeBanner.less'

export default class HomeBanner extends React.Component {

  submit = () => {
    console.log(111)
  }

  render(){

    return(

      <div className={styles.container}>
        <img src={require('@/assets/home/banner_bg@2x.png')} alt="bg"/>
        <div className={styles.bg}/>
        <div className={styles.con}>
          <Row>

            <Col xs={0} sm={2} md={2} lg={2} xl={4}/>

            <Col xs={24} sm={20} md={20} lg={20} xl={16}>

              <div className={styles.con}>
                <Row>
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <div className={styles.content}>
                      <h2>免费领取课程</h2>
                      <Form onSubmit={this.submit}>
                        <div className={styles.input}>
                          <InputItem type="phone" placeholder="请输入您的电话"/>
                          <Button className={styles.btn}>立即领取</Button>
                        </div>
                      </Form>
                    </div>
                  </Col>
                  <Col xs={0} sm={0} md={12} lg={12}/>
                </Row>
              </div>

            </Col>

            <Col xs={0} sm={2} md={2} lg={2} xl={4}/>

          </Row>
        </div>
      </div>

    )
  }

}
