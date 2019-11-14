import React from 'react';
import { Row, Col } from 'antd'
import { Map, Marker } from 'react-amap';
import styles from './HomeAddress.less'

const position = { longitude: 116.474466, latitude: 39.950875};

export default class HomeAddress extends React.Component {

  render(){
    return(

      <div className={styles.container}>
        <Row>
          <Col xs={0} sm={2} md={2} lg={2} xl={4}/>
          <Col xs={24} sm={20} md={20} lg={20} xl={16}>

            <div className={styles.head}>
              <i/>
              <h2>校区地址</h2>
            </div>

            <div className={styles.body}>

              <div className={styles.map}>
                <Map plugins={['ToolBar']} zoom={14} center={position}>
                  <Marker position={position} />
                </Map>
              </div>

            </div>

            <div className={styles.foot}>
              <div className={styles.info}>
                <p>电话：<span>010-12345678</span></p>
                <p>地址：<span>西城区西什库大街31号院</span></p>
              </div>
            </div>

          </Col>
          <Col xs={0} sm={2} md={2} lg={2} xl={4}/>
        </Row>
      </div>


    )
  }

}
