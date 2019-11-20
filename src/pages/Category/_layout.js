import React from 'react';
import { Row, Col } from 'antd'

import LoadLazy from '@/components/Common/LoadLazy'
import CategoryBanner from '@/containers/Category/CategoryBanner'

export default class _layout extends React.Component {

  render(){

    return(

      <div>

        <LoadLazy height="300">
          <CategoryBanner/>
        </LoadLazy>

        <Row>

          <Col xs={0} sm={2} md={2} lg={2} xl={4}/>

          <Col xs={24} sm={20} md={20} lg={20} xl={16}>



          </Col>

          <Col xs={0} sm={2} md={2} lg={2} xl={4}/>

        </Row>

      </div>

    )
  }

}
