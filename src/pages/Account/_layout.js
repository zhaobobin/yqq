/**
 * 设置 - 布局
 */
import React from 'react';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import { Row, Col } from 'antd';
import NotFound from "@/pages/Other/404";
import styles from './_layout.less'

import LoadingBg from '@/components/Common/LoadingBg'
import AccountBreadcrumb from '@/containers/Account/AccountBreadcrumb'
import AccountMenu from '@/containers/Account/AccountMenu'
import AccountMenuDrawer from '@/containers/Account/AccountMenuDrawer'
import AccountInfo from '@/containers/Account/AccountInfo'

import RouteExtend from '@/components/Common/RouteExtend'
const Routes = RouteExtend('account');

@connect(state => ({
  global: state.global
}))
export default class _layout extends React.Component {

  constructor(props){
    super(props);
    this.loading = false;
    this.state = {

    }
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    // this.queryUserDetail()
  }

  queryUserDetail(){
    this.props.dispatch({
      type: 'global/accountDetail',
      payload: {},
      callback: () => {
        this.loading = false;
      }
    })
  }

  render(){

    const { isAuth, currentUser } = this.props.global;

    return(
      <div className={styles.container}>

        {
          this.loading ?
            <LoadingBg
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
              }}
            />
            :
            <Row>
              <Col xs={0} sm={0} md={1} lg={2} xl={4}/>

              <Col xs={24} sm={24} md={22} lg={20} xl={16}>

                <AccountBreadcrumb routes={Routes}/>

                <div className={styles.main}>
                  <Row>

                    <Col xs={0} sm={0} md={7} lg={6} xl={6}>
                      <div className={styles.slide}>
                        <AccountInfo currentUser={currentUser}/>
                        <AccountMenu routes={Routes}/>
                      </div>
                    </Col>

                    <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                      <AccountMenuDrawer routes={Routes} title="个人中心" />
                    </Col>

                    <Col xs={24} sm={24} md={17} lg={18} xl={18}>
                      <div className={styles.content}>
                        {
                          isAuth ?
                            <Switch>
                              {
                                Routes.children.map(item => (
                                  <Route
                                    exact={item.exact}
                                    key={item.path}
                                    path={`/${Routes.path}/${item.path}`}
                                    component={item.component}
                                  />
                                ))
                              }
                              <Redirect exact from='/account' to='/account/info' />
                              <Route component={NotFound} />
                            </Switch>
                            :
                            <Redirect to='/'/>
                        }
                      </div>
                    </Col>

                  </Row>
                </div>

              </Col>

              <Col xs={0} sm={0} md={1} lg={2} xl={4}/>
            </Row>
        }

      </div>
    )
  }
}
