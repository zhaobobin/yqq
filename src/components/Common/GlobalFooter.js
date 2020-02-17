import React from 'react';
import { Link } from 'dva/router';
import { Row, Col } from 'antd';
import { ENV } from '@/utils'
import styles from './GlobalFooter.less';

import logo from '@/assets/com/logo.png'

const center = {
  xs: 22,
  sm: 20,
  md: 18,
  lg: 18
};

const slide = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3
};

export default function GlobalFooter (props) {

  return(
    <div className={styles.container}>
      <Row>
        <Col {...slide}/>
        <Col {...center}>

          <Row>

            <Col xs={24} sm={24} md={4} lg={4}>
              <div className={styles.logo}>
                <Link to="/">
                  <img src={logo} alt="logo"/>
                </Link>
              </div>
            </Col>

            <Col xs={24} sm={24} md={20} lg={20}>
              <div className={styles.copyright}>
                <p><span>{ENV.info.copyright}</span></p>
                <p>
                  <span>{ENV.info.company} 版权所有</span>
                  <span>|</span>
                  <span>
                    <a href="http://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">{ENV.info.beian}</a>
                  </span>
                  <span>|</span>
                  <span><Link to="/">问题反馈</Link></span>
                  <span>|</span>
                  <span><Link to="/">帮助</Link></span>
                </p>
              </div>
            </Col>

          </Row>

        </Col>
        <Col {...slide}/>
      </Row>
    </div>
  )
};
