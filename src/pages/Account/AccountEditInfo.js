import React from 'react';
import { Tabs } from 'antd';

import AccountCourse from './AccountCourse'
import AccountRoutes from './AccountRoutes'

const { TabPane } = Tabs;

export default class AccountEditInfo extends React.Component {

  render(){

    return(

      <div>
        <Tabs
          defaultActiveKey="1"
          animated={false}
          size="large"
        >

          <TabPane tab="我的课程" key="1">
            <AccountCourse/>
          </TabPane>

          <TabPane tab="我的笔记" key="2">
            <AccountRoutes/>
          </TabPane>

        </Tabs>
      </div>

    )
  }

}
